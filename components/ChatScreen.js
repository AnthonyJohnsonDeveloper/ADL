import React from 'react';
import { Text } from 'react-native';
import ThemedView from './ThemedView';

const ChatScreen = () => {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat Screen</Text>
    </ThemedView>
  );
};

export default ChatScreen;

