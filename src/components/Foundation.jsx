import React, { Component } from 'react'

class Foundation extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin(e) {
    e.preventDefault()
    this.props.login(this.props.foundation)
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logout(this.props.foundation)
  }

  authLinks() {
    if (this.props.foundation.auth != undefined) {
      return (
        <span> - <a href="#" onClick={this.handleLogout}>Logout</a></span>
      )
    } else {
      return (
        <span> - <a href="#" onClick={this.handleLogin}>Login</a></span>
      )
    }
  }

  render() {
    return(
      <div>
        {this.props.foundation.name} {this.authLinks()}
      </div>
    )
  }
}

export default Foundation
