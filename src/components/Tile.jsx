import React, {Component} from 'react'
import {TileLayoutItem} from 'pui-react-tile-layout'
import {ClickableAltPanel} from 'pui-react-panels'
import {Link} from 'react-router-dom'
import {Row, Col} from 'pui-react-grids';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Tile extends Component {
  render() {
    const app = this.props.app;
    return (
      <div className="card card-block">
        <TileLayoutItem className="bg-neutral-10">
          <ClickableAltPanel>
            <Link to={"/apps/" + app.guid} key={app.guid}>
            <h2>{app.name}</h2>
            {app.url}
            </Link>
          </ClickableAltPanel>
        </TileLayoutItem>
      </div>
    );
  }
}


export default Tile
