import React, { Component } from 'react'
class Wishlist extends Component {
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
        Wishlist
        {this.props.match.params.slug}
      </p>
    );
  }
}

export default Wishlist;