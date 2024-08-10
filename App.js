import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

// Correct the server URL
const serverUrl = 'http://192.168.100.19:5000';

export default function App() {
  const sendUnlockCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/unlock`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error unlocking door:', error);
      Alert.alert('Error', 'Error unlocking door');
    }
  };

  const sendLockCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/lock`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error locking door:', error);
      Alert.alert('Error', 'Error locking door');
    }

  };

  const sendTULCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/tul`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error locking door:', error);
      Alert.alert('Error', 'Error locking door');
    }

  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/14/14111.png' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}></Text>
      <View style={styles.card}>
      <TouchableOpacity style={styles.button1} onPress={sendTULCommand}>
          <Text style={styles.buttonText1}>Open and Close door</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={sendUnlockCommand}>
          <Text style={styles.buttonText2}>Unlock Door</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={sendLockCommand}>
          <Text style={styles.buttonText3}>   Lock Door</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '50%',
    height: 200,
    resizeMode: 'stretch',
    marginBottom: 20,
  },

  image1: {
    width: '50%',
    height: 200,
    resizeMode: 'stretch',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: 'grey',
    borderRadius: 90,
    padding: 20,

    alignItems: 'center',
    height:250,
  },

  button: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },

  button1: {
    backgroundColor: 'black',
    borderRadius: 90,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',

  },

  button2: {
    borderTopLeftRadius: 90,
    borderBottomLeftRadius: 90,
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '50%',
    left:-80,
    top:10,
    height:70
  },

  button3: {
    borderTopRightRadius: 90,
    borderBottomRightRadius: 90,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '50%',
    left:80,
    height:70,
    top:-80,
    textAlign:'center'
  },

  buttonText1: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  buttonText2: {
    color: 'brown',
    fontSize: 18,
    fontWeight: '600',
  },

  buttonText3: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },

});
