import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from '../actions/userinfo';
import '../assets/less/header.less'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }
  handleSearch(e) {
    if (e.keyCode === 13) {
      let q = this.state.searchText
      this.setState({
        searchText: ''
      })
      this.searchEl.blur()
      this.props.history.push(`/products?q=${q}`)
    }
  }
  handleText(e) {
    this.setState({
      searchText: e.target.value
    })
  }
  render() {
    return (
      <header className="mainArea">
        <div className="menu">
          <Link to="/">
            <img src={require('../assets/images/logo.png')} className="logo" alt="dealpaw"/>
          </Link>
          <span className="category">Category</span>
          <div className="search">
            <input type="text" ref={el => this.searchEl = el} onChange={this.handleText.bind(this)} value={this.state.searchText} placeholder="search" onKeyDown={this.handleSearch.bind(this)} />
          </div>
        </div>
        <div className="info">
          <Link to="/wishlist" className="wishlist" >Wish list</Link>
          {
            this.props.userinfo.id ? (
              <Link to="/user/order" className="login" >{this.props.userinfo.email}</Link>
            ) : (
              <Link to="/login" className="login" >Sign in</Link>
            )
          }
          
        </div>
      </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));