import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock } from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import FilterFoundationList from './FilterFoundationList'
import _ from 'lodash'
import * as actions from '../actions'
import { connect } from 'react-redux'

import FilterBuildpackList from './FilterBuildpackList'
import FilterAppStateList from './FilterAppStateList'

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br/>
        <h3>Filters</h3>
        <br/>
        <FilterFoundationList/>
        <FilterBuildpackList/>
        <FilterAppStateList/>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, actions)(Filter);
