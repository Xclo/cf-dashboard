import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock } from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import FilterFoundationList from './FilterFoundationList'
import _ from 'lodash'
import * as actions from '../actions'
import { connect } from 'react-redux'

const SearchBar = props => {
  return (
    <InputGroup>
      <InputGroupAddon>Search</InputGroupAddon>
      <Input placeholder="..." onChange={props.handleSearch}/>
    </InputGroup>
  )
}

export default SearchBar
