import React, { Component } from 'react'
import { Label, Form, FormGroup, Input} from 'reactstrap';

class FilterAppState extends Component {
  constructor(props) {
    super(props);
    this.toggleAppState = this.toggleAppState.bind(this);
  }

  toggleAppState() {
    this.props.toggleAppState(this.props.appState);
  }

  render() {
    const {appState, filters} = this.props;
    return(
      <Form className="filterCheckBoxes">
        <FormGroup check>
          <Label>
            <Input type="checkbox" checked={filters.selectedAppStates.indexOf(appState) !== -1} onChange={this.toggleAppState}/>
            {appState}
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

export default FilterAppState
