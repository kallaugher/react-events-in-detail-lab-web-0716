import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.findMouseCoordinates = this.findMouseCoordinates.bind(this);
  }

  findMouseCoordinates(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.props.onReceiveCoordinates([x, y]);
  }

  render() {
    return (
      <button onClick={this.findMouseCoordinates}/>
    )
  }
}

module.exports = CoordinatesButton;
