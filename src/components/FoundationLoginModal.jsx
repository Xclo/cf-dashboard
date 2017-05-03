import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'


const FoundationLoginModal = props => {
  const {isOpen, foundation, pristine, reset, submitting, handleSubmit } = props;

  return (
    <Modal isOpen={isOpen} className={props.className}>
      <ModalHeader>Login - {foundation.api}</ModalHeader>
      <Form onSubmit={handleSubmit}>
      <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Field type="email" component="input" name="username" className="form-control" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Field type="password" component="input" className="form-control" name="password" id="password" placeholder="Password" />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" disabled={pristine || submitting}>Login</Button>
          <Button color="secondary" onClick={props.closeModal} disabled={submitting}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}

export default reduxForm({
  form: 'foundationLogin'
})(FoundationLoginModal);


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
