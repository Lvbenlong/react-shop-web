import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const style = {
      width: `${this.props.style.width}px`,
      height: `${this.props.style.height}px`,
      backgroundColor: `${this.props.style.bgcolor}`,
      color: `${this.props.style.color}`,
    }
    const defaultStyle = {
      borderRadius: `4px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
    return (
      <div style={{...style, ...defaultStyle }} >{this.props.text}</div>
    );
  }
}

Button.defaultProps = {
}

export default Button;