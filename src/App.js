import React, { Component } from 'react';
import './App.css';

import { Grid } from './components/Grid';
import './App.css';

const tealFill = Array(80).fill("#00a5a1")

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: tealFill.slice(),
      savedArray: []
    };
  }

  handleClear = () => {
    console.log("Clearing stuff")
    this.setState({
      boxes: tealFill.slice()
  }) 
  }

  handleSave = () => {
    console.log("I'm in Save")
    this.setState({
      savedArray: this.state.savedArray.concat([this.state.boxes.slice()])
    }, () => console.log(this.state.savedArray))
  }

  handleClick = (index) => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let rgb = "rgb(" + red + "," + green + "," + blue + ")";
    let newBoxes = this.state.boxes.slice()
    newBoxes[index] = rgb
  this.setState(prevState => ({
    boxes: newBoxes
      }))
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title"> Boxes</h1>
        <Grid
        handleClick={() => this.handleClick}
        onClear={() => this.handleClear}
        onSave={() => this.handleSave}
        boxes={this.state.boxes}

        />
      </div>
    );
  }
}


export default App;
