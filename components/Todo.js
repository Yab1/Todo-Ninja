import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function Todo({ todo, deleteTodos }) {
  return (
    <TouchableOpacity onPress={() => deleteTodos(todo.item.key)}>
      <Text style={styles.btnTxt}>{todo.item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnTxt: {
    color: 'black',
    padding: 16,
    margin: 10,
    fontSize: 20,
    borderColor: '#bbb',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
});
