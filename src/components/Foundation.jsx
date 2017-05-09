import React, { Component } from 'react'
import FoundationLoginModal from './FoundationLoginModal'
import { Label, Form, FormGroup, Input} from 'reactstrap';


class Foundation extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleFoundation = this.toggleFoundation.bind(this);
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
    const {foundation} = this.props;
    return(
      <div>
        {foundation.name}{this.authLinks()}
        <FoundationLoginModal foundation={foundation} onSubmit={this.handleLogin} closeModal={this.closeModal} isOpen={foundation.loginModalOpen}/>
      </div>
    )
  }
}

export default Foundation
