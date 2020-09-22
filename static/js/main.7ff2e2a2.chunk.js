(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,,,,,function(t,e,i){t.exports=i(17)},,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),s=i(7),a=i.n(s),h=(i(13),i(2)),c=i(3),r=i(1),d=i(5),l=i(4),u=(i(14),i(15),function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(t){var n;return Object(h.a)(this,i),(n=e.call(this,t)).state={brightness:.2},n.canvasRef=o.a.createRef(),n.updateBrightness=n.updateBrightness.bind(Object(r.a)(n)),n}return Object(c.a)(i,[{key:"updateBrightness",value:function(t){t||this.state.brightness<1&&(this.state.brightness=this.state.brightness+.02)}},{key:"componentDidUpdate",value:function(t){this.updateBrightness(t.introState);var e=this.canvasRef.current.getContext("2d");e.filter="brightness("+this.state.brightness+")",e.fillStyle="#000000",e.fillRect(0,0,t.width,t.height);var i=t.cube;e.strokeStyle="#004000";for(var n=this.props.project(i.vertices,t.width,t.height),o=i.faces.length-1;o>-1;--o){var s=i.faces[o];this.props.isFrontFacing(s,i)||(e.strokeStyle="#004040",e.beginPath(),e.moveTo(n[s[0]].x,n[s[0]].y),e.lineTo(n[s[1]].x,n[s[1]].y),e.lineTo(n[s[2]].x,n[s[2]].y),e.lineTo(n[s[3]].x,n[s[3]].y),e.closePath(),e.stroke())}for(var a=0;a<t.icons.length;++a){var h=t.icons[a];e.drawImage(h.image,h.x,h.y)}for(var c=i.faces.length-1;c>-1;--c){var r=i.faces[c];this.props.isFrontFacing(r,i)&&(e.strokeStyle="#004040",e.beginPath(),e.moveTo(n[r[0]].x,n[r[0]].y),e.lineTo(n[r[1]].x,n[r[1]].y),e.lineTo(n[r[2]].x,n[r[2]].y),e.lineTo(n[r[3]].x,n[r[3]].y),e.closePath(),e.stroke())}}},{key:"componentDidMount",value:function(){var t=this.canvasRef.current;t.getContext("2d").fillRect(0,0,t.width,t.height)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.props.expand?"canvasContainer active":"canvasContainer"},o.a.createElement("canvas",{width:this.props.width,height:this.props.height,ref:this.canvasRef}))}}]),i}(o.a.Component)),g=function(){function t(e,i,n,o){Object(h.a)(this,t),this.image=new Image,this.image.src=e,this.imageURL=o,this.originX=i,this.originY=n,this.x=i,this.y=n,this.radius=3,this.speed=.03,this.step=360*Math.random(),this.width=50}return Object(c.a)(t,[{key:"increment",value:function(){this.x=this.originX-this.width/2+this.radius*Math.cos(this.speed*this.step),this.y=this.originY-this.width/2+this.radius*Math.sin(this.speed*this.step),++this.step}}]),t}(),m=function(t,e){this.x=t,this.y=e},v=function(t,e,i){this.x=t,this.y=e,this.z=i},y=function(t,e,i,n){v.call(this,t,e,i),n*=.5,this.vertices=[new v(t-n,e-n,i-n),new v(t+n,e-n,i-n),new v(t+n,e+n,i-n),new v(t-n,e+n,i-n),new v(t-n,e-n,i+n),new v(t+n,e-n,i+n),new v(t+n,e+n,i+n),new v(t-n,e+n,i+n)],this.faces=[[0,1,2,3],[0,4,5,1],[1,5,6,2],[3,2,6,7],[0,3,7,4],[4,7,6,5]]};y.prototype={rotateX:function(t){for(var e=Math.cos(t),i=Math.sin(t),n=this.vertices.length-1;n>-1;--n){var o=this.vertices[n],s=(o.y-this.y)*e-(o.z-this.z)*i,a=(o.y-this.y)*i+(o.z-this.z)*e;o.y=s+this.y,o.z=a+this.z}},rotateY:function(t){for(var e=Math.cos(t),i=Math.sin(t),n=this.vertices.length-1;n>-1;--n){var o=this.vertices[n],s=(o.z-this.z)*i+(o.x-this.x)*e,a=(o.z-this.z)*e-(o.x-this.x)*i;o.x=s+this.x,o.z=a+this.z}},rotateZ:function(t){for(var e=Math.cos(t),i=Math.sin(t),n=this.vertices.length-1;n>-1;--n){var o=this.vertices[n],s=(o.y-this.y)*i+(o.x-this.x)*e,a=(o.y-this.y)*e-(o.x-this.x)*i;o.x=s+this.x,o.y=a+this.y}}};var b=function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(t){var n;Object(h.a)(this,i),n=e.call(this,t);var o=300,s=200;(document.body.clientWidth<500||document.body.clientHeight<400)&&(o=200,s=100);var a=n.setupIcons();return n.state={width:document.body.clientWidth,height:document.body.clientHeight,cube:new y(0,0,o,s),start:!0,icons:a,focal_length:400,expand:!1,lastAnimated:Date.now()},n.updateAnimationState=n.updateAnimationState.bind(Object(r.a)(n)),n.saveContext=n.saveContext.bind(Object(r.a)(n)),n.handleMove=n.handleMove.bind(Object(r.a)(n)),n.handleClick=n.handleClick.bind(Object(r.a)(n)),n.project=n.project.bind(Object(r.a)(n)),n}return Object(c.a)(i,[{key:"setupIcons",value:function(){var t=[];return document.body.clientWidth>=500&&document.body.clientHeight>=400?(t.push(new g("githubLogo.png",document.body.clientWidth/2-30,document.body.clientHeight/2-80,"https://github.com/tdkollins")),t.push(new g("linkedinLogo.png",document.body.clientWidth/2-75,document.body.clientHeight/2+30,"https://www.linkedin.com/in/trevor-kollins-ab3635178/?originalSubdomain=ca")),t.push(new g("devpostLogo.png",document.body.clientWidth/2+70,document.body.clientHeight/2-20,"https://devpost.com/tdkollin?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav")),t.push(new g("resume.png",document.body.clientWidth/2+40,document.body.clientHeight/2+75,"Trevor Kollins.pdf"))):(t.push(new g("githubLogo.png",document.body.clientWidth/2-30,document.body.clientHeight/2-50,"https://github.com/tdkollins")),t.push(new g("linkedinLogo.png",document.body.clientWidth/2-35,document.body.clientHeight/2+30,"https://www.linkedin.com/in/trevor-kollins-ab3635178/?originalSubdomain=ca")),t.push(new g("devpostLogo.png",document.body.clientWidth/2+40,document.body.clientHeight/2-20,"https://devpost.com/tdkollin?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav")),t.push(new g("resume.png",document.body.clientWidth/2+40,document.body.clientHeight/2+55,"Trevor Kollins.pdf"))),t}},{key:"updateIcons",value:function(){var t=this.state.icons;this.state.width>=500&&this.state.height>=400?(t[0].originX=document.body.clientWidth/2-30,t[0].originY=document.body.clientHeight/2-80,t[1].originX=document.body.clientWidth/2-75,t[1].originY=document.body.clientHeight/2+30,t[2].originX=document.body.clientWidth/2+70,t[2].originY=document.body.clientHeight/2-20,t[3].originX=document.body.clientWidth/2+40,t[3].originY=document.body.clientHeight/2+75):(t[0].originX=document.body.clientWidth/2-30,t[0].originY=document.body.clientHeight/2-50,t[1].originX=document.body.clientWidth/2-35,t[1].originY=document.body.clientHeight/2+30,t[2].originX=document.body.clientWidth/2+40,t[2].originY=document.body.clientHeight/2-20,t[3].originX=document.body.clientWidth/2+40,t[3].originY=document.body.clientHeight/2+55),this.setState({icons:t})}},{key:"saveContext",value:function(t){this.ctx=t,this.width=this.ctx.canvas.width,this.height=this.ctx.canvas.height}},{key:"project",value:function(){for(var t=[],e=this.state.focal_length,i=0;i<this.state.cube.vertices.length;++i){var n=this.state.cube.vertices[i],o=n.x*(e/n.z)+.5*this.state.width,s=n.y*(e/n.z)+.5*this.state.height;t.push(new m(o,s))}return t}},{key:"isFrontFacing",value:function(t,e){var i=e.vertices[t[0]],n=e.vertices[t[1]],o=e.vertices[t[2]],s=new v(n.x-i.x,n.y-i.y,n.z-i.z),a=new v(o.x-i.x,o.y-i.y,o.z-i.z),h=new v(s.y*a.z-s.z*a.y,s.z*a.x-s.x*a.z,s.x*a.y-s.y*a.x);return i.x*h.x+i.y*h.y+i.z*h.z>=0}},{key:"handleMove",value:function(t){if(!this.props.introState){for(var e=!1,i=0;i<this.state.icons.length;++i){var n=this.state.icons[i];if(this.calculateDistance(t.x,t.y,n.x+n.width/2,n.y+n.width/2)<25){e=!0;break}}e&&!this.state.expand?this.setState({expand:!0}):!e&&this.state.expand&&this.setState({expand:!1})}}},{key:"calculateDistance",value:function(t,e,i,n){var o=Math.pow(e-n,2),s=Math.pow(t-i,2);return Math.sqrt(o+s)}},{key:"handleClick",value:function(t){if(this.state.expand){for(var e=this.state.icons[0],i=e,n=this.calculateDistance(t.x,t.y,e.x+e.width/2,e.y+e.width/2),o=0;o<this.state.icons.length;++o){e=this.state.icons[o];var s=this.calculateDistance(t.x,t.y,e.x+e.width/2,e.y+e.width/2);s<n&&(n=s,i=e)}window.open(i.imageURL)}}},{key:"changeCubeSize",value:function(){this.state.expand?this.state.focal_length<420&&this.setState({focal_length:this.state.focal_length+4}):this.state.focal_length>400&&this.setState({focal_length:this.state.focal_length-4})}},{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimationState),document.addEventListener("mousemove",this.handleMove),document.addEventListener("click",this.handleClick)}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.curTime-this.state.lastAnimated>1e3/120&&(this.setState({lastAnimated:Date.now()}),!0)}},{key:"componentDidUpdate",value:function(){(Math.abs(this.state.width-document.body.clientWidth)>30||Math.abs(this.state.height-document.body.clientHeight)>30)&&(this.setState({width:document.body.clientWidth,height:document.body.clientHeight}),this.updateIcons());for(var t=0;t<this.state.icons.length;++t){this.state.icons[t].increment()}this.changeCubeSize(),this.state.start&&(this.state.cube.rotateX(.7*.0075),this.state.cube.rotateY(.7*-.005),this.state.cube.rotateZ(.00105))}},{key:"updateAnimationState",value:function(){this.rAF=requestAnimationFrame(this.updateAnimationState),this.setState({curTime:Date.now()})}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"render",value:function(){return o.a.createElement(u,{contextRef:this.saveContext,cube:this.state.cube,project:this.project,isFrontFacing:this.isFrontFacing,icons:this.state.icons,introState:this.props.introState,width:this.state.width,height:this.state.height,expand:this.state.expand})}}]),i}(o.a.Component),p=(i(16),function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(){var t;return Object(h.a)(this,i),(t=e.call(this)).state={intro:!0,showState:0},t.handleClick=t.handleClick.bind(Object(r.a)(t)),t.showIntro=t.showIntro.bind(Object(r.a)(t)),t}return Object(c.a)(i,[{key:"handleClick",value:function(){this.showIntro()}},{key:"componentDidMount",value:function(){this.showIntro()}},{key:"showIntro",value:function(){var t=this;this.setState({showState:this.state.showState+1}),this.state.showState<20&&setTimeout((function(){t.showIntro()}),500)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"intro"},o.a.createElement("h1",{className:this.state.showState>=3?"hidden title":"hidden"},"Trevor Kollins Presents"),o.a.createElement("div",{className:this.state.showState>=7?"hidden descript":"hidden"},o.a.createElement("p",null,"You find yourself awakening in a silent, black room. As you gain consciousness, you notice a small, rotating cube floating in front of you. Curious, you reach out towards it...")),o.a.createElement("button",{className:this.state.showState>=13?"hidden begin active":"hidden",onClick:function(){return t.props.endIntro()}},"Reach Out"),o.a.createElement("div",null))}}]),i}(o.a.Component)),f=function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(){var t;return Object(h.a)(this,i),(t=e.call(this)).state={intro:!0},t.endIntro=t.endIntro.bind(Object(r.a)(t)),t}return Object(c.a)(i,[{key:"endIntro",value:function(){this.setState({intro:!1})}},{key:"render",value:function(){return this.state.intro?o.a.createElement("div",{className:"App"},o.a.createElement(b,{introState:this.state.intro}),o.a.createElement(p,{endIntro:this.endIntro})):o.a.createElement("div",{className:"App"},o.a.createElement(b,{introState:this.state.intro}))}}]),i}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.7ff2e2a2.chunk.js.map