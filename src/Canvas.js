import React from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness: 0.2
    }
    this.canvasRef = React.createRef();
    this.updateBrightness = this.updateBrightness.bind(this);
  }

  updateBrightness(introState) {
    if (!introState) {
      if (this.state.brightness < 1) {
        this.state.brightness = this.state.brightness + 0.02;
      }
    }
  }

  componentDidUpdate(newProps) {
    this.updateBrightness(newProps.introState);
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.filter = "brightness(" + this.state.brightness + ")";
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, newProps.width, newProps.height);

    const cube = newProps.cube;

    ctx.strokeStyle = "#004000";
    // ctx.fillStyle = "#050505"; // edit this for faces

    var vertices = this.props.project(cube.vertices,
      newProps.width, newProps.height);

    for (let index = cube.faces.length - 1; index > -1; --index) {
      let face = cube.faces[index];
      if (!this.props.isFrontFacing(face, cube)) { // edit this for faces
      // if (true) {
        ctx.strokeStyle = "#004040";
        ctx.beginPath();
        ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
        ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
        ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
        ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
        ctx.closePath();
        ctx.stroke();
      }
    }

    for (let i = 0; i < newProps.icons.length; ++i) {
      let curIcon = newProps.icons[i];
      ctx.drawImage(curIcon.image, curIcon.x, curIcon.y);
    }

    for (let index = cube.faces.length - 1; index > -1; --index) {
      let face = cube.faces[index];
      if (this.props.isFrontFacing(face, cube)) { // edit this for faces
      // if (true) {
        ctx.strokeStyle = "#004040";
        ctx.beginPath();
        ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
        ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
        ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
        ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  render() {
    return (
      <div>
        <canvas width={this.props.width}
              height={this.props.height}
              ref={this.canvasRef} />
      </div>
    )
  }
}

export default Canvas
