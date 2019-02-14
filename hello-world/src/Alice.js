import React, { Component } from 'react';

class Alice extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: props.newMsg
    }

    setTimeout(() => {
      this.setState({greeting : "Hello World Updated!"})
    }, 10000)
  }

  render() {
    return (
      <div>
        <h2> {this.state.greeting} </h2>
      </div>
    );
  }
}

export default Alice;
