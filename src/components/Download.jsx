import React, { Component } from 'react'

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="download">
        <img src={require('../assets/images/download-apple.png')} alt=""/>
        <img src={require('../assets/images/download-google.png')} alt=""/>
      </div>
    );
  }
}

export default Download;