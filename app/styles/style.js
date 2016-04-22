import React from 'react-native';

import Global from './global.js';
//const COLORS = require('./../constants/colors');
const {
  StyleSheet
} = React;

const styles = StyleSheet.create({

  // GENERAL CONTAINERS
  container_full: {
    flex: 1,
  },
  container_main: {
    flex: 1,
    marginTop: 25,
  },
  container_center: {
    padding: 30,
    paddingTop: 50,
    flex: 1,
  },
  center: {
   flexDirection: 'row',
	 alignSelf: 'center',
	 margin: 0,
 },

	row: {
	 flexDirection: 'row',
	 margin:0,
	},

  // FONT
  text: {
    fontSize: Global.FONT_SIZE,
    lineHeight: Global.FONT_SIZE * 1.5,
  },
  h1: {
    fontSize: Global.FONT_SIZE * 3.5,
  },
  h2: {
    fontSize: Global.FONT_SIZE * 3,
  },
  h3: {
    fontSize: Global.FONT_SIZE * 2.5,
  },
  h4: {
    fontSize: Global.FONT_SIZE * 2,
  },
  h5: {
    fontSize: Global.FONT_SIZE * 1.5,
  },
  h6: {
    fontSize: Global.FONT_SIZE * 1,
  },

  // Buttons
  button: {
    padding: 3,
    width: 120,
    flexDirection: 'row',
    backgroundColor: '#29D65E',
    borderColor: '#29D65E',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  },

  // LIST VIEW
  launchView:{
   flex: 1,
  },
  listcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listView: {
      backgroundColor: '#fff',
      flex: 1,  
  },
  wholeimage: {
    flex: 1,
  },
  headlineContainer : {
    marginTop: 100,
    backgroundColor: '#D6D6D6',
    height: 50,
  },
  title: {
    fontSize: 20,
    paddingLeft: 9,
    paddingTop: 5,
  },
  description: {
    fontSize: 10,
    paddingLeft: 9,
    color: '#3e3e3e',
  },

   // Detail Views
   detailcontainer:{
     height: 250,
   },
   detailimg: {
     flex: 1,
   },


  // Toolbar
  toolbar:{
       backgroundColor:'#81c04d',
       paddingTop:30,
       paddingBottom:14,
       flexDirection:'row'
   },
   toolbarButton:{
       width: 50,
       color:'#fff',
       textAlign:'center'
   },
   toolbarTitle:{
       color:'#fff',
       textAlign:'center',
       fontWeight:'bold',
       flex:1,
       fontSize: 18,
   },


});

export default styles;
