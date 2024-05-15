import {Slot, Stack} from 'expo-router';
import { useEffect } from 'react';
import {StreamChat} from 'stream-chat';
import {Chat, OverlayProvider} from 'stream-chat-expo'
import { OverlayProvider } from 'stream-chat-react-native';

const client = StreamChat.getInstance('4qs628f6q3nc');

export default function layout() {

    useEffect (() => {
        const connect = async () => {
          await client.connectUser(
            {
              id: 'jlahey',
              name: 'Jim Lahey',
              image: 'https://i.imgu.com/fR9Jz14.png',
            },
            client.devToken('jlahey')
          );

          // const channel = client.channel('messaging', 'the_park', {
            // name: 'The Park',
          // });
          // await channel.watch();
        };
    
    
        connect();
      });
    return (
        <OverlayProvider>
        <Chat client={client}>
          <ChannelList />
        </Chat>
      </OverlayProvider>   
    );
};