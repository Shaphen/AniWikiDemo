import React, { useEffect, useState, useCallback } from 'react';
import { 
    Text, 
    View, 
    ActivityIndicator, 
    FlatList, 
    SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SearchBar } from 'react-native-elements';
import ListItem from "./list_item";
import { getAnimeList, searchAnime } from '../../assets/js/anime_api';
import styles from "./list_style.js";

const ListView = () => {
    const [isLoading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const [openType, setOpenType] = useState(false);
    const [search, onChangeSearch] = useState("");
    const [openFilter, setOpenFilter] = useState(false);
    const [type, setType] = useState('tv');
    const [filter, setFilter] = useState('bypopularity');
    const [types, setTypes] = useState([
        {label: 'TV Shows', value: 'tv'},
        {label: 'Movies', value: 'movie'},
        {label: 'Specials', value: 'special'},
        {label: 'OVAs', value: 'ova'},
        {label: 'Music', value: 'music'}
    ]);
    const [filters, setFilters] = useState([
        {label: 'Popular', value: 'bypopularity'},
        {label: 'Coming Soon', value: 'upcoming'},
        {label: 'Airing Now', value: 'airing'},
        {label: 'Favorites', value: 'favorite'}
    ]);

    const onTypeOpen = useCallback(() => {
        setOpenFilter(false);
    }, []);

    const onFilterOpen = useCallback(() => {
        setOpenType(false);
    }, []);

    const updateSearch = (search) => {
        onChangeSearch({ search });
        setOpenType(false);
        setOpenFilter(false);
    }

    useEffect(() => {
        getAnime(type, filter);
    }, []);

    getAnime = (value, filter) => {
        setLoading(true);
        getAnimeList(value, filter)
            .then(animeList => {
                setResponse(animeList);
                setLoading(false);
            });
    }

    findAnime = () => {
        setLoading(true);

        searchAnime(search.search, type, filter)
            .then(animeList => {
                setResponse(animeList);
                setLoading(false);
            });
    }

    return (
        <View
          style={ styles.container }>
            <View style={ styles.filterContainer }>
                <View style={ styles.searchBarContainer }>
                        <SearchBar
                            style={ styles.searchBar }
                            containerStyle={ styles.searchBarOuterStyle }
                            placeholder="Search"
                            onChangeText={ updateSearch }
                            value={ search }
                            onSubmitEditing={ findAnime } />
                </View>
            </View>


            {isLoading ? <ActivityIndicator/> : (
                <SafeAreaView style={ styles.animeListContainer }>
                    <FlatList
                        style={ styles.list }
                        data={ response }
                        keyExtractor={item => item.mal_id}
                        renderItem={({ item }) => (
                            <ListItem item={ item } />
                        )}
                    />
                </SafeAreaView>
            )}

            <View style={ styles.dropdownWrapper }>
                <DropDownPicker
                    style={ styles.dropdown }
                    placeholder="Set Type"
                    textStyle={ styles.dropdownText }
                    containerStyle={ styles.dropdownContainer }
                    theme="DARK"
                    open={openType}
                    onOpen={onTypeOpen}
                    value={type}
                    items={types}
                    setOpen={setOpenType}
                    setValue={setType}
                    onChangeValue={(type) => {
                        getAnime(type, filter);
                        onChangeSearch("");
                    }}
                    setItems={setTypes}
                    showArrowIcon={ false }
                />
                <DropDownPicker
                    style={ styles.dropdown }
                    placeholder="Set Filter"
                    textStyle={ styles.dropdownText }
                    containerStyle={ styles.dropdownContainer }
                    theme="DARK"
                    open={openFilter}
                    onOpen={onFilterOpen}
                    value={filter}
                    items={filters}
                    setOpen={setOpenFilter}
                    setValue={setFilter}
                    onChangeValue={(filter) => {
                        getAnime(type, filter);
                        onChangeSearch("");
                    }}
                    setItems={setFilters}
                    showArrowIcon={ false }
                />
            </View>

        </View>
    );
};

export default ListView;