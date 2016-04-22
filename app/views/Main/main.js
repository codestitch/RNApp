'use strict';

var React = require('react-native');

import styles from '../../styles/style.js';

// Navigation
import Event from '../Events';

var {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
} = React;

import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';

var Main = React.createClass({
  getInitialState(){
    return {
    };
  },


  render() {

    return (
      <View style={styles.container_main}>
        <ScrollableTabView initialPage={0} renderTabBar={() => <FacebookTabBar />}>
          <ScrollView tabLabel="ios-paper" style={styles.tabView}>
            <View style={styles.card}>
              <Event navigator={this.props.navigator}/>
            </View>
          </ScrollView>
          <ScrollView tabLabel="person-stalker" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-world" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="navicon-round" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>

    );
  },
  logout() {
    this.props.navigator.replace({
      id: 'login'
    });
  },

});


module.exports = Main;
