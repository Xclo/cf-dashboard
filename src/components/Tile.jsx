import React from 'react'
import {TileLayoutItem} from 'pui-react-tile-layout'
import {ClickableAltPanel} from 'pui-react-panels'
import {Link} from 'react-router-dom'
import {Row, Col} from 'pui-react-grids';

const Tile = (props) => (
  <TileLayoutItem className="bg-neutral-10">
    <ClickableAltPanel>
      <Link to="/app/">
          <h2>{props.app.name}</h2>
          {props.app.url}
        
      </Link>
    </ClickableAltPanel>
  </TileLayoutItem>
)

export default Tile
