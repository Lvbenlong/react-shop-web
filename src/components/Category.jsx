import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCategry } from '../server/api';
import '../assets/less/component.less'

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    this.handleFetchdata()
  }
  async handleFetchdata() {
    const {data} = await getCategry()
    this.setState({
      categories: data,
    })
  }
  render() {
    return (
      <div className="category">
        <div className="title">Categories</div>
        <ul>
          {
            this.state.categories ? this.state.categories.map((item, index) => {
              return (
                <li key={index}>
                  <p className="catename">{item.name} <span className="iconfont icon-zhankai"></span></p>
                  <ul>
                    {
                      item.children.data.map((val, key) => {
                        return <li key={key}>
                          <Link to={`/products?taxon_slug=${val.slug}&taxon_name=${val.name}`}>{val.name}</Link>
                        </li>
                      })
                    }
                  </ul>
                </li>
              )
            }) : null
          }
        </ul>
      </div>
    );
  }
}

export default Category;