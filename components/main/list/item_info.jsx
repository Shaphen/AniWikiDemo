import React, { useState } from 'react'
import { View, ScrollView, Text, Image, Pressable, Linking } from 'react-native';
import IconE from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/AntDesign';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from "./item_info_style";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ItemInfo = ({ navigation, route }) => {
    const [saved, setSaved] = useState(false);
    const nav = navigation;
    const anime = route.params.item;
    const homeIcon = <IconE style={ styles.backButton } name="ios-arrow-back" size={ 32 } />;
    const starIcon = <IconA style={ saved ? styles.savedColor : styles.backButton } name="star" size={ 25 } />;

    storeData = async (key, item) => {
        try {
            await AsyncStorage.setItem(key, String(item));
        } catch (error) {
            console.log(error);
        }
    };

    saveAnime = () => {
        storeData(anime.title_english, anime)

        const toggled = !saved;
        setSaved(toggled);
    }

    const genresAndThemes = anime.genres.concat(anime.themes);

    return (
        <View style={ styles.container }>
            <Pressable 
                style={ styles.backButtonContainer } 
                onPress={() => nav.goBack()} >
                    { homeIcon }
            </Pressable>
            <View style={ styles.backgroundContainer }>
                <Image 
                    source={{ uri: anime.images.jpg.large_image_url }}
                    style={ styles.animeImage } />
            </View>
            <ScrollView overScrollMode="never" style={ styles.infoContainer }>
                <Pressable 
                    style={ styles.saveButton } 
                    onPress={ saveAnime } >
                        { starIcon }
                </Pressable>
                <Text style={ styles.title }>{ anime.title_english }</Text>
                <Text style={ styles.title2 }>({ anime.title_japanese })</Text>

                <View style={ styles.splitContainer }>
                    <View style={ styles.split }>
                        <Text style={ styles.splitTitle }>Episodes</Text>
                        {
                            anime.episodes ? (
                                <Text style={ styles.splitValue }>{ anime.episodes }</Text>
                            ) : (
                                <Text style={ styles.splitValue }>TBD</Text>
                            )
                        }
                    </View>
                    <View style={ styles.split }>
                        <Text style={ styles.splitTitle }>Studio</Text>
                        <View style={ styles.genreContainer }>
                            {
                                anime.studios.length ? (
                                    anime.studios.map(studio => {
                                        return (
                                            <Text 
                                                key={ studio.mal_id } 
                                                style={ styles.splitValue }
                                            >
                                                { studio.name }
                                            </Text>
                                        )
                                    })
                                ) : (
                                    <Text style={ styles.splitValue }>TBD</Text>
                                )
                            }
                        </View>
                    </View>
                </View>

                <View style={ styles.splitContainer }>
                    <View style={ styles.split }>
                        <Text style={ styles.splitTitle }>Rating</Text>
                        {
                            anime.rating ? (
                                <Text style={ styles.splitValue }>{ anime.rating }</Text>
                            ) : (
                                <Text style={ styles.splitValue }>N/A</Text>
                            )
                        }
                    </View>
                    <View style={ styles.split }>
                        <Text style={ styles.splitTitle }>Type</Text>
                        {
                            anime.type ? (
                                <Text style={ styles.splitValue }>{ anime.type }</Text>
                            ) : (
                                <Text style={ styles.splitValue }>N/A</Text>
                            )
                        }
                    </View>
                </View>

                <Text style={ styles.genreTitle }>Genres</Text>
                <View style={ styles.genreContainer }>
                    {
                        genresAndThemes.length ? (
                            genresAndThemes.map(gat => {
                                return (
                                    <Text 
                                        key={ gat.mal_id } 
                                        style={ styles.genre } >{ gat.name }
                                    </Text>
                                )
                            })
                            ) : (
                            <Text style={ styles.splitValue }>N/A</Text>
                        )
                    }
                </View>

                {
                    anime.trailer.youtube_id ? (
                        <View style={ styles.trailer }>
                            <YoutubePlayer
                                height={ 230 }
                                play={ false }
                                volume={ 100 }
                                videoId={ anime.trailer.youtube_id }
                                webViewStyle={{opacity: 0.99}}
                                resumePlayAndroid={false}
                            />
                        </View>
                    ) : (
                        <Text style={ styles.noTrailer }>[ No Trailer Available ]</Text>
                    )
                }

                <Text style={ styles.subTitle }>Synopsis</Text>
                <Text style={ styles.description }>{ anime.synopsis }</Text>

                <Text style={ styles.subTitle }>Background</Text>
                { 
                    anime.background ? (
                        <Text style={ styles.description }>{ anime.background }</Text>
                    ) : (
                        <Text style={ styles.description }>No Background Available</Text>
                    )
                }

                <Text style={ styles.subTitle }>Find more Info in MyAnimeList</Text>
                <Text style={ styles.infoLink }
                    onPress={ () => { Linking.openURL(anime.url) }}>
                    { anime.url }
                </Text>
            </ScrollView>
        </View>
    )
};

export default ItemInfo;