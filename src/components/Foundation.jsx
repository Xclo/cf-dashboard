import React, { Component } from 'react'

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
      api: foundation.api,
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
        {/* <BaseModal title='Login'
                   className='optional-custom-class'
                   show={this.props.foundation.loginModalOpen}
                   onHide={() => this.closeModal()}>
          <ModalBody>




            API: {this.props.foundation.api}
            <Input label="Email" id="email" placeholder="Email"/>
            <Input label="Password" id="password" type="password" placeholder="Password"/>
          </ModalBody>
          <ModalFooter>
            <DefaultButton onClick={() => this.handleLogin()}>
              Login
            </DefaultButton>
          </ModalFooter>
        </BaseModal> */}
      </div>
    )
  }
}

export default Foundation
