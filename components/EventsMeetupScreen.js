import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, FlatList, Button } from 'react-native';
import ThemedView from './ThemedView';

const EventsMeetupScreen = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [events, setEvents] = useState([]);

  const handleCreateEvent = () => {
    if (!eventTitle || !eventDetails) {
      console.log('Please provide both event title and details');
      return;
    }
    const newEvent = { id: events.length + 1, title: eventTitle, details: eventDetails };
    setEvents([...events, newEvent]);
    setEventTitle('');
    setEventDetails('');
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Events/Meetup</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Title"
        value={eventTitle}
        onChangeText={setEventTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Details"
        value={eventDetails}
        onChangeText={setEventDetails}
        multiline
      />
      <Button title="Create Event" onPress={handleCreateEvent} />
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text>{item.details}</Text>
            <Button title="Delete" onPress={() => handleDeleteEvent(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  eventItem: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  eventTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default EventsMeetupScreen;










