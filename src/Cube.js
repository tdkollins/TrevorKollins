import React from "react";
import Canvas from "./Canvas.js"
import Icon from "./Icon.js"
import "./Cube.css"

// Note: Some of the cube code and equations were derrived with the help of
// https://github.com/frankarendpoth/frankarendpoth.github.io/blob/master/content/pop-vlog/javascript/2018/013-cube/cube.html

const Point2D = function(x, y) { this.x = x; this.y = y; };
const Point3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };
const CubeData = function(x, y, z, size) {
  Point3D.call(this, x, y, z);
  size *= 0.5;
  this.vertices = [
    new Point3D(x - size, y - size, z - size),
    new Point3D(x + size, y - size, z - size),
    new Point3D(x + size, y + size, z - size),
    new Point3D(x - size, y + size, z - size),
    new Point3D(x - size, y - size, z + size),
    new Point3D(x + size, y - size, z + size),
    new Point3D(x + size, y + size, z + size),
    new Point3D(x - size, y + size, z + size),
  ];
  this.faces = [
    [0, 1, 2, 3],
    [0, 4, 5, 1],
    [1, 5, 6, 2],
    [3, 2, 6, 7],
    [0, 3, 7, 4],
    [4, 7, 6, 5]
  ];
}

CubeData.prototype = {
  rotateX: function(radianAngle) {
    var cosine = Math.cos(radianAngle);
    var sine = Math.sin(radianAngle);
    for (let index = this.vertices.length - 1; index > -1; --index) {
      let p = this.vertices[index];
      let y = ((p.y - this.y) * cosine) - ((p.z - this.z) * sine);
      let z = ((p.y - this.y) * sine) + ((p.z - this.z) * cosine);

      p.y = y + this.y;
      p.z = z + this.z;
    }
  },

  rotateY: function(radianAngle) {
    var cosine = Math.cos(radianAngle);
    var sine = Math.sin(radianAngle);
    for (let index = this.vertices.length - 1; index > -1; --index) {
      let p = this.vertices[index];
      let x = ((p.z - this.z) * sine) + ((p.x - this.x) * cosine);
      let z = ((p.z - this.z) * cosine) - ((p.x - this.x) * sine);

      p.x = x + this.x;
      p.z = z + this.z;
    }
  },

  rotateZ: function(radianAngle) {
    var cosine = Math.cos(radianAngle);
    var sine = Math.sin(radianAngle);
    for (let index = this.vertices.length - 1; index > -1; --index) {
      let p = this.vertices[index];
      let x = ((p.y - this.y) * sine) + ((p.x - this.x) * cosine);
      let y = ((p.y - this.y) * cosine) - ((p.x - this.x) * sine);

      p.x = x + this.x;
      p.y = y + this.y;
    }
  },
};


class Cube extends React.Component {
  constructor(props) {
    super(props);
    var icons = this.setupIcons();
    this.state = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      cube: new CubeData(0, 0, 300, 200),
      start: true,
      icons: icons,
      focal_length: 400,
      expand: false
    };
    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.saveContext = this.saveContext.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.project = this.project.bind(this);
  }

  setupIcons() {
    var icons = [];
    icons.push(new Icon("githubLogo.png",
      (document.body.clientWidth / 2) - 30,
      (document.body.clientHeight / 2) - 80,
      "https://github.com/tdkollins"));
    icons.push(new Icon("linkedinLogo.png",
      (document.body.clientWidth / 2) - 75,
      (document.body.clientHeight / 2) + 30,
      "https://www.linkedin.com/in/trevor-kollins-ab3635178/?originalSubdomain=ca"));
    icons.push(new Icon("devpostLogo.png",
      (document.body.clientWidth / 2) + 60,
      (document.body.clientHeight / 2),
      "https://devpost.com/tdkollin?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"));
    icons.push(new Icon("resume.png",
      (document.body.clientWidth / 2) + 40,
      (document.body.clientHeight / 2) + 75,
      "Trevor Kollins.pdf"));
    return icons;
  }

  updateIcons() {
    this.state.icons[0].originX = (document.body.clientWidth / 2) - 30;
    this.state.icons[0].originY = (document.body.clientHeight / 2) - 80;
    this.state.icons[1].originX = (document.body.clientWidth / 2) - 75;
    this.state.icons[1].originY = (document.body.clientHeight / 2) + 30;
    this.state.icons[2].originX = (document.body.clientWidth / 2) + 60;
    this.state.icons[2].originY = (document.body.clientHeight / 2);
    this.state.icons[3].originX = (document.body.clientWidth / 2) + 40;
    this.state.icons[3].originY = (document.body.clientHeight / 2) + 75;
  }

  saveContext(ctx) {
    this.ctx = ctx;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
  }

  // for projecting depth into the cube.
  project() {
    var points2d = [];
    var fl = this.state.focal_length;
    for (let curPoint = 0; curPoint < this.state.cube.vertices.length; ++curPoint) {
      const p = this.state.cube.vertices[curPoint];
      const x = p.x * (fl / p.z) + document.body.clientWidth * 0.5;
      const y = p.y * (fl / p.z) + document.body.clientHeight * 0.5;
      points2d.push(new Point2D(x, y));
    }
    return points2d;
  }

  // for determining front facing faces
  isFrontFacing(face, cube) {
    // determine if face is front facing
    // 3 points on the face for calculations below
    const point1 = cube.vertices[face[0]];
    const point2 = cube.vertices[face[1]];
    const point3 = cube.vertices[face[2]];

    // get 2 vectors from the three points
    const vector1 = new Point3D(
      point2.x - point1.x,
      point2.y - point1.y,
      point2.z - point1.z
    );
    const vector2 = new Point3D(
      point3.x - point1.x,
      point3.y - point1.y,
      point3.z - point1.z
    );

    // take the normal of the 2 vectors (normal of the plane of that face)
    const normal = new Point3D(vector1.y * vector2.z - vector1.z * vector2.y,
                               vector1.z * vector2.x - vector1.x * vector2.z,
                               vector1.x * vector2.y - vector1.y * vector2.x);

    // front facing if >= 0
    return point1.x * normal.x + point1.y * normal.y + point1.z * normal.z >= 0;
  }

  // moving the cube
  handleMove(e) {
    if (!this.props.introState) {
      let shouldExpand = false;

      for (let i = 0; i < this.state.icons.length; ++i) {
        let curIcon = this.state.icons[i]
        let distance = this.calculateDistance(e.x, e.y,
          curIcon.x + (curIcon.width / 2), curIcon.y + (curIcon.width / 2));
        if (distance < 25) {
          shouldExpand = true;
          break;
        }
      }
      if (shouldExpand && !this.state.expand) {
        this.setState({expand: true});
      } else if (!shouldExpand && this.state.expand) {
        this.setState({expand: false});
      }
    }
  }

  calculateDistance(fromX, fromY, toX, toY) {
    var xDis = Math.pow((fromY - toY), 2);
    var yDis = Math.pow((fromX - toX), 2);
    var distance = (Math.sqrt(xDis + yDis)); // euclidian distance
    return distance;
  }

  handleClick(e) {
    if (this.state.expand) {
      let curIcon = this.state.icons[0];
      let closestIcon = curIcon;
      var curClosest = this.state.icons[0];
      var minDistance = this.calculateDistance(e.x, e.y,
        curIcon.x + (curIcon.width / 2), curIcon.y + (curIcon.width / 2));

      for (let i = 0; i < this.state.icons.length; ++i) {
        curIcon = this.state.icons[i]
        let distance = this.calculateDistance(e.x, e.y,
          curIcon.x + (curIcon.width / 2), curIcon.y + (curIcon.width / 2));
        if (distance < minDistance) {
          minDistance = distance;
          closestIcon = curIcon;
        }
      }

      window.open(closestIcon.imageURL);
    }
  }

  changeCubeSize() {
    if (this.state.expand) {
      if (this.state.focal_length < 420) {
        this.state.focal_length += 4;
      }
    } else {
      if (this.state.focal_length > 400) {
        this.state.focal_length -= 4;
      }
    }
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    document.addEventListener('mousemove', this.handleMove);
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate() {
    if (this.state.width != document.body.clientWidth ||
        this.state.height != document.body.clientHeight) {
      this.setState({
        width: document.body.clientWidth,
        height: document.body.clientHeight
      });
      this.updateIcons();
    }
    for (let i = 0; i < this.state.icons.length; ++i) {
      let curIcon = this.state.icons[i];
      curIcon.increment();
    }
    this.changeCubeSize();
    if (this.state.start) {
      this.state.cube.rotateX(0.5 * 0.0075);
      this.state.cube.rotateY(0.5 * -0.005);
      this.state.cube.rotateZ(0.5 * 0.0015);
    }
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas angle={this.state.angle}
                   contextRef={this.saveContext}
                   cube={this.state.cube}
                   project={this.project}
                   isFrontFacing={this.isFrontFacing}
                   icons={this.state.icons}
                   introState={this.props.introState}/>
  }
}

export default Cube
