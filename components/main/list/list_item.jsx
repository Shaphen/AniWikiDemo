import React from "react";
import { 
    Text, 
    Pressable, 
    Image } from 'react-native';
import { convertDate } from '../../assets/js/tools';
import styles from "./list_style.js";
import { NavigationContext } from '@react-navigation/native';

const ListItem = (props) => {
    const item = props.item;
    const navigation = React.useContext(NavigationContext);

    redirectMoreInfo = () => {
        navigation.navigate('ItemInfo', { item: props.item });
    }

    return (
        <Pressable 
            style={ styles.listContainer }
            onPress={ redirectMoreInfo }>
            <Image 
                source={{ uri: item.images.jpg.image_url }}
                style={ styles.animeImage } />
            <Text style={ styles.animeDesc }>
                { "\n" }
                <Text style={ styles.animeTitle }>Title{ "\n" }</Text>
                <Text style={ styles.animeText }>{ item.title_english ? item.title_english : item.title }{ "\n\n" }</Text>
                <Text style={ styles.animeTitle }>Rank{ "\n" }</Text>
                {
                    item.rank ? (
                        <Text style={ styles.animeText }>{ item.rank }{ "\n\n" }</Text>
                    ) : (
                        <Text style={ styles.animeText }>N/A{ "\n\n" }</Text>
                    )
                }
                <Text style={ styles.animeTitle }>Start Date{ "\n" }</Text>
                <Text style={ styles.animeText }>
                    { item.aired.from ?
                    convertDate(
                        item.aired.prop.from.month, 
                        item.aired.prop.from.day, 
                        item.aired.prop.from.year
                    ) : "TBA" } { "\n\n" }
                </Text>
                <Text style={ styles.animeTitle }>End Date{ "\n" }</Text>
                <Text style={ styles.animeText }>
                    { item.aired.to ?
                    convertDate(
                        item.aired.prop.to.month, 
                        item.aired.prop.to.day, 
                        item.aired.prop.to.year
                    ) : "TBA" } { "\n\n" }
                </Text>
            </Text>
        </Pressable>
    )
}

export default ListItem;