import React, { Component } from 'react'

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        order details
        {this.props.match.params.number}
      </div>
    );
  }
}

export default Order;