import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import styles from './saved_items_view_style';

const SavedView = () => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>This is the Saved Items component</Text>
        </View>
    )
}

export default SavedView;