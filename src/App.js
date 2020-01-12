import React from 'react';
import './App.css';
import Cube from "./Cube.js";
import Intro from "./Intro.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      intro: true
    };
    this.endIntro = this.endIntro.bind(this);
  }

  endIntro() {
    this.setState({intro: false});
  }

  render() {
    if (this.state.intro) {
      return (
        <div className="App">
          <Cube introState={this.state.intro}/>
          <Intro endIntro={this.endIntro}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Cube introState={this.state.intro}/>
      </div>
    );
  }
}

export default App;
