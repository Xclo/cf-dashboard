import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock } from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import FilterFoundationList from './FilterFoundationList'
import _ from 'lodash'
import * as actions from '../actions'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import FilterBuildpackList from './FilterBuildpackList'
import FilterAppStateList from './FilterAppStateList'

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.props.searchFieldUpdated(e.target.value);
  }

  render() {
    return (
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Filters&w=318&h=90" alt="Filters" />
          <CardBlock>
            <FilterFoundationList/>
            <SearchBar handleSearch={this.handleSearch}/>
            <br/>
            <FilterBuildpackList/>
            <FilterAppStateList/>
          </CardBlock>
        </Card>
      </CardDeck>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchField: state.filters.searchField
  }
}

export default connect(mapStateToProps, actions)(Filter);
