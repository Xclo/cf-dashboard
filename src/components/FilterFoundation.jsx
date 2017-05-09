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
    const {foundation} = this.props;
    return(
      <div>
        <Form className="foundationCheckBoxes">
          <FormGroup check>
            <Label>
              <Input type="checkbox" checked={foundation.selected} onChange={this.toggleFoundation}/>
              {foundation.name}
            </Label>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default FilterFoundation
