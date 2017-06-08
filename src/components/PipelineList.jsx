import React, {Component} from 'react'
import Pipeline from './Pipeline'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'

class PipelineList extends Component {
  constructor(props) {
    super(props);
    this.renderPipelines = this.renderPipelines.bind(this);
  }

  componentWillMount() {
    console.log("In componentWill Mount of PipeLineList");
    if (this.props.pipelines.length === 0) {
      this.props.fetchPipelines();
    }
  }

  renderPipelines() {
    return _.map(this.props.pipelines, pipeline => {
      return (
        <Pipeline key={pipeline.name}
          pipeline={pipeline}
          login={this.props.pipelineLogin}
          logout={this.props.pipelineLogout}
          openModal={this.props.openPipelineLoginModal}
          closeModal={this.props.closePipelineLoginModal}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h4>Pipelines</h4>
        {this.renderPipelines()}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { pipelines: state.pipelines.all};
}

export default connect(mapStateToProps, actions)(PipelineList);
