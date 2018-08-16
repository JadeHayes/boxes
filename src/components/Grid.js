import React from 'react';
import { Box } from './Box';
import { Button } from './Button';
import Flexbox from 'flexbox-react';

export class Grid extends React.Component {
  renderBox(i) {
    return (
            <div>
            <Flexbox className="parent">
              <div className="child">
                {this.props.boxes.map((color,index) => <Box 
                                key= {index}
                                index= {index}
                                color={color}
                                handleClick={ this.props.handleClick() } />)}
              </div>
              </Flexbox>
            </div>
            );
          }
  render() {
  return (
      <div>
        <div className="board-row">
        <Button 
            value="clear"
            onClick={this.props.onClear()} />
        <Button 
            value="save"
            onClick={this.props.onSave()} />
          {this.renderBox()}
        </div>
    </div>
  );
 }
}