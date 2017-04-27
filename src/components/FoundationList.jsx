import React, {Component} from 'react'
import Foundation from './Foundation'
import { connect } from 'react-redux';
import * as actions from '../actions';

class FoundationList extends Component {
  componentWillMount() {
    this.props.fetchFoundations();
  }

  renderFoundation(foundation) {
    return (
      <Foundation key={foundation.name} foundation={foundation}/>
    );
  }

  render() {
    const { foundationList } = this.props;
    return (
      <div>
        <h2>Foundation List</h2>
        {foundationList.map(this.renderFoundation)}
    </div>
    )
  }
}



function mapStateToProps(state) {
  return { foundationList: state.foundations.foundationList };
}

export default connect(mapStateToProps, actions)(FoundationList);
