// ThemedView.js

import React from 'react';
import { View, StyleSheet } from 'react-native';

const ThemedView = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Default background color
    padding: 10, // Default padding
  },
});

export default ThemedView;
