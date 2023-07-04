import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Trash} from 'react-native-feather';
import {Trash2} from 'react-native-feather';
import {Plus} from 'react-native-feather';
import {Check} from 'react-native-feather';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Todo = () => {
  const [textinputs, setTextinputs] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodoTouserDevice();
  }, []);

  useEffect(() => {
    saveTodoTouserDevice(todos);
  }, [todos]);

  const ListItem = ({todo}) => {
    return (
      <View className="bg-white p-2 rounded-lg m-2 flex-row justify-between">
        <View>
          <Text
            style={{
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        <View className="flex-row ">
          {!todo?.completed && (
            <TouchableOpacity
              className="mr-4"
              onPress={() => markTodoComplete(todo?.id)}>
              <Check color={'green'} />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => deleteTodo(todo?.id)}>
            <Trash color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const saveTodoTouserDevice = async todos => {
    try {
      const stringifyTodo = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodo);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  const getTodoTouserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTood = () => {
    if (textinputs == '') {
      Alert.alert('Error', 'Please Enter Todo List');
    } else {
      const newtodo = {
        id: Math.random(),
        task: textinputs,
        completed: false,
      };
      setTodos([...todos, newtodo]);
    }
  };

  const markTodoComplete = todoId => {
    const newTodos = todos.map(item => {
      if (item.id == todoId) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodos(newTodos);
  };

  const deleteTodo = todoId => {
    const newTodos = todos.filter(item => item.id != todoId);
    setTodos(newTodos);
  };

  const clearTodo = () => {
    Alert.alert('Confirm', 'Clear Todo?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {text: 'No'},
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#2e93ff] ">
      <View className="flex items-center p-5">
        <Text className="font-bold text-3xl text-white ">ToDo List</Text>
      </View>
      <View className="relative"></View>
      <View className="flex flex-row items-center justify-between p-5">
        <Text className="font-light text-2xl text-white ">Today's Task </Text>
        <TouchableOpacity onPress={clearTodo}>
          <View className="bg-white h-10 p-2 rounded-lg">
            <Trash2 color={'red'} />
          </View>
        </TouchableOpacity>
      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      {/* top-[300px] */}
      <View>
        <View className="absolute items-center bottom-0 flex-row m-5  text-white top-100 ">
          <TextInput
            className=" border border-stone-500 w-80 bg-white  mr-5 h-14 rounded-[26px]  p-5 "
            placeholder="Add Todo"
            onChangeText={text => setTextinputs(text)}
            value={textinputs}
          />
          <TouchableOpacity onPress={addTood}>
            <View className="bg-[#fb0404] items-center p-4 rounded-[26px] h-14 w-14 shadow-lg">
              <Plus color={'white'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Todo;
