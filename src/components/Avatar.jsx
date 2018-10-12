import React, { Component } from 'react'
import '../assets/less/component.less'

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="avatar">
        <img src="https://lorempixel.com/640/480/?68639" alt=""/>
      </div>
    );
  }
}

export default Avatar;