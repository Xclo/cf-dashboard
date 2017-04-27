import React from 'react'
import {Link} from 'react-router-dom'
import {Row} from 'pui-react-grids'
import FoundationList from './FoundationList'

const Navigation = ({ match }) => (
  <Row>
    <FoundationList/>
  </Row>
)

export default Navigation
