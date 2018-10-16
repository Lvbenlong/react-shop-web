import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as userinfoActions from '../../actions/userinfo';
import Avatar from '../../components/Avatar'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
  }
  render() {
    const activeStyle = {
      backgroundColor: '#fff'
    }
    return (
      <div className="user-center">
        <div className="user-info">
          <div className="mainArea">
            <div className="user-account">
              <div className="avatar">
                <Avatar width={80} avatar={this.props.userinfo.avatar} />
              </div>
              <div className="username">
                <p>{this.props.userinfo.first_name} {this.props.userinfo.last_name}</p>
                <p>uaername</p>
              </div>
            </div>
            <p className="tool-link">
              <Link className="tool-item" style={this.props.match.params.tool === 'order' ? activeStyle : null} to="/user/order"><span className="iconfont icon-myorder"></span><span>order</span></Link>
              <Link className="tool-item" style={this.props.match.params.tool === 'coupons' ? activeStyle : null} to="/user/coupons"><span className="iconfont icon-coupon"></span><span>coupons</span></Link>
              <span className="tool-item"><span className="iconfont icon-points"></span><span>point</span></span>
              <Link className="tool-item" style={this.props.match.params.tool === 'address' ? activeStyle : null} to="/user/address"><span className="iconfont icon-address"></span><span>address</span></Link>
            </p>
          </div>
        </div>
        <div className="mainArea tool-content">
          {
            this.props.routes.map((route,key)=>{
              return  <Route key={key} exact path={route.path} component={route.component} />
            })
          }
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo
})

const mapDispatchToProps = {
  userinfoActions: bindActionCreators(userinfoActions),  
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

