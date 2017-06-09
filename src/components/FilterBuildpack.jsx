import React, { Component } from 'react'
import { Label, Form, FormGroup, Input} from 'reactstrap';


class FilterBuildpack extends Component {
  constructor(props) {
    super(props);
    this.toggleBuildpack = this.toggleBuildpack.bind(this);
  }

  toggleBuildpack() {
    this.props.toggleBuildpack(this.props.buildpack);
  }

  render() {
    const {buildpack, filters, appCount} = this.props;
    return(
      <Form className="filterCheckBoxes" key={buildpack}>
        <FormGroup check>
          <Label>
            <Input type="checkbox" checked={filters.selectedBuildpacks.indexOf(buildpack) !== -1} onChange={this.toggleBuildpack}/>
            {buildpack} ({appCount})
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

export default FilterBuildpack
