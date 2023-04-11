import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function TodoForm({ value, inputHandler, addTodo }) {
  return (
    <View style={styles.todoContainer}>
      <TextInput
        style={styles.input}
        placeholder="what is your main foucs for today"
        onChangeText={(text) => inputHandler(text)}
        value={value}
      />
      <TouchableOpacity style={styles.touchable} onPress={()=>addTodo()}>
        <Text style={styles.btnTxt}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    margin: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 20,
  },
  touchable: {
    backgroundColor: '#7986cb',
    padding: 10,
    marginVertical: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15,
    color: 'white',
    width: '80%',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
