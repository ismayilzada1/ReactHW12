import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AddNewTodoScreen from "./src/Screens/AddNewTodoScreen/AddNewTodoScreen";
import TodoListScreen from "./src/Screens/TodoListScreen/TodoListScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TodoProvider} from "./src/Context/TodoContext";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="TodoList"
              component={TodoListScreen}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="AddNewTodo"
              component={AddNewTodoScreen}
              options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </TodoProvider>
  );
}
