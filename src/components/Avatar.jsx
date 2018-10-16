import React, { Component } from 'react'
import '../assets/less/component.less'
import PropTypes from 'prop-types'

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="avatar" style={{width: this.props.width+'px', height: this.props.width+'px', borderRadius: this.props.width/2+'px'}}>
        <img src={this.props.avatar} alt="" />
      </div>
    );
  }
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  width: PropTypes.number,
}

Avatar.defaultProps = {
  avatar: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=c1f24fd359e736d147138a08ab514ffc/241f95cad1c8a786b0eb4b016a09c93d71cf50ff.jpg',
  width: 52,
}

export default Avatar;