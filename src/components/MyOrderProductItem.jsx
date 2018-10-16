import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { calcPrice } from '../utils/tool';

class MyOrderProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="my-order-product-item">
        <div className="pro-img">
          <img src={this.props.data.image} alt=""/>
        </div>
        <div className="pro-info">
          <p className="pro-name"><Link to={`/product/${this.props.data.product_slug}`}>{this.props.data.product_name}</Link></p>
          <p className="pro-attrs">{this.props.data.option_values.join(',')}</p>
          <p className="pro-price">{calcPrice(this.props.data.unit_price)}</p>
          <p className="pro-sum">x{this.props.data.quantity}</p>
        </div>
      </div>
    );
  }
}

export default MyOrderProductItem;