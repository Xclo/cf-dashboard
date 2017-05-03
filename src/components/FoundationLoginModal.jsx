import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class FoundationLoginModal extends Component {
  render() {
    const isOpen = this.props.isOpen;
    const foundation = this.props.foundation;
    return (
      <div>
        <Modal isOpen={isOpen} className={this.props.className}>
          <ModalHeader>Login - {foundation.api}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.login}>Login</Button>
            <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default FoundationLoginModal


{/* <BaseModal title='Login'
           className='optional-custom-class'
           show={}
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
