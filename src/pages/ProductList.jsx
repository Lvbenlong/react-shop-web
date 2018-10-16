import React, { Component } from 'react'
class ProductList extends Component {
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
        Wishlist
      </p>
    );
  }
}

export default ProductList;