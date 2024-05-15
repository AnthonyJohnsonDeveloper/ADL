import React from 'react';
import { useAppContext } from './AppContext';
import { Channel, MessageList, MessageInput } from 'stream-chat-react-native'; // Or stream-chat-expo

const ChannelScreen = () => {
  const { channel } = useAppContext();

  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;

