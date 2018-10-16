import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getDeals } from '../server/api';
import '../assets/less/component.less'

class Deal extends Component {
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
    console.log(this.state.deals)
  }
  render() {
    return (
      <div className="deal">
        {
          this.state.deals ? this.state.deals.map((item, index) => {
            return (
              <Link key={index} to={`/deals/${item.slug}`} className="dealItem">
                <img src={item.image} alt=""/>
              </Link>
            )
          }) : null
        }
        
      </div>
    );
  }
}

export default Deal;