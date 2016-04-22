'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;
var tarshare = require('./app/app');

AppRegistry.registerComponent('tarshare', () => tarshare);
