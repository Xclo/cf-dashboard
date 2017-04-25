import React from 'react'
import {Link} from 'react-router-dom'
import {Row} from 'pui-react-grids';

const Navigation = ({ match }) => (
  <Row>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/example">Example</Link>
    </ul>
  </Row>
)

export default Navigation
