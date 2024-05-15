import React from "react";
import ThemedView from "./ThemedView";
import ChatComponent from "./ChatComponent.js"; // Import the ChatComponent
import { Channel, MessageList, MessageInput } from "stream-chat-react-native"; // Import Stream Chat components
import { useAppContext } from "./AppContext";

const ChannelScreen = () => {
  const { channel } = useAppContext(); // Assuming you have a custom hook to access the channel from the context

  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;



