import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { convertToRaw, ContentState } from 'draft-js';
// import WebEditor from './WebEditor';
import WebEditor from './WebEditor';
import NativeEditor from './NativeEditor';



export default function App() {

  // const contentState = ContentState.createFromText("Add a Description")
  // const raw = convertToRaw(contentState)
  
if(Platform.OS === 'web'){
  return(
    <View><WebEditor/></View>
  )
}
return(
  <View><NativeEditor/></View>
)
  // return (
    
  //   <View style={styles.container}>
      
  //     <Text style={styles.heading}>Description</Text>
  //     {Platform.OS==='web' ? <WebEditor/> : <NativeEditor/>}
  //     {/* <WebEditor/>
  //     <NativeEditor/> */}
  //     {/* <TempScreen/> */}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading:{
    // justifyContent:'flex-start',
    // alignItems:'flex-start'
  },
});
