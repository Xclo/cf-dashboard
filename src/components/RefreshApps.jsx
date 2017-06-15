import React, { Component } from 'react'
import { Label, Form, FormGroup, Input} from 'reactstrap';


class RefreshApps extends Component {
  constructor(props) {
    super(props);
    this.refreshApps = this.refreshApps.bind(this);
  }

  refreshApps(e) {
    console.log('refresh')
    this.props.refreshApps();
  }

  render() {
    return(
      <div className="d-inline-block refreshApps">
        <i className="fa fa-refresh fa-2x" aria-hidden="true" onClick={this.refreshApps}></i>
      </div>
    )
  }
}

export default RefreshApps
