import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';


class AppDetail extends Component {
    handleRedirect(){
        browserHistory.push('/app');
    }

    componentWillMount() {
      this.props.fetchAppDetail();

    }

    render(){
        const appList = this.props.appList;
        const id = this.props.params.guid;
        const app = appList.filter(app => {
            if(app.guid == guid) {
                return app;
            }
        });

        return (
            <div>
                <h1>{app[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={app[0].url} alt={car[0].url} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {car[0].appInfo.buildpack}</li>
                           <li><strong>Make</strong>: {car[0].appInfo.org}</li>
                           <li><strong>Year</strong>: {car[0].appInfo.space}</li>
                           <li><strong>Price</strong>: {car[0].health.status}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return { appList: state.apps.appDetail };
}

export default connect(mapStateToProps, actions)(AppDetail);
