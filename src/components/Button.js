
import React from 'react';
import './../static/button.css';


export class Button extends React.Component {

  render() {
    return (
      <button
         onClick={ this.props.onClick }
         className="StyledButton"
         id={this.props.value}
          > {this.props.value} </button>
    )
  }
}