import React, { Component } from 'react'
import FoundationLoginModal from './FoundationLoginModal'

class Foundation extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleLogin() {
    let auth = {
      api: this.props.foundation.api,
      username: ''
    }
    this.props.login(this.props.foundation)
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logout(this.props.foundation)
  }

  openModal(e) {
    this.props.openModal(this.props.foundation);
  }

  closeModal() {
    this.props.closeModal(this.props.foundation);
  }

  authLinks() {
    if (this.props.foundation.auth != undefined) {
      return (
        <span> - <a href="#" onClick={this.handleLogout}>Logout</a></span>
      )
    } else {
      return (
        <span> - <a href="#" onClick={this.openModal}>Login</a></span>
      )
    }
  }

  render() {
    return(
      <div>
        {this.props.foundation.name} {this.authLinks()}
        <FoundationLoginModal foundation={this.props.foundation} login={this.handleLogin} closeModal={this.closeModal} isOpen={this.props.foundation.loginModalOpen}/>
      </div>
    )
  }
}

export default Foundation
