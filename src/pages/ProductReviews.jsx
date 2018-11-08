import React, { Component } from 'react'
class ProductReviews extends Component {
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
        ProductReviews <br/>
        {this.props.match.params.slug}
      </p>
    );
  }
}

export default ProductReviews;