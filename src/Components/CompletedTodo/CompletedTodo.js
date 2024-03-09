import React,{useState} from 'react';
import styles from "./style"
import {Text,View,Image} from "react-native"
import Checkbox from 'expo-checkbox';
import EventIcon from "../Icons/EventIcon";
import TaskIcon from "../Icons/TaskIcon";
import GoalIcon from "../Icons/GoalIcon";
const CompletedTodo = ({id,categoryId,title,description,isFirst,isLast,onToggleCompletion}) => {

    // Category Id 1 - Event
    // Category Id 2 - Task
    // Category Id 3 - Goal

    const [isChecked, setChecked] = useState(true);

    let borderTopRadius = 0;
    let borderBottomRadius = 0;
    let borderBottomWidth = 0;


    let backgroundColor = '#E7E2F3';
    let IconComponent = null;
    switch (categoryId) {
        case 1:
            backgroundColor = '#DBECF6';
            IconComponent = <EventIcon width={30} height={30}/>
            break;
        case 2:
            backgroundColor = '#E7E2F3';
            IconComponent = <TaskIcon width={30} height={30}/>
            break;
        case 3:
            backgroundColor = '#FEF5D3';
            IconComponent = <GoalIcon width={30} height={30}/>
            break;
    }

    if (isFirst) {
        borderTopRadius = 15;
    }
    if (isLast) {
        borderBottomRadius = 15;
    } else {
        borderBottomWidth = 2;
    }

    const handleToggle = () => {
        setChecked(!isChecked);
        onToggleCompletion(id, !isChecked);
    };

    return (
        <View style={[styles.container, { borderTopLeftRadius: borderTopRadius, borderTopRightRadius: borderTopRadius, borderBottomLeftRadius: borderBottomRadius, borderBottomRightRadius: borderBottomRadius, borderBottomWidth: borderBottomWidth }]}>
            <View style={styles.IconContainer}>
                <View style={[styles.Icon,{backgroundColor}]}>
                    {IconComponent}
                </View>
            </View>

            <View style={styles.TitleContainer}>
                <Text style={styles.firstTitle}>{title}</Text>
                <Text style={styles.secondTitle}>{description}</Text>

            </View>

            <View style={styles.CheckboxContainer}>

                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={handleToggle}
                    color={isChecked ? '#4A3780' : "#4A3780"}
                />

            </View>
        </View>
    );
};

export default CompletedTodo;