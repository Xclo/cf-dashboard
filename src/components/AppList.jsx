import React from 'react'
import Tile from './Tile'
import {TileLayout} from 'pui-react-tile-layout'

const apps = [
  {
    name: 'Google',
    url: 'https://google.com',
    guid: 1
  },
  {
    name: 'Yahoo',
    url: 'https://yahoo.com',
    guid: 2
  },
  {
    name: 'Microsoft',
    url: 'https://microsoft.com',
    guid: 3
  },
  {
    name: 'Github',
    url: 'https://github.com',
    guid: 4
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    guid: 5
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    guid: 6
  }
]


const AppList = () => {
  return (
    <div>
      <h2>App List</h2>
      <TileLayout columns={{xs: 1, sm: 2, md: 3}}>
        {apps.map((app) => (
          <Tile key={app.guid} app={app}/>
        ))}
      </TileLayout>
    </div>
  )

}

export default AppList
