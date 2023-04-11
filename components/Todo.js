import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
<MaterialIcons name="delete" size={24} color="black" />;

export default function Todo({ todo, deleteTodos }) {
  return (
    <TouchableOpacity onPress={() => deleteTodos(todo.item.key)}>
      <View style={styles.todo}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.todoText}>{todo.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    margin: 10,
    borderColor: '#bbb',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 20,
    marginLeft: 10,
  },
});
