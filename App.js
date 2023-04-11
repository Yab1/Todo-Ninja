import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

export default function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    { title: 'take out the trush', key: '1' },
    { title: 'creat a simple todo app', key: '2' },
    { title: 'initalize the project', key: '3' },
  ]);

  const inputHandler = (text) => {
    setValue(text);
  };

  const deleteTodos = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  const addTodo = () => {
    if (value.length > 3) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { title: value, key: Math.random().toString() },
      ]);
      setValue('');
    } else {
      Alert.alert('OOPS!', 'Todos must be 3 characters long', [
        { title: 'Try Again', onPress: () => console.log('try again') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <TodoForm value={value} inputHandler={inputHandler} addTodo={addTodo} />
        <FlatList
          data={todos}
          renderItem={(item) => <Todo todo={item} deleteTodos={deleteTodos} />}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
