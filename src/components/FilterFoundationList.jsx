import React, {Component} from 'react'
import FilterFoundation from './FilterFoundation'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { Collapse } from 'reactstrap';
import { filterApps } from '../filters/searchFilters'

class FilterFoundationList extends Component {
  constructor(props) {
    super(props);
    this.renderFoundations = this.renderFoundations.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  componentWillMount() {
    if (this.props.foundations.length === 0) {
      this.props.fetchFoundations();
    }
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse });
  }

  renderFoundations() {
    let {foundations, filters, apps} = this.props;
    return _.map(foundations, foundation => {
      if (foundation.auth) {

        let appCount = _.filter(apps, {api: foundation.api}).length
        return (
          <FilterFoundation key={foundation.name}
            foundation={foundation}
            filters={filters}
            appCount={appCount}
            toggleFoundation={this.props.toggleFoundation}
          />
        )
      }
    })
  }

  renderOpenClose() {
    if (this.state.collapse === false) {
      return (
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      )
    } else {
      return (
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      )
    }
  }

  render() {
    return (
      <div>
        <h4><a href="#" onClick={this.toggle}>Foundations&nbsp;&nbsp;{this.renderOpenClose()}</a></h4>
        <Collapse isOpen={this.state.collapse}>
          {this.renderFoundations()}
        </Collapse>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    foundations: state.foundations.all, filters: state.filters,
    apps: filterApps(state.apps.appList, state.filters)
  };
}

export default connect(mapStateToProps, actions)(FilterFoundationList);
