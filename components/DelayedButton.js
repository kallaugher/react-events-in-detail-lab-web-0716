import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();

    this.findButtonCoordinates = this.findButtonCoordinates.bind(this);
  }

  findButtonCoordinates(event) {
    event.persist();
    this.props.onDelayedClick(event);
  }

  render() {
    return (
      <button onClick={this.findButtonCoordinates}/>
    )
  }
}

module.exports = DelayedButton;
