import React from 'react';
import "./Intro.css"

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      intro: true,
      showState: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.showIntro = this.showIntro.bind(this);
  }

  handleClick() {
    this.showIntro();
  }

  componentDidMount() {
    this.showIntro();
  }

  showIntro() {
    this.setState({showState: this.state.showState + 1});
    if (this.state.showState < 20) {
      setTimeout(() => {
        this.showIntro();
      }, 500);
    }
  }

  render() {
    return (
      <div className="intro">
        <h1 className={this.state.showState >= 3 ? "hidden title" : "hidden"}>Trevor Kollins Presents</h1>
        <div className={this.state.showState >= 7 ? "hidden descript" : "hidden"}>
          <p>You find yourself awakening in a silent, black room.</p>
          <p>As you gain consciousness, you notice a small, rotating cube</p>
          <p>floating in front of you. Curious, you reach out towards it...</p>
        </div>
        <button className={this.state.showState >= 13 ? "hidden begin" : "hidden"} onClick={() => this.props.endIntro()}>Reach Out</button>
        <div></div>
      </div>
    );
  }
}

export default Intro;
