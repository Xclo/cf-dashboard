import React, {Component} from 'react';
import { InputGroup, Input } from 'reactstrap'

const SearchBar = props => {
  return (
    <InputGroup>
      <Input placeholder="Search" onChange={props.handleSearch}/>
    </InputGroup>
  )
}

export default SearchBar
