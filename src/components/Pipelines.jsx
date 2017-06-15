import React, {Component} from 'react'
import CIServer from './CIServer'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { CardColumns, Container, Row, Col } from 'reactstrap';
import Pipeline from './Pipeline';


class Pipelines extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  renderPipelines() {
    var commentNodes = '';

    commentNodes = _.map(this.props.pipelines, pipeline => {
      console.log("pipeline", pipeline)
      return (
        <Pipeline key={pipeline.api} name={pipeline.name} url={pipeline.url} paused={pipeline.paused} jobs={pipeline.jobs} />
      );
    })
    return (
      <div id="pipelines">
        <div key='container-list' className="pipeline-list">
          {commentNodes}
        </div>
      </div>
    );
  }



  render() {
    console.log("In render method of pipelines.jsx")
    return (
      this.renderPipelines()
    )
  }
}

function mapStateToProps(state) {
  return {pipelines: state.pipelines.all};
}

export default connect(mapStateToProps, actions)(Pipelines);
