import React, {Component} from 'react';
import FilterFoundationList from './FilterFoundationList'
import FilterBuildpackList from './FilterBuildpackList'
import FilterAppStateList from './FilterAppStateList'

export default () => (
  <div>
    <br/>
    <h3>Filters</h3>
    <br/>
    <FilterFoundationList/>
    <FilterBuildpackList/>
    <FilterAppStateList/>
  </div>
)
