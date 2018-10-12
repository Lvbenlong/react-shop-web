import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/less/header.less'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
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
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="info">
          <Link to="/wishlist" className="wishlist" >Wish list</Link>
          <Link to="/login" className="login" >Sign in</Link>
        </div>
      </header>
    );
  }
}

export default Header;