import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AppCard extends Component {

  constructor(props) {
    super(props)
    this.handleSelectApp = this.handleSelectApp.bind(this);
  }

  handleSelectApp(e) {
    e.preventDefault();
    const {selectApp, app} = this.props;
    selectApp(app)
  }

  appStatus() {
    const {app} = this.props;
    if (app.state === 'Started') {
      return 'card-float started'
    } else if (app.state === 'Stopped') {
      return 'card-float stopped'
    }
  }

  render() {
    const {app} = this.props;
    return (
      <div className={this.appStatus()}>
        <div className="app-name">
          <a href="#" onClick={this.handleSelectApp}>{app.name}</a>
        </div>
        <div>{app.state}</div>
        <div className=""><a href={app.route} target="_blank">View App</a></div>
        <div className="space-name">{app.foundationName} > {app.org.name} > {app.space.name}</div>
      </div>
    );
  }
}

export default AppCard
