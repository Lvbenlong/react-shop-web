import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from '../actions/userinfo';
import { getUserInfo } from '../server/api';
import storage from '../utils/storage'
import routes from '../routes'
import Header from '../components/Header'
import Footer from '../components/Footer'


class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    this.init()
  }
  async init() {
    if (!this.props.userinfo.id && storage.get('token')) {
      const userinfo = await getUserInfo();
      this.props.userinfoActions.login(userinfo.data);
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* 这里是使用嵌套路由+子路由的写法 */}
          {
            routes.map((route, key) => {
              if (route.exact) {
                return <Route exact path={route.path} key={key} render={props => (<route.component {...props} routes={route.routes} />)} />
              } else {
                return <Route path={route.path} key={key} render={props => (<route.component {...props} routes={route.routes} />)} />
              }
            })
          }
          <Footer />
        </div>
      </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(Setup);
