import React, { Component } from "react";

class HelloWorldApi extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "HELLO!!!" };
  }

  render() {
    return (
      <div>
        {this.state.hello}
        <h1>{this.props.hellothere}</h1>
      </div>
    );
  }
}

export default HelloWorldApi;
