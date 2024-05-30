
import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      counter: 0,
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  }

  incrementCounter = () => {
    if (this.state.toggle) {
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }
  }

  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <h1>Simple Counter Component</h1>
        <p>Toggle: {this.state.toggle.toString()}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;