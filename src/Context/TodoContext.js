import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([
        { id: 1, categoryId: 1, title: "Attend concert", description: "At 7:00 PM", completed: false },
        { id: 2, categoryId: 2, title: "Finish homework", description: "Math and Science", completed: false },
        { id: 3, categoryId: 3, title: "Lose 10 pounds", description: "Exercise regularly and eat healthy", completed: false },
        { id: 4, categoryId: 1, title: "Birthday party", description: "At Mike's place", completed: false },
        { id: 5, categoryId: 2, title: "Read a book", description: "Science fiction", completed: false },
        { id: 6, categoryId: 3, title: "Travel to Europe", description: "Visit France and Italy", completed: false }
    ]);

    useEffect(() => {
        const loadTodoList = async () => {
            try {
                const storedTodoList = await AsyncStorage.getItem('todoList');
                if (storedTodoList) {
                    setTodoList(JSON.parse(storedTodoList));
                }
            } catch (error) {
                console.error('Error loading todo list from AsyncStorage:', error);
            }
        };

        loadTodoList();
    }, []);

    useEffect(() => {
        const saveTodoList = async () => {
            try {
                await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
            } catch (error) {
                console.error('Error saving todo list to AsyncStorage:', error);
            }
        };

        saveTodoList();
    }, [todoList]);

    const addTodo = (todo) => {
        todo.id = Math.random().toString(36).substr(2, 9);
        const newTodoList = [...todoList, todo];
        setTodoList(newTodoList);
    };

    const removeTodo = (todoId) => {
        const updatedTodoList = todoList.filter(todo => todo.id !== todoId);
        setTodoList(updatedTodoList);
    };

    const changeTodoStatus = (todoId) => {
        setTodoList(prevTodos =>
            prevTodos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const inCompletedTodos = todoList.filter(todo => !todo.completed);
    const completedTodos = todoList.filter(todo => todo.completed);

    return (
        <TodoContext.Provider value={{addTodo, removeTodo, changeTodoStatus, inCompletedTodos, completedTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);
