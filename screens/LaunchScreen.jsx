import React, { useState, useEffect } from 'react'
import { Camera } from 'expo-camera';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import firebase from '../firebase'

const videoRef = firebase.database().ref('videoCollaction');


export function LaunchScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [recording, setRecording] = useState(false)

  // global video varuble; store uri here
  let [video] = useState(null)

  //var [videoArray, setVideo] = useState([]);
  

  //mount componet, works w/ video record 
  useEffect(() => {
    videoRef.on('value', (childSnapshot) => {
      const videoArray = [];
      childSnapshot.forEach((doc) => {
        videoArray.push({
          key: doc.key,
          video: doc.toJSON().video,
        });

      })
    })
  });


  //Permissions and state managment 
  const [type, setType] = useState(Camera.Constants.Type.back); useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []); if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref);
      }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}>

            {/* To flip camera back to front */}
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end'
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Ionicons name={Platform.OS === 'ios' ? "ios-reverse-camera" : 'md-reverse-camera'} size={40} color="white" />
            </TouchableOpacity>

            {/* not needed anymore (white camera button)*/}
            {/* <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('Gallery')}>

              <View style={{
                borderWidth: 2,
                borderRadius: "50%",
                borderColor: 'white',
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              >
                <View style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: 'white',
                  height: 40,
                  width: 40,
                  backgroundColor: 'white'
                }} >
                </View>
              </View>
            </TouchableOpacity> */}

            {/* Record Video btn */}
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
              // if recording
              if (!recording) {
                setRecording(true)
                video = await cameraRef.recordAsync();
                //console.log('video', { video });
                
                //trigger firebase push array 
                videoRef.push({ 
                  //push video
                  video,
                 }).then((data)=>{
                     //success callback
                     console.log('data ' , data)
                 }).catch((error)=>{
                     //error callback
                     console.log('error ' , error)
                 })
                .then(console.log('new video: ', {video}), alert('video added'));

              } else {
                setRecording(false)
                cameraRef.stopRecording()
              }
            }}>
              <View style={{
                borderWidth: 2,
                borderRadius: "50%",
                borderColor: 'red',
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              >
                <View style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: recording ? "blue" : 'red',
                  height: 40,
                  width: 40,
                  backgroundColor: recording ? "blue" : 'red'
                }} >
                </View>
              </View>
            </TouchableOpacity>


          </View>
        </View>
      </Camera>
    </View>
  );
}


// styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});

