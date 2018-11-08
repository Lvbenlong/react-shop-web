import React, { Component } from 'react'
import { calcPrice } from '../utils/tool';

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <p className="price-tmp">
        {
          this.props.deal_price ? <span className="deal_price">{calcPrice(this.props.deal_price)}</span> : <span className="price">{calcPrice(this.props.price)}</span>
        }
        <span className="original_price">
          {calcPrice(this.props.original_price)}
        </span>
      </p>
    );
  }
}

export default Price;