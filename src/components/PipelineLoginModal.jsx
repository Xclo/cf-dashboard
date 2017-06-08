import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'


const PipelineLoginModal = props => {
  const {isOpen, pipeline, pristine, reset, submitting, handleSubmit } = props;

  return (
    <Modal isOpen={isOpen} className={props.className}>
      <ModalHeader>Login - {pipeline.api}</ModalHeader>
      <Form onSubmit={handleSubmit}>
      <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Field type="text" component="input" name="username" className="form-control" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Field type="password" component="input" className="form-control" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTeam">Team</Label>
            <Field type="text" component="input" name="team" className="form-control" id="team" placeholder="Team" />
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
  form: 'pipelineLogin'
})(PipelineLoginModal);
