'use strict';

import React from 'react-native';
import styles from '../../styles/style.js';
var {
  NativeModules,
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var FBLoginManager = NativeModules.FBLoginManager;

var itypeof = function (val) {
    return Object.prototype.toString.call(val).replace(/(\[|object|\s|\])/g, '').toLowerCase();
};


var FBAndroidLogin = React.createClass({
  getInitialState() {
     var statics = {
       loginText: 'Login with Facebook',
       logoutText: 'Logout from Facebook'
     };
    return {
      statics:statics,
      isLoggedIn: false,
      buttonText: statics.loginText
    };
  },

  componentWillMount: function(){
    var self = this;
    FBLoginManager.getCurrentToken(function(token){
      if(itypeof(token) === 'string' && token.length > 0){
        self.setState({isLoggedIn:true, buttonText: self.state.statics.logoutText});
      }else{
        self.setState({isLoggedIn:false, buttonText: self.state.statics.loginText});
      }
    })
  },

  render: function(){
  //  console.log("login?:"+this.state.isLoggedIn);
    if (this.state.isLoggedIn) {
        this.gotoMain();
    }
    return (
     <TouchableHighlight onPress={this._onFacebookPress}>
         <View style={styles.androidbutton}>
             <Text style={styles.textwhite}> {this.state.buttonText} </Text>
         </View>
     </TouchableHighlight>
    )
  },

  _handleEvent(e, data) {

    var result = e || data;
    if(result.type === 'success' && result.profile){
      try{
        result.profile = JSON.parse(result.profile)
      }catch(err){
        console.warn('Could not parse facebook profile: ', result.profile);
        console.error(err);
      }
    }

    console.log(result.profile);
    console.log(result);

    if(result.eventName === 'onLogin'){
      this.setState({isLoggedIn:true, buttonText: this.state.statics.logoutText});
      this.gotoWelcome(result);
    }
    else if( result.eventName === 'onLoginFound'){
      this.gotoMain();
    }
    else if(result.eventName === 'onLogout'){
      this.setState({isLoggedIn:false, buttonText: this.state.statics.loginText});
    }

    if(result.eventName && this.props.hasOwnProperty(result.eventName)){
      var event = result.eventName;
      delete result.eventName;
      console.log('Triggering \'%s\' event', event)
      this.props[event](result);
    }else{
      console.log('\'%s\' Event is not defined or recognized', result.eventName)
    }

  },

  _onFacebookPress() {
    var permissions = ['email', 'public_profile'];
    if( itypeof(this.props.permissions) === 'array'){
      permissions = this.props.permissions;
    }

    if(this.state.isLoggedIn){
      FBLoginManager.logout((err,data) => this._handleEvent(err,data));
    }else{
      FBLoginManager.loginWithPermissions(permissions, (err,data) => this._handleEvent(err,data));
    }
   },

  gotoWelcome(data){
    this.props.navigator.push({
      id: 'androidwelcome',
      passProps: {fbData:data}
    });
  },

  gotoMain() {
    this.props.navigator.resetTo({
      id: 'main'
    });
  },

});


module.exports = FBAndroidLogin;
