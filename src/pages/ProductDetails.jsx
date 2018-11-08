import React, { Component } from 'react'
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <p>
        ProductDetails <br/>
        {this.props.match.params.slug}
      </p>
    );
  }
}

export default ProductDetails;