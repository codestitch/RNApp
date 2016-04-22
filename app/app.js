'use strict';

var React = require('react-native');
import styles from './styles/style.js';

//views
import Login from './views/Login';
import IOSWelcome from './views/Welcome/welcome.ios';
import Main from './views/Main';
import EventDetails from './views/Events/events.details';

const {
  View,
  StyleSheet,
  Navigator,
  Dimensions
} = React;

// Get the width and height of the window
const {
  width,
  height
} = Dimensions.get('window');

// Navigator configuration of animations.
const BaseConfig = Navigator.SceneConfigs.FloatFromRight;

const CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  // Make it snap back really quickly after canceling pop
  //snapVelocity: 8,
  // Make it so we can drag anywhere on the screen
  edgeHitWidth: width
});

const CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A tightly wound spring will make this transition fast
  //springTension: 100,
  //springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture
  }
})

var app = React.createClass({
  //A simple switch statement to allow our router to work
  getView(id){
    switch (id){
      case 'login':
          return Login;
      case 'ioswelcome':
          return IOSWelcome;
      case 'main':
          return Main;
      case 'eventdetails':
          return EventDetails;
    }
  },

  renderScene(route, navigator) {
    console.log('route ' + route.id);
    let Component = this.getView(route.id);
    return (
        <Component
          route={route}
          navigator={navigator}
        />
    );
  },

  configureScene(route) {
    return CustomSceneConfig;
  },

  render() {
    return (
      <Navigator
        style={styles.container}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
        navigationBarHidden={true}
        initialRoute={{
          id: 'main'
        }}
      />
    );
  }
});

module.exports = app;
