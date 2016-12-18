import React from 'react';
import './App.css';
import BuildList from './BuildList.js';
import _ from 'lodash';
import $ from 'jquery';

var App=React.createClass({
  getInitialState: function() {
    return {
      myInformation: []
    } //return
  }, //getInitialState

  componentDidMount: function() {
    this.serverRequest= $.get('./js/data.json', function(result) {
      var tempInfo= result;
      this.setState({
        myInformation: tempInfo
      }); //setState
    }.bind(this));
  }, //componentDidMount

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, //componentWillUnmount

  render: function() {
    var myInformation = this.state.myInformation;

    myInformation = myInformation.map(function(item, index) {
      return (
          <BuildList key={ index }
            singleItem={ item }
            bodyVisible={ this.state.listBodyVisible }
            statusDisplayVisible={ this.state.statusVisible }
            />
      ) //return
    }.bind(this)); //myInformation
    return (
      <div>{ myInformation }</div>
      ) //return
  } //render
}); //App


export default App;
