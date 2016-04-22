'use strict';

import React from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../../styles/style.js';
import wstyles from '../../styles/welcome.js';


var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  Text,
  Platform,
} = React;

var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;

var FB_PHOTO_WIDTH = 200;


var IOSWelcome = React.createClass({

  getInitialState(){
    return {
    };
  },

  componentWillMount(){
    console.log("Welcome componentWillMount");
    this.showProfile();
  },

  showProfile(){

    // Check if component is mounted
    var self = this;
    var data = null;

      FBLoginManager.getCredentials(function(error, data){

        if (!error) {
          self.setState({ user : data.credentials });
        }
        else {
          self.setState({ user : null });
        }

      });

  },

  render() {
    var self = this;
    var user = this.state.user;
    console.log("welcome rendering...");

    return (
      <View style={wstyles.container }>

      {user && <Profile user={user} navigator={this.props.navigator}/> }

      </View>
    );
  },

  gotoMain() {
    this.props.navigator.resetTo({
      id: 'main'
    });
  },

  renderLoading(){
    return (
       <View style={styles.container}>
        <Text style={styles.rowCenter}></Text>
      </View>
    );
  }

});



var Profile = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  getInitialState(){
    return {
      photo: null,
      info: null,
    };
  },

  componentWillMount(){
    var _this = this;
    var user = this.props.user;
    var photoapi = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;
    var infoapi = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

    fetch(photoapi)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          photo : {
            url : responseData.data.url,
            height: responseData.data.height,
            width: responseData.data.width,
          },
        });
      })
      .done();

      fetch(infoapi)
        .then((response) => response.json())
        .then((responseData) => {
          _this.setState({
            info : {
              name : responseData.name,
              email: responseData.email,
            },
          });
        })
        .done();
  },

  render(){
    if(this.state.photo == null) {
      return this.renderLoading();
    }

    var photo = this.state.photo;
    var info = this.state.info;
    // AsyncStorage.setItem("profile_photo", photo.url);

    return (
      <View style={styles.container}>

        <View style={styles.center}>
          <View style={styles.titlebar}>
            <Text style={styles.title}>Hi, { info && info.name }</Text>
          </View>
        </View>

        <View style={styles.center}>
          <Image
            style={photo &&
              {
                height: photo.height - 70,
                width: photo.width - 70,
                borderRadius: 65,
              }
            }
            source={{uri: photo && photo.url}}
          />
        </View>

        <View style={styles.center}>
          <Text style={styles.h5}> Welcome to RN Application </Text>
        </View>
        <View style={styles.center}>
          <TouchableHighlight style={styles.button}
            onPress={this.gotoMain}
              underlayColor='#29D92E'>
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableHighlight>
        </View>



      </View>
    );
  },
  renderLoading(){
    return (
      <View style={styles.container}>
        <Spinner visible={true} />
      </View>
    );
  },

  gotoMain() {
    this.props.navigator.push({
      id: 'main'
    });
  },

});

module.exports = IOSWelcome;
