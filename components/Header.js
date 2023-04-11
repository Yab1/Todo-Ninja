import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7986cb',
    height: 'auto',
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    padding: 15,
  },
});
