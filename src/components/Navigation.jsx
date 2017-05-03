import React from 'react'
import {Link} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = ({ match }) => (
  <div>
    <Navbar color="faded" light toggleable>
      <NavbarBrand tag={Link} to="/">Dashboard</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/apps">Apps</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
)

export default Navigation
