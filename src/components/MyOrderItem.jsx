import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyOrderProductItem from './MyOrderProductItem'
import Button from './Button'
import { calcPrice } from '../utils/tool';

class MyOrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'To be shipped'
    };
  }
  renderStatus() {
    if (this.props.data.state === 'cancelled') {
      this.setState({
        status: ''
      })
      return
    }
    if (this.props.data.state === 'fulfilled' && this.props.data.reviewed_at) {
      this.setState({
        status: 'Transaction successful'
      })
      return
    }
    if (this.props.data.state === 'fulfilled') {
      this.setState({
        status: 'Transaction successful'
      })
      return
    }
    if (this.props.data.shipping_state === 'shipped') {
      this.setState({
        status: 'Wait for Receiving'
      })
      return
    }
    if (this.props.data.payment_state === 'paid') {
      this.setState({
        status: 'To be shipped'
      })
      return
    }
    if (this.props.data.payment_state === 'awaiting_payment') {
      this.setState({
        status: 'Pay now'
      })
      return
    }
  }
  componentDidMount() {
    this.renderStatus()
  }
  render() {
    const buttonStyle = {
      width: 294,
      height: 48,
      bgcolor: '#f4bc1c',
      color: '#fff'
    }
    return (
      <div className="my-order-item">
        <p className="status">
          <span className="status-desc">{this.state.status}</span>
          <Link to={`/order/${this.props.data.number}`}>Order details</Link>
        </p>
        <div className="product-list">
          {
            this.props.data.items.data.map((item, index) => {
              return <MyOrderProductItem key={index} data={item} />
            })
          }
        </div>
        <div className="total">
          <span className="total-price">Total: {calcPrice(this.props.data.total)}</span>
          <Button text="Pay now" style={buttonStyle} />
        </div>
      </div>
    );
  }
}

export default MyOrderItem;