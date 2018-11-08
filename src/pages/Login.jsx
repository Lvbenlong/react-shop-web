import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'
import '../assets/less/login.less'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from '../actions/userinfo';
// import { userLogin, getUserInfo } from '../server/api'
import { userLogin, getUserInfo } from '../server/api-axios'
import storage from '../utils/storage'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'

import Ax from '../server/axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.email = ''
    this.password = ''
  }

  async hadnleLogin1 () {
    const param = {
      username: '522407532@qq.com',
      password: '12345678'
    }
    try {
      const data = await userLogin(param)
      console.log(data)
    } catch(e) {
      console.log(e)
    }
  }
  async hadnleLogin2 () {
    const param = {
      username: this.email,
      password: this.password
    }
    // axios method 封装过
    try {
      const data = await userLogin(param)
      console.log(data)
    } catch(e) {
      console.log(e.response)
    }
  }

  async hadnleLogin() {
    const param = {
      username: this.email,
      password: this.password
    }


    // axios method 封装过
    const api = 'http://123.207.65.111:8001/api/auth'
    Ax.post(api, param)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response);
    });

    // axios method
    // const api = 'http://123.207.65.111:8001/api/auth'
    // axios.post(api, param)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   console.log(error.response);
    // });

    // fetch method
    // const res = await userLogin(param);
    // console.log(res)
    // try {
    //   const res = await userLogin(param);
    //   console.log(res)
    // } catch (e) {
    //   console.log('error')
    //   console.log(e)
    //   // console.log(JSON.parse(e))
    // }
    // return
    // storage.set('token', res.data.token)
    // const userinfo = await getUserInfo();
    // this.props.userinfoActions.login(userinfo.data);
    // this.props.history.push("/");
  }

  getEmail = (val) => {
    this.email = val.target.value
  }

  getPwd = (val) => {
    this.password = val.target.value
  }

  render() {
    return (
      <div className="login-content mainArea">
        <p className="logo"><img src={require('../assets/images/logo.png')} alt=""/></p>
        <div className="login-box">
          <p className="login-title">Welcome!</p>
          <p className="login-subtitle">Sign in below</p>
          <LoginInput icon="icon-email" getValue={this.getEmail} />
          <LoginInput icon="icon-password" type="password" getValue={this.getPwd} />
          <Button text="Sign in ok" btnClick={this.hadnleLogin1.bind(this)} className="loginButton" />
          <br/>
          <Button text="Sign in error" btnClick={this.hadnleLogin2.bind(this)} className="loginButton" />
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
