import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from "react-native";
import styles from './saved_items_view_style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedView = () => {
    const [data, setData] = useState([]);
    const [anime, setAnime] = useState([]);

    retrieveKeys = async () => {
        try {
          const value = await AsyncStorage.getAllKeys();
          if (value !== null) {
            setData(value)
            console.log(value);
          }
        } catch (error) {
          console.log(error);
        }
    };

    retrieveAnime = async (name) => {
        try {
          const value = await AsyncStorage.getItem(name);
          if (value !== null) {
            setAnime(value)
            console.log(value);
          }
        } catch (error) {
          console.log(error);
        }
    };

    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>This is the Saved Items component</Text>
            <Text style={ styles.text }>{ data ? data : null }</Text>
            <Text style={ styles.text }>{ anime ? anime : null }</Text>

            {/* <Pressable 
                onPress={ retrieveKeys } >
                    <Text style={ styles.text } >TEST STORAGE BY CLICKING THIS</Text>
            </Pressable>

            <Pressable 
                onPress={ retrieveAnime } >
                    <Text style={ styles.text } >TEST GETTING ANIME CLICKING THIS</Text>
            </Pressable> */}
        </View>
    )
}

export default SavedView;