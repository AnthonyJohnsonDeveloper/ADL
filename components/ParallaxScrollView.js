import React from 'react';
import { View, ScrollView, Image, StyleSheet, Platform } from 'react-native';

const ParallaxScrollView = ({ headerBackgroundColor, headerImage, children }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
          {headerImage}
        </View>
        <View style={styles.content}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Adjust padding for iOS status bar
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    position: 'relative',
  },
  content: {
    padding: 20,
  },
});

export default ParallaxScrollView;
