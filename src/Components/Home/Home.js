import React from 'react';
import Matchmaker from '../Matchmaker/Matchmaker';
import { render } from 'react-router-dom';
import logo from './logo.svg';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {
    Link,
    Route
  } from 'react-router-dom'
  
import {
    Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('sign-up');
    console.log(this.state.email);
  }

  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SportsPort</h1>
        </header>
        <Form style={{display:'block', marginLeft:'40%', marginRight:'40%', marginTop:'6%', border:'2px solid black'}}>
          <Col sm={12}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={12}>
            <Input type="email" name="email" id="exampleEmail" placeholder="example@aol.com" value={this.state.email} onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={12}>
            <Input type="password" name="password" id="examplePassword" placeholder="********" />
          </Col>
        </FormGroup>
            <Button color="danger">Sign Up</Button>
            </Col>
      </Form>
      </div>
    );
  }



}