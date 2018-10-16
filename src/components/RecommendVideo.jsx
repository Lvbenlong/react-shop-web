import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import '../assets/less/recommendVideo.less'
import Avatar from './Avatar'
import { calcPrice } from '../utils/tool.js'

class RecommendVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="recommendVideoItem">
        <div className="thumb">
          <LazyLoad offset={200} height={598}>
            <img src={this.props.data.cover} alt=""/>
          </LazyLoad>
        </div>
        <p className="title">
          <Link to={`/product/${this.props.data.product.data.slug}`}>{this.props.data.product.data.name}</Link>
        </p>
        <p className="price">{calcPrice(this.props.data.product.data.variant.data.deal_price || this.props.data.product.data.variant.data.price)}</p>
        <div className="recommendUser">
          {
            this.props.data.recommended_users.data.map((item, index) => {
              return <Avatar key={index} avatar={item.avatar} />
            })
          }
          <span>Recommended it</span>          
        </div>
      </div>
    );
  }
}

export default RecommendVideo;