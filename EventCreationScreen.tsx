import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, Platform, ImageStyle } from 'react-native';
import ParallaxScrollView from './components/ParallaxScrollView';
import { FlatList } from 'react-native-gesture-handler';

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
}

export default function EventCreationScreen() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [events, setEvents] = useState<Event[]>([]); // Specify the type of events as Event[]

  const createEvent = () => {
    const newEvent: Event = {
      id: Math.random().toString(),
      name: eventName,
      date: eventDate,
      location: eventLocation,
    };

    setEvents(prevEvents => [...prevEvents, newEvent]);
    setEventName('');
    setEventDate('');
    setEventLocation('');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          value={eventName}
          onChangeText={text => setEventName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Date"
          value={eventDate}
          onChangeText={text => setEventDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Location"
          value={eventLocation}
          onChangeText={text => setEventLocation(text)}
        />
        <Button title="Create Event" onPress={createEvent} />
        <Text style={styles.title}>Created Events</Text>
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventItem}>
              <Text style={styles.eventName}>{item.name}</Text>
              <Text>{item.date}</Text>
              <Text>{item.location}</Text>
            </View>
          )}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  reactLogo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  eventItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  eventName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
} as { [key: string]: ImageStyle };
