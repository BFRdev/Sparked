import React, { useState, useEffect, Component } from 'react'
import { Camera } from 'expo-camera';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Video } from 'expo-av';

// global video varuble; store uri here
let video = null
//stack nav 
const Stack = createStackNavigator();

export function LaunchScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [recording, setRecording] = useState(false)

  //Permissions
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

                      {/* Button navigator this.props.navigation.navigate(')'*/}
                      <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('Gallery')}>

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
                      </TouchableOpacity>

                      {/* Button for taking video */}
                      <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
                          if (!recording) {
                              setRecording(true)
                              video = await cameraRef.recordAsync();
                              console.log('video', video);
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


export class GalleryScreen extends Component {

  // add video initial variable and add this to App Class
  state = {
    mute: false,
    shouldPlay: true,
  }
  render() {

    return (
      <View style={styles.container}>
        <View>
          <Text style={{ textAlign: 'center' }}> React Native Video </Text>
          <Video
            source={{ uri: 'file:///var/mobile/Containers/Data/Application/4566B42D-086E-4D54-81BA-4A7725B8E6E6/Library/Caches/ExponentExperienceData/%2540anonymous%252FvideoRecording-40ef4922-7425-4a83-8826-c7316d48033b/Camera/E38A9BF9-B782-456B-BB68-41AD0930A21D.mov' }}
            shouldPlay={this.state.shouldPlay}
            resizeMode="cover"
            style={{ width: 300, height: 300 }}
            isMuted={this.state.mute}
            useNativeControls={true}
            isLooping={true}
          />
        </View>
      </View>

    );
  }
};


// navigation handleer (leave as is)
export default function LaunchStack() {
  return (
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen}
          options={{
            //customize header
            title: "Camera", headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
          }} />
        <Stack.Screen name="Gallery" component={GalleryScreen}
          options={{
            //customize header
            title: "Gallery Screen", headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
          }} />
      </Stack.Navigator>
    
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


// export const LaunchScreen = ({}) => {
//     return( 
//         <Center>
//             <Text>Launch Screen</Text>
//         </Center>
//     );
// }