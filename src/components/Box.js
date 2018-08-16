
import React from 'react';

export class Box extends React.Component {

  render() {
    return (
      <button
        onClick={(e) => this.props.handleClick(this.props.index) }
        className="box"
        style = {{
          width: "80px",
          height: "80px",
          backgroundColor: this.props.color,
        }}> {this.props.index}
    </button>
  )
  }
}