import React, { Component } from 'react'
import { getDeals } from '../server/api';
import '../assets/less/component.less'

class DealDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    };
  }
  componentDidMount() {
    this.handleFetchdata()
  }
  async handleFetchdata() {
    const {data} = await getDeals()
    this.setState({
      deals: data,
    })
  }
  render() {
    return (
      <div className="dealdetail">
        dealdetail
      </div>
    );
  }
}

export default DealDetail;