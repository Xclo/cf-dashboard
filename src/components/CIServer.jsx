import React, { Component } from 'react'
import CIServerLoginModal from './CIServerLoginModal'
import { Label, Form, FormGroup, Input} from 'reactstrap';


class CIServer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loadPipelines = this.loadPipelines.bind(this);

  }
  handleLogin(values) {
    let auth = {
      api: this.props.ciserver.api,
      username: values.username,
      password: values.password,
      team: values.team
    }
    this.props.login(auth)
  }

  loadPipelines(e) {
    e.preventDefault();
    this.props.loadPipelines(this.props.ciserver);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout(this.props.ciserver);
  }

  openModal(e) {
    e.preventDefault();
    this.props.openModal(this.props.ciserver);
  }

  closeModal() {
    this.props.closeModal(this.props.ciserver);
  }

  authLinks() {
    if (this.props.ciserver.auth != undefined) {
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
    const {ciserver} = this.props;
    return(
      <div>
        <a href="#" onClick={this.loadPipelines}>{ciserver.name}</a>{this.authLinks()}
        <CIServerLoginModal ciserver={ciserver} onSubmit={this.handleLogin} closeModal={this.closeModal} isOpen={ciserver.loginModalOpen}/>
      </div>
    )
  }
}

export default CIServer
