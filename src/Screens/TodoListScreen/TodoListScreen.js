// TodoListScreen.js
import React, {useState, useCallback, useEffect} from 'react';
import { Pressable, Text, View, ScrollView, SafeAreaView } from "react-native";
import IncompletedTodo from "../../Components/IncompletedTodo/IncompletedTodo";
import CompletedTodo from "../../Components/CompletedTodo/CompletedTodo";
import styles from "./style";
import {useNavigation} from "@react-navigation/native";
import {useTodoContext} from "../../Context/TodoContext";

const TodoListScreen = () => {


    const navigation = useNavigation();

    const handleNavigateAddNewTask = useCallback(() => {
        navigation.navigate('AddNewTodo');
    }, [navigation]);


    const {
        completedTodos,
        inCompletedTodos,
        changeTodoStatus
    }=useTodoContext();

    useEffect(() => {
        console.log(inCompletedTodos);
    }, [inCompletedTodos]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Pressable style={styles.BackButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z"
                                fill="#4A3780"/>
                        </svg>
                    </Pressable>
                    <Text style={styles.HeaderDateText}>October 20, 2022</Text>
                    <Text style={styles.HeaderTitle}>My Todo List</Text>
                </View>

                <View style={styles.FakeBackground}></View>

                <View style={styles.main}>
                    <View style={styles.IncompletedTodosContainer}>
                        {inCompletedTodos.map((todo, index) => (
                            <IncompletedTodo
                                key={todo.id}
                                categoryId={todo.categoryId}
                                isFirst={index === 0}
                                isLast={index === inCompletedTodos.length - 1}
                                title={todo.title}
                                description={todo.description}
                                onToggleCompletion={() => changeTodoStatus(todo.id)}
                                id={todo.id}
                            />
                        ))}
                    </View>

                    <View style={styles.CompletedTodosContainer}>
                        <Text style={styles.CompletedText}>Completed</Text>
                        {completedTodos.map((todo, index) => (
                            <CompletedTodo
                                key={todo.id}
                                categoryId={todo.categoryId}
                                isFirst={index === 0}
                                isLast={index === completedTodos.length - 1}
                                title={todo.title}
                                description={todo.description}
                                onToggleCompletion={() => changeTodoStatus(todo.id)}
                                id={todo.id}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.footer}>
                    <Pressable style={styles.SaveButton} onPress={handleNavigateAddNewTask}>
                        <Text style={styles.SaveButtonText}>Add New Task</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TodoListScreen;
