import React from 'react'
import Tile from './Tile'
import {TileLayout} from 'pui-react-tile-layout'
import axios from 'axios';

class AppList extends Component {
  componentWillMount() {
    this.props.fetchApps();

  }

  renderApp(app) {
    return (
      <div className="card card-block">
          <Tile key={app.guid} app={app}/>
      </div>
    );
  }

  render() {
    const { appList } = this.props.appList;
    return (
      <div>
        <h2>App List</h2>
        <TileLayout columns={{xs: 1, sm: 2, md: 3}}>
          {appList.map(this.renderApp)}
        </TileLayout>
    </div>
    )
  }
}



function mapStateToProps(state) {
  return {appList: state.appList};
}

export default connect(mapStateToProps,actions)(AppList);
