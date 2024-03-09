import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import EventIcon from "../Icons/EventIcon";

const Event = ({ Id, selected, onSelect }) => {
    return (
        <TouchableOpacity style={[styles.radioButton, selected && styles.selected]} onPress={onSelect}>
            <EventIcon width={30} height={30}/>
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
        backgroundColor: '#E7E2F3',
    },
    selected: {
        borderColor: '#4A3780',
    },
});

export default Event;
