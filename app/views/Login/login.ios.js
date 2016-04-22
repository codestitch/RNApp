'use strict';

import React from 'react-native';
import styles from '../../styles/style.js';

const {
  StyleSheet,
  Image,
  Text,
  Navigator,
  View,
} = React;

var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;

var FBIOSLogin = React.createClass({
  getInitialState: function(){
    return {
    };
  },

  updateView(){
    this.gotoWelcome();
  },

  render: function() {
    var _this = this;
    var user = this.state.user;

    return (
      <View style={styles.container_full}>

          <FBLogin style={{ marginBottom: 10, }}
            permissions={["email","user_friends"]}
            onLogin={function(data){
              console.log("Logged in!");
              console.log(data);
              _this.setState({ user : data.credentials });
            }}
            onLogout={function(){
              console.log("Logged out.");
              _this.setState({ user : null });
            }}
            onLoginFound={function(data){
              _this.gotoWelcome();
            }}
            onLoginNotFound={function(){
              console.log("No user logged in.");
              _this.setState({ user : null });
            }}
            onError={function(data){
              console.log("ERROR");
              console.log(data);
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
              console.log(data);
            }}
          />

          <Text>{ user ? user.token : "N/A" }</Text>

      </View>
    );
  },

  gotoWelcome() {
    console.log('going to welcome...');
    this.props.navigator.replace({
      id: 'ioswelcome',
    });
  },


});


// export default login;
module.exports = FBIOSLogin;
