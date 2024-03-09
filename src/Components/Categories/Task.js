import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import TaskIcon from "../Icons/TaskIcon";

const Task = ({ Id, selected, onSelect }) => {
    return (
        <TouchableOpacity style={[styles.radioButton, selected && styles.selected]} onPress={onSelect}>
            <TaskIcon width={30} height={30}/>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    radioButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBECF6',
    },
    selected: {
        borderColor: '#4A3780',
    },
});

export default Task;
