import React, { Component } from 'react'
class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <p>
        ProductAttributes <br/>
        {this.props.match.params.slug}
      </p>
    );
  }
}

export default ProductAttributes;