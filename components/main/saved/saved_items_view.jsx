import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable } from "react-native";
import styles from './saved_items_view_style';
import { getAnimeList } from '../../assets/js/anime_api';
import ListItem from "../list/list_item";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedView = () => {
    const [type, setType] = useState('tv');
    const [filter, setFilter] = useState('airing');
    const [response, setResponse] = useState([]);

    useEffect(() => {
        getAnime(type, filter);
    }, []);

    getAnime = (value, filter) => {
        getAnimeList(value, filter)
            .then(animeList => {
                setResponse(animeList);
            });
    }

    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>Saved Anime</Text>

            <FlatList
                style={ styles.list }
                data={ response }
                keyExtractor={item => item.mal_id}
                renderItem={({ item }) => (
                    <ListItem item={ item } />
                )}
            />
        </View>
    )
}

export default SavedView;