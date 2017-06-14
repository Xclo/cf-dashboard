import React, { Component } from 'react'
import { Label, Form, FormGroup, Input} from 'reactstrap';


class SortBy extends Component {
  constructor(props) {
    super(props);
    this.updateSort = this.updateSort.bind(this);
  }

  updateSort(e) {
    this.props.updateSort(e.target.value);
  }

  render() {
    return(
      <div>
        <select className="custom-select sortBy" onChange={this.updateSort}>
          <option value="name-asc">Name Ascending</option>
          <option value="name-desc">Name Descending</option>
        </select>
      </div>
    )
  }
}

export default SortBy
