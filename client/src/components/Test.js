import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
        a: 10
    }
    console.log("constructor")
  }
  componentDidMount() {
      console.log("componentDidMount")
      this.setState({
          a:20
      })
  }
  componentDidUpdate = (prevProps, prevState) => {
      console.log("did update")
  }
 
  shouldComponentUpdate(nextProps, nextState) {
      console.log("Should Component Upd")
      return true;
  }
  

  render() {
      console.log("render")
    return <div></div>;
  }
}

export default Test;
