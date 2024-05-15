// ChannelListScreen.js
import React from 'react';
import { ChannelList } from 'stream-chat-react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { useAppContext } from './AppContext';

const ChannelListScreen = () => {
  const { setChannel } = useAppContext();
  const navigation = useNavigation(); // Initialize useNavigation hook

  return (
    <ChannelList
      onSelect={(channel) => {
        setChannel(channel);
        navigation.navigate('ChannelScreen'); // Navigate to ChannelScreen
      }}
      // Other ChannelList props
    />
  );
};

export default ChannelListScreen;

