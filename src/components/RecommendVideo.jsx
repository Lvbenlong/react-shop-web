import React, { Component } from 'react'
import '../assets/less/recommendVideo.less'
import Avatar from './Avatar'

class RecommendVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="recommendVideo">
        <div className="thumb">
          <img src="https://lorempixel.com/640/480/?68639" alt=""/>
        </div>
        <p className="title">titlke</p>
        <p className="price">$1223.00</p>
        <div className="recommendUser">
          <Avatar/>
        </div>
      </div>
    );
  }
}

export default RecommendVideo;