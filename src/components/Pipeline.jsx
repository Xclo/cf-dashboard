import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import SearchBar from './SearchBar'
import * as actions from '../actions'
import { connect } from 'react-redux'

class Pipeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var jobNodes;
    // Generate vertical stripes, representing job statuses insite the current pipeline
    // console.log("jobs", this.props.jobs)
    var width = 250 / this.props.jobs.length;
    let increment = 1;
    jobNodes = this.props.jobs.map(function(job) {
      increment++
      let key = `job-${increment}`
      return (
        <div key={key} className={ 'pipeline-job ' + job.status } style={{width: width}} />
      );
    });
    // console.log("jobnodes", jobNodes)

    return (
      <a key={ 'link-' + this.props.name } href={this.props.url} className="pipeline-link" target="_blank">
        <div key={ 'pipeline-' + this.props.name } className={ 'pipeline' + (this.props.paused ? ' paused' : '') }>

          <h2 className="pipeline-name" >
            {this.props.name}
          </h2>

          {jobNodes}

        </div>
      </a>
    );
  } // end render
}


export default Pipeline;
