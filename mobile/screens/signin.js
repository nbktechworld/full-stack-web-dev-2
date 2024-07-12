import { Text, TextInput, View } from 'react-native';
import Constants from 'expo-constants';
import globalStyles from '../styles/global';
import { StatusBar } from 'expo-status-bar';

export default function Signin() {
  return (
    <View style={[globalStyles.container, { paddingTop: Constants.statusBarHeight }]}>
      <StatusBar style="auto" />
      <Text>Password:</Text>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%' }} secureTextEntry />
    </View>
  )
}
