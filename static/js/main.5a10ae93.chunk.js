(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,,,,,,function(t,e,i){t.exports=i(18)},,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n),a=i(8),o=i.n(a),h=(i(14),i(2)),c=i(3),r=i(6),l=i(4),u=i(1),d=i(5),v=(i(15),i(16),function(t){function e(t){var i;return Object(h.a)(this,e),(i=Object(r.a)(this,Object(l.a)(e).call(this,t))).state={brightness:.2},i.canvasRef=s.a.createRef(),i.updateBrightness=i.updateBrightness.bind(Object(u.a)(i)),i}return Object(d.a)(e,t),Object(c.a)(e,[{key:"updateBrightness",value:function(t){t||this.state.brightness<1&&this.setState({brightness:this.state.brightness+.02})}},{key:"componentDidUpdate",value:function(t){this.updateBrightness(t.introState);var e=this.canvasRef.current.getContext("2d");e.filter="brightness("+this.state.brightness+")",e.fillStyle="#000000",e.fillRect(0,0,t.width,t.height);var i=t.cube;e.strokeStyle="#004000";for(var n=this.props.project(i.vertices,t.width,t.height),s=i.faces.length-1;s>-1;--s){var a=i.faces[s];this.props.isFrontFacing(a,i)||(e.strokeStyle="#004040",e.beginPath(),e.moveTo(n[a[0]].x,n[a[0]].y),e.lineTo(n[a[1]].x,n[a[1]].y),e.lineTo(n[a[2]].x,n[a[2]].y),e.lineTo(n[a[3]].x,n[a[3]].y),e.closePath(),e.stroke())}for(var o=0;o<t.icons.length;++o){var h=t.icons[o];e.drawImage(h.image,h.x,h.y)}for(var c=i.faces.length-1;c>-1;--c){var r=i.faces[c];this.props.isFrontFacing(r,i)&&(e.strokeStyle="#004040",e.beginPath(),e.moveTo(n[r[0]].x,n[r[0]].y),e.lineTo(n[r[1]].x,n[r[1]].y),e.lineTo(n[r[2]].x,n[r[2]].y),e.lineTo(n[r[3]].x,n[r[3]].y),e.closePath(),e.stroke())}}},{key:"componentDidMount",value:function(){var t=this.canvasRef.current;t.getContext("2d").fillRect(0,0,t.width,t.height)}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.expand?"canvasContainer active":"canvasContainer"},s.a.createElement("canvas",{width:this.props.width,height:this.props.height,ref:this.canvasRef}))}}]),e}(s.a.Component)),m=function(){function t(e,i,n,s){Object(h.a)(this,t),this.image=new Image,this.image.src=e,this.imageURL=s,this.originX=i,this.originY=n,this.x=i,this.y=n,this.radius=3,this.speed=.03,this.step=360*Math.random(),this.width=50}return Object(c.a)(t,[{key:"increment",value:function(){this.x=this.originX-this.width/2+this.radius*Math.cos(this.speed*this.step),this.y=this.originY-this.width/2+this.radius*Math.sin(this.speed*this.step),++this.step}}]),t}(),p=function(t,e){this.x=t,this.y=e},g=function(t,e,i){this.x=t,this.y=e,this.z=i},y=function(t,e,i,n){g.call(this,t,e,i),n*=.5,this.vertices=[new g(t-n,e-n,i-n),new g(t+n,e-n,i-n),new g(t+n,e+n,i-n),new g(t-n,e+n,i-n),new g(t-n,e-n,i+n),new g(t+n,e-n,i+n),new g(t+n,e+n,i+n),new g(t-n,e+n,i+n)],this.faces=[[0,1,2,3],[0,4,5,1],[1,5,6,2],[3,2,6,7],[0,3,7,4],[4,7,6,5]]};y.prototype={rotateX:function(t){for(var e=Math.cos(t),i=Math.sin(t),n=this.vertices.length-1;n>-1;--n){var s=this.vertices[n],a=(s.y-this.y)*e-(s.z-this.z)*i,o=(s.y-this.y)*i+(s.z-this.z)*e;s.y=a+this.y,s.z=o+this.z}},rotateY:function(t){for(var e=Math.cos(t),i=Math.sin(t),n=this.vertices.length-1;n>-1;--n){var s=this.vertices[n],a=(s.z-this.z)*i+(s.x-this.x)*e,o=(s.z-this.z)*e-(s.x-this.x)*i;s.x=a+this.x,s.z=o+this.z}},rotateZ:function(t){for(var e=Math.cos(t),i=Math.sin(t),n=this.vertices.length-1;n>-1;--n){var s=this.vertices[n],a=(s.y-this.y)*i+(s.x-this.x)*e,o=(s.y-this.y)*e-(s.x-this.x)*i;s.x=a+this.x,s.y=o+this.y}}};var f=function(t){function e(t){var i;Object(h.a)(this,e);var n=(i=Object(r.a)(this,Object(l.a)(e).call(this,t))).setupIcons();return i.state={width:document.body.clientWidth,height:document.body.clientHeight,cube:new y(0,0,300,200),start:!0,icons:n,focal_length:400,expand:!1,lastAnimated:Date.now()},i.updateAnimationState=i.updateAnimationState.bind(Object(u.a)(i)),i.saveContext=i.saveContext.bind(Object(u.a)(i)),i.handleMove=i.handleMove.bind(Object(u.a)(i)),i.handleClick=i.handleClick.bind(Object(u.a)(i)),i.project=i.project.bind(Object(u.a)(i)),i}return Object(d.a)(e,t),Object(c.a)(e,[{key:"setupIcons",value:function(){var t=[];return t.push(new m("githubLogo.png",document.body.clientWidth/2-30,document.body.clientHeight/2-80,"https://github.com/tdkollins")),t.push(new m("linkedinLogo.png",document.body.clientWidth/2-75,document.body.clientHeight/2+30,"https://www.linkedin.com/in/trevor-kollins-ab3635178/?originalSubdomain=ca")),t.push(new m("devpostLogo.png",document.body.clientWidth/2+60,document.body.clientHeight/2,"https://devpost.com/tdkollin?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav")),t.push(new m("resume.png",document.body.clientWidth/2+40,document.body.clientHeight/2+75,"Trevor Kollins.pdf")),t}},{key:"updateIcons",value:function(){var t=this.state.icons;t[0].originX=document.body.clientWidth/2-30,t[0].originY=document.body.clientHeight/2-80,t[1].originX=document.body.clientWidth/2-75,t[1].originY=document.body.clientHeight/2+30,t[2].originX=document.body.clientWidth/2+60,t[2].originY=document.body.clientHeight/2,t[3].originX=document.body.clientWidth/2+40,t[3].originY=document.body.clientHeight/2+75,this.setState({icons:t})}},{key:"saveContext",value:function(t){this.ctx=t,this.width=this.ctx.canvas.width,this.height=this.ctx.canvas.height}},{key:"project",value:function(){for(var t=[],e=this.state.focal_length,i=0;i<this.state.cube.vertices.length;++i){var n=this.state.cube.vertices[i],s=n.x*(e/n.z)+.5*this.state.width,a=n.y*(e/n.z)+.5*this.state.height;t.push(new p(s,a))}return t}},{key:"isFrontFacing",value:function(t,e){var i=e.vertices[t[0]],n=e.vertices[t[1]],s=e.vertices[t[2]],a=new g(n.x-i.x,n.y-i.y,n.z-i.z),o=new g(s.x-i.x,s.y-i.y,s.z-i.z),h=new g(a.y*o.z-a.z*o.y,a.z*o.x-a.x*o.z,a.x*o.y-a.y*o.x);return i.x*h.x+i.y*h.y+i.z*h.z>=0}},{key:"handleMove",value:function(t){if(!this.props.introState){for(var e=!1,i=0;i<this.state.icons.length;++i){var n=this.state.icons[i];if(this.calculateDistance(t.x,t.y,n.x+n.width/2,n.y+n.width/2)<25){e=!0;break}}e&&!this.state.expand?this.setState({expand:!0}):!e&&this.state.expand&&this.setState({expand:!1})}}},{key:"calculateDistance",value:function(t,e,i,n){var s=Math.pow(e-n,2),a=Math.pow(t-i,2);return Math.sqrt(s+a)}},{key:"handleClick",value:function(t){if(this.state.expand){for(var e=this.state.icons[0],i=e,n=this.calculateDistance(t.x,t.y,e.x+e.width/2,e.y+e.width/2),s=0;s<this.state.icons.length;++s){e=this.state.icons[s];var a=this.calculateDistance(t.x,t.y,e.x+e.width/2,e.y+e.width/2);a<n&&(n=a,i=e)}window.open(i.imageURL)}}},{key:"changeCubeSize",value:function(){this.state.expand?this.state.focal_length<420&&this.setState({focal_length:this.state.focal_length+4}):this.state.focal_length>400&&this.setState({focal_length:this.state.focal_length-4})}},{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimationState),document.addEventListener("mousemove",this.handleMove),document.addEventListener("click",this.handleClick)}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.curTime-this.state.lastAnimated>1e3/120&&(this.setState({lastAnimated:Date.now()}),!0)}},{key:"componentDidUpdate",value:function(){(Math.abs(this.state.width-document.body.clientWidth)>30||Math.abs(this.state.height-document.body.clientHeight)>30)&&(this.setState({width:document.body.clientWidth,height:document.body.clientHeight}),this.updateIcons());for(var t=0;t<this.state.icons.length;++t){this.state.icons[t].increment()}this.changeCubeSize(),this.state.start&&(this.state.cube.rotateX(.7*.0075),this.state.cube.rotateY(.7*-.005),this.state.cube.rotateZ(.00105))}},{key:"updateAnimationState",value:function(){this.rAF=requestAnimationFrame(this.updateAnimationState),this.setState({curTime:Date.now()})}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"render",value:function(){return s.a.createElement(v,{contextRef:this.saveContext,cube:this.state.cube,project:this.project,isFrontFacing:this.isFrontFacing,icons:this.state.icons,introState:this.props.introState,width:this.state.width,height:this.state.height,expand:this.state.expand})}}]),e}(s.a.Component),b=(i(17),function(t){function e(){var t;return Object(h.a)(this,e),(t=Object(r.a)(this,Object(l.a)(e).call(this))).state={intro:!0,showState:0},t.handleClick=t.handleClick.bind(Object(u.a)(t)),t.showIntro=t.showIntro.bind(Object(u.a)(t)),t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleClick",value:function(){this.showIntro()}},{key:"componentDidMount",value:function(){this.showIntro()}},{key:"showIntro",value:function(){var t=this;this.setState({showState:this.state.showState+1}),this.state.showState<20&&setTimeout((function(){t.showIntro()}),500)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"intro"},s.a.createElement("h1",{className:this.state.showState>=3?"hidden title":"hidden"},"Trevor Kollins Presents"),s.a.createElement("div",{className:this.state.showState>=7?"hidden descript":"hidden"},s.a.createElement("p",null,"You find yourself awakening in a silent, black room."),s.a.createElement("p",null,"As you gain consciousness, you notice a small, rotating cube"),s.a.createElement("p",null,"floating in front of you. Curious, you reach out towards it...")),s.a.createElement("button",{className:this.state.showState>=13?"hidden begin active":"hidden",onClick:function(){return t.props.endIntro()}},"Reach Out"),s.a.createElement("div",null))}}]),e}(s.a.Component)),w=function(t){function e(){var t;return Object(h.a)(this,e),(t=Object(r.a)(this,Object(l.a)(e).call(this))).state={intro:!0},t.endIntro=t.endIntro.bind(Object(u.a)(t)),t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"endIntro",value:function(){this.setState({intro:!1})}},{key:"render",value:function(){return this.state.intro?s.a.createElement("div",{className:"App"},s.a.createElement(f,{introState:this.state.intro}),s.a.createElement(b,{endIntro:this.endIntro})):s.a.createElement("div",{className:"App"},s.a.createElement(f,{introState:this.state.intro}))}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.5a10ae93.chunk.js.map