import React, { Component } from 'react'
import { sortURLToObj } from '../utils/tool';
import { getCategoryList, getCategoryListBySearch } from '../server/a';
import ProductListItem from '../components/ProductListItem'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: []
    };
  }
  componentWillReceiveProps(nextProps){
    const q = sortURLToObj(nextProps.location.search).q
    console.log(q)
    this.setState({
      name: q
    })
    this.handleFetchdataByKey(q)
    // this.setState({
    //     skuId
    // },()=>{
    //     this.fetchGoodsInfo();
    // });
  }

  componentDidMount() {
    this.q =  sortURLToObj(this.props.location.search).q
    this.slug =  sortURLToObj(this.props.location.search).taxon_slug
    this.name =  sortURLToObj(this.props.location.search).taxon_name
    if (this.q) {
      this.handleFetchdataByKey(this.q)
      this.setState({
        name: this.q
      })
    } else {
      this.handleFetchdata(this.slug)
      this.setState({
        name: this.name
      })
    }

  }
  async handleFetchdata(slug) {
    const {data} = await getCategoryList(slug, {per_page: 20})
    console.log(data)
    this.setState({
      list: data
    })
  }
  async handleFetchdataByKey(q) {
    const {data} = await getCategoryListBySearch(q, {per_page: 20})
    console.log(data)
    this.setState({
      list: data
    })
  }
  render() {
    return (
      <div className="product-list mainArea">
        <p className="title">{this.state.name}</p>
        <div className="product-list-container">
          {
            this.state.list.length>0 ? this.state.list.map((item, index) => {
              return <ProductListItem key={index} data={item} />
            }) : <div>nodata</div>
          }
        </div>
      </div>
    );
  }
}

export default ProductList;