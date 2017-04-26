import React from 'react'
import {TileLayoutItem} from 'pui-react-tile-layout'
import {ClickableAltPanel} from 'pui-react-panels'
import {Link} from 'react-router-dom'
import {Row, Col} from 'pui-react-grids';

const Tile = (props) => (
  <div className="card card-block">
    <TileLayoutItem className="bg-neutral-10">
      <ClickableAltPanel>
        <Link to="/app/">
            <h2>{props.app.name}</h2>
            {props.app.url}

        </Link>
      </ClickableAltPanel>
    </TileLayoutItem>
  </div>
)

export default Tile
