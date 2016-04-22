'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;
var rnapp = require('./app/app');

AppRegistry.registerComponent('RNApp', () => rnapp);
