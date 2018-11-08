import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <div className="mainArea">
        <p>
          <Link to={`/product/${this.props.match.params.slug}/`}>detail</Link>
          <Link to={`/product/${this.props.match.params.slug}/attributes`}>attributes</Link>
          <Link to={`/product/${this.props.match.params.slug}/reviews`}>reviews</Link>
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

export default Product;