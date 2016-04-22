'use strict';

import React from 'react-native';
import styles from '../../styles/style.js';

import AndroidLogin from './login.android';
import IOSLogin from './login.ios';


const {
  StyleSheet,
  View,
  Platform,
} = React;


var Login = React.createClass({
  getInitialState(){
    return {
    };
  },

  render() {
    if (Platform.OS === 'ios') {
      return ( <IOSLogin navigator={this.props.navigator} /> );
    }
    else{
      return ( <AndroidLogin navigator={this.props.navigator}/>);
    }
  },

});


// export default login;
module.exports = Login;
