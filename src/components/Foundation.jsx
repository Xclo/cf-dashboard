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
  handleLogin(values) {
    let auth = {
      api: this.props.foundation.api,
      username: values.username,
      password: values.password
    }
    this.props.login(auth)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout(this.props.foundation);
  }

  openModal(e) {
    e.preventDefault();
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
        <FoundationLoginModal foundation={this.props.foundation} onSubmit={this.handleLogin} closeModal={this.closeModal} isOpen={this.props.foundation.loginModalOpen}/>
      </div>
    )
  }
}

export default Foundation
