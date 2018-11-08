import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const style = {
      width: this.props.style ? `${this.props.style.width}px` : '100%',
      height: this.props.style ? `${this.props.style.height}px` : '48px',
      backgroundColor: this.props.style ? `${this.props.style.bgcolor}` : '#f4bc1c',
      color: this.props.style ? `${this.props.style.color}` : '#fff',
    }
    const defaultStyle = {
      borderRadius: `4px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
    return (
      <div style={{...style, ...defaultStyle }} onClick={this.props.btnClick}>{this.props.text}</div>
    );
  }
}

Button.defaultProps = {
}

export default Button;