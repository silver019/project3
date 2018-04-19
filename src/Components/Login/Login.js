import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
          <Col sm={3}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={12}>
            <Input type="email" name="email" id="exampleEmail" placeholder="example@aol.com" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={12}>
            <Input type="password" name="password" id="examplePassword" placeholder="********" />
          </Col>
        </FormGroup>
            <Button color="danger">Login</Button>
            </Col>
      </Form>
    );
  }
}