// App.js
import React from "react";
import EventsMeetupScreen from "./components/EventsMeetupScreen.js";
import ChatScreen from "./components/ChatScreen.js";
import ParallaxScrollView from "./components/ParallaxScrollView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet } from "react-native";
import ChannelListScreen from "./components/ChannelListScreen.js"; // Import ChannelListScreen
import ChannelScreen from "./components/ChannelScreen.js"; // Import ChannelScreen




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Events/Meetup") {
              iconName = focused ? "event" : "event";
            } else if (route.name === "Chat") {
              iconName = focused ? "chat" : "chat";
            }

            return (
              <MaterialIcons name={iconName} size={size} color={color} />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={SplashScreen}
          options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen
          name="Events/Meetup"
          component={EventsMeetupScreen}
          options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{ tabBarLabel: () => null }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const SplashScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("./assets/your-header-image.png")}
          style={styles.headerImage}
        />
      }
    >
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the ADL Community App!</Text>
        <View style={styles.numberedList}>
          <Text style={styles.listItem}>
            Meetup: Meetup with fellow ADL members at various motorsports
            events such as FD or Final Bout
          </Text>
          <Text style={styles.listItem}>
            Check-in: Check in to find out which members are attending events
            as either a spectator or driver to show support for your fellow ADL
            members{" "}
          </Text>
          <Text style={styles.listItem}>
            Chat: Everyone and their mother has Discord or Messenger, but does
            your community have its own app?{" "}
          </Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 30,
    backgroundColor: "#FFFF00",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  numberedList: {
    marginTop: 20,
  },
  listItem: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 10,
  },
});

export default App;

