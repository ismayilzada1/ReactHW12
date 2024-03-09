import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import GoalIcon from "../Icons/GoalIcon";

const Goal = ({ Id, selected, onSelect }) => {
    return (
        <TouchableOpacity style={[styles.radioButton, selected && styles.selected]} onPress={onSelect}>
            <GoalIcon width={30} height={30}/>
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
        backgroundColor: '#FEF5D3',
    },
    selected: {
        borderColor: '#4A3780',
    },
});

export default Goal;
