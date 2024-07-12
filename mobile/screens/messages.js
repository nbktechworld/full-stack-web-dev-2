import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import globalStyles from '../styles/global';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Because app loaded in device cant access backend, gotta tunnel it.
// Other would use 'http://localhost:3001' here
const apiUrl = 'https://full-stack-web-dev.loca.lt';

export default function Messages() {
  const [messages, setMessages] = React.useState([]);
  const [newComment, setNewComment] = React.useState('');

  React.useEffect(function() {
    fetch(`${apiUrl}/messages`).then(function(response) {
      // handle errors (check if response.ok)
      // todo

      return response.json();
    }).then(function(messages) {
      setMessages(messages);
    });
  }, [])

  function onCommentPress() {
    fetch(`${apiUrl}/messages`, {
      method: 'POST',
      body: JSON.stringify({
        comment: newComment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json()) // todo: !response.ok
    .then((createdMessage) => {
      setMessages([
        createdMessage,
        ...messages
      ]);
      setNewComment('');
    })
    .catch((error) => {
      // error handling
    })
  }

  return (
    <ScrollView>
      <View style={[globalStyles.container, { paddingTop: Constants.statusBarHeight }]}>
        <StatusBar style="auto" />
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Type something:</Text>
        <TextInput
          style={{
            height: 120,
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%'
          }}
          multiline
          value={newComment}
          onChangeText={(text) => setNewComment(text)}
        />
        <Button title="Comment" onPress={onCommentPress} />
        <View style={{ width: '90%', marginTop: 16 }}>
          {messages.map(function(message) {
            return (
              <View style={{ backgroundColor: 'antiquewhite', borderWidth: 1, borderRadius: 4, padding: 16, marginBottom: 16 }} key={message.id}>
                <Text style={{ fontSize: 18 }}>{message.comment}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
