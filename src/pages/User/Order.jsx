import React, { Component } from 'react'
import { getMyOrderList } from '../../server/api'
import MyOrderItem from '../../components/MyOrderItem'

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderlist: []
    };
  }
  componentDidMount() {
    this.handleFetchdata()
  }
  async handleFetchdata() {
    const { data } = await getMyOrderList()
    console.log(data)
    this.setState({
      orderlist: data
    })
  }
  render() {
    return (
      <div className="orderlist">
        <p className="title">My order</p>
        {
          this.state.orderlist ? this.state.orderlist.map((item, index) => {
            return <MyOrderItem key={index} data={item} />
          }) : null
        }
        
      </div>
    );
  }
}

export default Order;