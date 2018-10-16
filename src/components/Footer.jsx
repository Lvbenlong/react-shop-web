import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <footer className="mainArea">
        <p className="logo">
          <img src={require('../assets/images/logo.png')} alt=""/>
        </p>
        <p className="link">
          <Link to="/ask">Frequently Asked Questions</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Bestkit</Link>
        </p>
        <p className="copyright">Conditions of Use  |  Privacy Notice  © 2018 bestkit.com All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;