import React, { Component } from 'react'
import { Label, Form, FormGroup, Input} from 'reactstrap';

class FilterFoundation extends Component {
  constructor(props) {
    super(props);
    this.toggleFoundation = this.toggleFoundation.bind(this);
  }

  toggleFoundation() {
    this.props.toggleFoundation(this.props.foundation.api);
  }

  render() {
    const {foundation, filters, appCount} = this.props;
    return(
      <Form className="filterCheckBoxes">
        <FormGroup check>
          <Label>
            <Input type="checkbox" checked={filters.selectedFoundations.indexOf(foundation.api) !== -1} onChange={this.toggleFoundation}/>
            {foundation.name} ({appCount})
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

export default FilterFoundation
