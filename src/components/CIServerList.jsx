import React, {Component} from 'react'
import CIServer from './CIServer'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { CardColumns, Container, Row, Col } from 'reactstrap';


class CIServerList extends Component {
  constructor(props) {
    super(props);
    this.renderCIServerList = this.renderCIServerList.bind(this);
  }

  componentWillMount() {
    if (this.props.ciservers.length === 0) {
      this.props.fetchCIServers();
    }
  }

  renderCIServerList() {
    return _.map(this.props.ciservers, ciserver => {
      // console.log(ciserver.name);

      return (
        <CIServer key={ciserver.name}
          ciserver={ciserver}
          login={this.props.ciserverLogin}
          logout={this.props.ciserverLogout}
          openModal={this.props.openCIServerLoginModal}
          closeModal={this.props.closeCIServerLoginModal}
          loadPipelines={this.props.loadPipelines}

        />
      )
    })
  }

  render() {
    return (
      <div>{this.renderCIServerList()}</div>
    )
  }
}

function mapStateToProps(state) {
  return { ciservers : state.ciservers.all};
}

export default connect(mapStateToProps, actions)(CIServerList);
