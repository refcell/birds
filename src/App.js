import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.effect = window.VANTA.BIRDS({
      el: "#heading",
      color1: 0xffa400,
      color2: 0xff000e,
      separation: 31.00,
      alignment: 10.00,
      cohesion: 49.00
    })
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
  }
  render() {
    return (
      <div className="App">
        <div id="heading" style={{ height: "100%" }} />
      </div>
    );
  }
}

export default App;
