import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import SearchBar from './SearchBar'
import * as actions from '../actions'
import { connect } from 'react-redux'


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.props.searchFieldUpdated(e.target.value);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/">Radiator</NavbarBrand>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <SearchBar handleSearch={this.handleSearch}/>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/foundations">Foundations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/apps">Apps</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, actions)(Navigation);
