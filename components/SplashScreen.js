// SplashScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/your-header-image.png")}
        style={styles.headerImage}
      />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the ADL Community App!</Text>
        <View style={styles.numberedList}>
          <Text style={styles.listItem}>
            Meetup: Meetup with fellow ADL members at various motorsports events
            such as FD or Final Bout
          </Text>
          <Text style={styles.listItem}>
            Check-in: Check in to find out which members are attending events as
            either a spectator or driver to show support for your fellow ADL
            members{" "}
          </Text>
          <Text style={styles.listItem}>
            Chat: Everyone and their mother has Discord or Messenger, but does
            your community have its own app?{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 30,
    backgroundColor: "#FFFF00", // Yellow background color
  },
  text: {
    fontSize: 30,
    fontWeight: "bold", // Bold text
    color: "#000000", // Black text color
  },
  numberedList: {
    marginTop: 20,
  },
  listItem: {
    fontSize: 20,
    color: "#000000", // Black text color
    marginBottom: 10,
  },
});

export default SplashScreen;
