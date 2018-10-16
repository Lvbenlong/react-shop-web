import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from '../actions/userinfo';
import { getVideoList } from '../server/api';
import '../assets/less/home.less'
import RecommendVideo from '../components/RecommendVideo'
import Category from '../components/Category'
import Deal from '../components/Deal'
import Download from '../components/Download'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: []
    };
  }
  componentDidMount() {
    this.handleFetchdata()
  }
  async handleFetchdata() {
    const {data} = await getVideoList()
    this.setState({
      videoList: data
    })
  }
  render() {
    return (
      <div className="home">
        <div className="mainArea homeContent">
          <div className="recommendVideo">
            {
              this.state.videoList ? this.state.videoList.map((item, index) => {
                return <RecommendVideo key={index} data={item} />
              }) : null
            }
          </div>
          <div className="side">
            <Category />
            <Deal />
            <Download />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);