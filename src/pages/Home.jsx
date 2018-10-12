import React, { Component } from 'react'
import { getVideoList } from '../server/api';
import '../assets/less/home.less'
import RecommendVideo from '../components/RecommendVideo'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    this.handleFetchdata()
  }
  async handleFetchdata() {
    const videolist = await getVideoList()
    console.log(videolist)
  }
  render() {
    return (
      <div className="home">
        <div className="mainArea homeContent">
          <div className="recommendVideo">
            <RecommendVideo />
          </div>
          <div className="side"></div>
        </div>
      </div>
    );
  }
}

export default Home;