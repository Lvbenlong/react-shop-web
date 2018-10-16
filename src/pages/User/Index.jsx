import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="mainArea">
        <p>
          <Link to="/user/">order</Link>
          <Link to="/user/coupons">coupons</Link>
          <Link to="/user/">point</Link>
          <Link to="/user/address">address</Link>
        </p>
        <div>
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

export default User;