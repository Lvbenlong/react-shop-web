import React, { Component } from 'react'

class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const style = {
      inputbox: {
        display: 'flex',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid #e9e9e9',
        alignItems: 'center',
        alignContent: 'center',
      },
      iconfont: {
        fontSize: '20px',
        color: '#cacaca',
        marginRight: '20px',
      },
      input: {
        display: 'flex',
        flex: 1,
        fontSize: '14px',
      }
    }
    return (
      <p style={style.inputbox}>
        {
          this.props.icon ? <span className={`iconfont ${this.props.icon}`} style={style.iconfont}></span> : null
        }
        <input style={style.input} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.getValue} />
      </p>
    );
  }
}

LoginInput.defaultProps = {
  type: 'text',
  placeholder: 'enter'
}

export default LoginInput;