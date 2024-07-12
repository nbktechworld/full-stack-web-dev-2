import { View, Text, Button, Image } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import styles from '../styles/home';
import globalStyles from '../styles/global';

function Home(props) {
  const [greeting, setGreeting] = useState('');

  function onButtonPress() {
    setGreeting('Hello there!!!!')
  }

  return (
    <View style={[globalStyles.container, { paddingTop: Constants.statusBarHeight }]}>
      <StatusBar style="auto" />
      <Button title="Signin" onPress={() => props.navigation.navigate('Signin')} />
      <Button title="Messages" onPress={() => props.navigation.navigate('Messages')} />

      <Text>Hello World</Text>
      <Text>What's up?!</Text>
      <Button title="Click me" onPress={onButtonPress} />
      {greeting && <Text>{greeting}</Text>}
      <Image source={{ uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppies-Dog-Wallpaper.jpg' }} style={styles.dogImage} />
      
    </View>
  );
}

export default Home;
