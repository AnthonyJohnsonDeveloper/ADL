import React, { useEffect, useState, useContext } from "react";
import { Button, Text } from "react-native"; // Import Text component
import ThemedView from "./ThemedView";
import {
  Chat,
  Channel,
  ChannelList,
  StreamChat,
} from "stream-chat-react-native";
import { AppContext } from "./AppContext";
import { chatConfig } from "./chatConfig";
import { useChatClient } from "./useChatClient";

const serverClient = StreamChat.getInstance(
  chatConfig.apiKey,
  chatConfig.secret
);

const ChatComponent = () => {
  const { user } = useContext(AppContext);
  const [channel, setChannel] = useState(null);
  const [connecting, setConnecting] = useState(true);

  useEffect(() => {
    const connectUserAndCreateChannel = async () => {
      try {
        // Connect user
        await serverClient.connectUser(
          {
            id: user.id,
            name: user.name,
            image: user.image,
          },
          serverClient.devToken(user.id)
        );

        // Create or retrieve channel
        const existingChannel = serverClient.channel("messaging", "the_park");
        await existingChannel.watch();
        setChannel(existingChannel);
        setConnecting(false);
      } catch (error) {
        console.error("Error:", error);
        // Handle error, e.g., display error message to the user
      }
    };

    connectUserAndCreateChannel();
  }, []);

  return (
    <ThemedView style={{ flex: 1 }}>
      {channel ? (
        <Chat client={serverClient}>
          <ChannelList
            filters={{ type: "messaging" }}
            Preview={ChannelPreview}
            onSelect={(channel) => setChannel(channel)}
          />
          {channel && (
            <Channel channel={channel}>
              <ChannelList />
            </Channel>
          )}
        </Chat>
      ) : (
        <Button
          title={connecting ? "Connecting..." : "Connection Failed"}
          disabled={true}
        />
      )}
    </ThemedView>
  );
};

const ChannelPreview = ({ channel }) => {
  return (
    <Text style={{ padding: 10 }}>
      {channel.data.name || "Unnamed Channel"}
    </Text>
  );
};

export default ChatComponent;
