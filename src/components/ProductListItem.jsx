import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Price from './Price'

class ProductListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="product-list-item">
        <div className="img">
          <img src={this.props.data.images.data[0].image} alt=""/>
        </div>
        <p className="pro-name"><Link to={`/product/${this.props.data.slug}`}>{this.props.data.name}</Link></p>
        <Price deal_price={this.props.data.variant.data.deal_price} price={this.props.data.variant.data.price} original_price={this.props.data.variant.data.original_price} />
      </div>
    );
  }
}

export default ProductListItem;