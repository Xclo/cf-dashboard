import React, { Component } from 'react'
import PipelineLoginModal from './PipelineLoginModal'
import { Label, Form, FormGroup, Input} from 'reactstrap';


class Pipeline extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleLogin(values) {
    let auth = {
      api: this.props.pipeline.api,
      username: values.username,
      password: values.password,
      team: values.team
    }
    this.props.login(auth)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout(this.props.pipeline);
  }

  openModal(e) {
    e.preventDefault();
    this.props.openModal(this.props.pipeline);
  }

  closeModal() {
    this.props.closeModal(this.props.pipeline);
  }

  authLinks() {
    if (this.props.pipeline.auth != undefined) {
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
    const {pipeline} = this.props;
    return(
      <div>
        {pipeline.name}{this.authLinks()}
        <PipelineLoginModal pipeline={pipeline} onSubmit={this.handleLogin} closeModal={this.closeModal} isOpen={pipeline.loginModalOpen}/>
      </div>
    )
  }
}

export default Pipeline
