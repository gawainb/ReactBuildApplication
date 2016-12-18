import React from 'react';

import PieChart from 'react-simple-pie-chart';

var BuildList= React.createClass({
  getInitialState: function() {
    return {
        listBodyVisible: false,
        statusVisible: true
      }
  },

  toggleDisplay: function() {
    var tempVisibility= !this.state.listBodyVisible;
    var tempStatusVisibility= !this.state.statusVisible;
    this.setState({
      listBodyVisible: tempVisibility,
      statusVisible: tempStatusVisibility
    }); //setState
  }, //toggleDisplay

  render() {
    var displayListBody = {
      display: this.state.listBodyVisible ? 'block' : 'none'
    }; //displayListBody

    var displayStatus = {
      visibility: this.state.statusVisible ? 'visible' : 'hidden'
    };

    var panelClass = this.props.singleItem.state;
    if (panelClass === "Complete" || panelClass === "Accepted") {
        panelClass = 'panel panel-success';
    } else if (panelClass === "Running") {
        panelClass = 'panel panel-primary';
    } else if (panelClass === "Rejected") {
        panelClass = 'panel panel-danger';
    } else {
        panelClass = 'panel panel-default';
    }; // panelClass
    
    var message;
    var panel = this.props.singleItem.state;
    if (panel === "Complete") {
        message = (<div>
          <h1 className="text-success text-center">Complete</h1>
          <div className="text-center">
            <button className="btn btn-primary">Deploy</button>
            <span> to: </span>
            <button className="btn btn-default">Production <span className="caret"></span></button>
            </div>
        </div>);
    }else if (panel === "Accepted") {
      message = (<div>
          <h3 className="text-warning text-center">Change Accepted</h3>
          <h1 className="text-warning text-center">Auto-Merged</h1>
          <div className="text-center">
            <button className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Merge Build</button>
          </div>
        </div>);
    }else if (panel === "Rejected") {
      message = (<div>
          <h3 className="text-danger text-center">Change Rejected</h3>
          <h1 className="text-danger text-center">Metrics Reduction</h1>
          <div className="text-center">
            <button className="btn btn-primary">Find Issues</button>
          </div>
        </div>);
    }else {
      message = null;
    }// message

    var metricsClass = this.props.singleItem.metrics;
    if (metricsClass === "../img/running.png") {
      metricsClass = 'blue-boxed';
    } else if (metricsClass === "../img/rejected.png") {
      metricsClass = "red-boxed";
    } else if (metricsClass === "../img/complete.png") {
      metricsClass = "green-boxed";
    }else {
      metricsClass = 'grey-boxed';
    }; // metricsClass

    var buildClass = this.props.singleItem.build;
    if (buildClass === "../img/running.png") {
      buildClass = 'blue-boxed';
    } else if (buildClass === "../img/rejected.png") {
      buildClass = "red-boxed";
    } else if (buildClass === "../img/complete.png") {
      buildClass = "green-boxed";
    }else {
      buildClass = 'grey-boxed';
    }; //buildClass

    var unitClass = this.props.singleItem.unitTest;
    if (unitClass === "../img/running.png") {
      unitClass = 'blue-boxed';
    } else if (unitClass === "../img/rejected.png") {
      unitClass = "red-boxed";
    } else if (unitClass === "../img/complete.png") {
      unitClass = "green-boxed";
    }else {
      unitClass = 'grey-boxed';
    }; //unitClass

    var functionalClass = this.props.singleItem.functionalTest;
    if (functionalClass === "../img/running.png") {
      functionalClass = 'blue-boxed';
    } else if (functionalClass === "../img/rejected.png") {
      functionalClass = "red-boxed";
    } else if (functionalClass === "../img/complete.png") {
      functionalClass = "green-boxed";
    }else {
      functionalClass = 'grey-boxed';
    }; //functionalClass



    return (
        <div className="interface">
          <ul className="media-list">
            <li className="build-info media-body">
              <div className={ panelClass } onClick={ this.toggleDisplay }>
                <div className="panel-heading list-addheading">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th className="col-xs-2"><span><img src={ this.props.singleItem.imageUrl } alt="logo"/></span> { this.props.singleItem.buildNumber }</th>
                        <th className="col-xs-1">{ this.props.singleItem.ownerName }</th>
                        <th className="col-xs-2">{ this.props.singleItem.timeStarted }</th>
                        <th className="col-xs-1">{ this.props.singleItem.state }</th>
                        <th className="col-xs-1"><img src={ this.props.singleItem.metrics } style={ displayStatus } alt="status"/></th>
                        <th className="col-xs-1"><img src={ this.props.singleItem.build } style={ displayStatus } alt="status"/></th>
                        <th className="col-xs-1"><img src={ this.props.singleItem.unitTest } style={ displayStatus } alt="status"/></th>
                        <th className="col-xs-1"><img src={ this.props.singleItem.functionalTest } style={ displayStatus } alt="status"/></th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="panel-body" style={ displayListBody }>
                 <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th className="col-sm-2">
                        <div className={ metricsClass }>
                          <div>
                            <h4 className="ltext-pad">Metrics</h4>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-sm-3 ltext-pad">
                                <img className="ltext-pad" src="../img/green-arrow.png" alt="arrow"/>
                                <h6 className="ltext-pad">Test</h6>
                              </div>
                              <div className="col-sm-3">
                                <h6>{ this.props.singleItem.metricsTest }</h6>
                              </div>
                              <div className="col-sm-3">
                                <img className="ltext-pad" src="../img/red-arrow.png" alt="arrow"/>
                                <h6>Maintainability</h6>
                              </div>
                              <div className="col-sm-3">
                                <h6>{ this.props.singleItem.maintainTest }</h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-sm-3 ltext-pad">
                                <img className="ltext-pad" src="../img/yellow-arrow.png" alt="arrow"/>
                                <h6 className="ltext-pad">Security</h6>
                              </div>
                              <div className="col-sm-3">
                                <h6>{ this.props.singleItem.securityTest }</h6>
                                </div>
                              <div className="col-sm-3 ltext-pad">
                                <img className="ltext-pad" src="../img/yellow-arrow.png" alt="arrow"/>
                                <h6>Workmanship</h6>
                              </div>
                              <div className="col-sm-3">
                                <h6>{ this.props.singleItem.workmanship }</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th className="col-sm-2">
                        <div className={ buildClass }>
                          <div>
                            <h4 className="ltext-pad">Build</h4>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-sm-6 ltext-pad">
                                <img className="ltext-pad" src="../img/tv-monitor.png" alt="computer"/>
                                <h6 className="ltext-pad">Build</h6>
                              </div>
                              <div className="col-sm-6 ltext-pad">
                                <img className="ltext-pad" src="../img/tv-monitor.png" alt="computer"/>
                                <h6 className="ltext-pad">Release</h6>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <h6 className="text-center">{ this.props.singleItem.buildDate }</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th className="col-sm-2">
                        <div className={ unitClass }>
                          <div>
                            <h4 className="ltext-pad">Unit Test</h4>
                          </div>
                          <div className="col-sm-8 chart">
                            <PieChart
                              slices={[
                                  {
                                      "color": "#71AC5B",
                                      "value": 142
                                  },
                                  {
                                      "color": "#EB7C48",
                                      "value": 10
                                  }
                                ]}
                            />
                            <h6 className="data1">142</h6>
                            <h6 className="data2">10</h6>
                          </div>
                          <div className="col-sm-2">
                            <h4>73%</h4>
                            <small className="tests">tests passed</small>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 image">
                              <img className="img-responsive" src="../img/loading.png" alt="download"/>
                              <h3>76%</h3>
                              <small>code covered</small>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th className="col-sm-2">
                        <div className={ functionalClass }>
                          <div>
                            <h4 className="ltext-pad">Functional Test</h4>
                          </div>
                          <div className="col-sm-8">
                            <PieChart
                              slices={[
                                  {
                                      "color": "#71AC5B",
                                      "value": 4321
                                  },
                                  {
                                      "color": "#EB7C48",
                                      "value": 2145
                                  }
                                ]}
                            />
                            <h6 className="data3">4321</h6>
                            <h6 className="data4">2145</h6>
                          </div>
                          <div className="col-sm-2">
                            <h4>68%</h4>
                            <small className="tests">tests passed</small>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 image">
                              <img className="img-responsive" src="../img/loading2.png" alt="download"/>
                              <h3>23%</h3>
                              <small>code covered</small>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div className="box">
                          <div className="result">
                            <h4>Result:</h4>
                          </div>
                          <div>{ message }</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                 </table>
                </div>
              </div>
            </li>
          </ul>
        </div>
    );
  }
});

export default BuildList;