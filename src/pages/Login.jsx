import React, { Component } from 'react'
import '../assets/less/login.less'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from '../actions/userinfo';
import { userLogin, getUserInfo } from '../server/api'
import storage from '../utils/storage'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  async hadnleLogin() {
    const param = {
      username: '522407532@qq.com',
      password: '12345678'
    }
    const res = await userLogin(param);
    console.log(res);
    storage.set('token', res.data.token)
    const userinfo = await getUserInfo();
    console.log(userinfo);
    this.props.userinfoActions.login(userinfo.data);

  }

  render() {
    return (
      <div className="login-content mainArea">
        <button onClick={this.hadnleLogin.bind(this)}>login</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
