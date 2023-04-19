import { View, Text, Image, Pressable } from "react-native";
import styles from './account_view_style';
import userData from '../../assets/mock/mock_user_data.json';

const AccountView = () => {
    return(
        <View style={ styles.container }>
            <Image
            style={ styles.profilePicture }
            source={require("../../assets/images/profile_pic.png")} />

            <View style={ styles.profileLine }></View>

            <View style={ styles.profileContent }>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.profileItem }>Username: </Text>
                    <Text style={ styles.profileText }>{ userData.username }</Text>
                </View>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.profileItem }>First Name: </Text>
                    <Text style={ styles.profileText }>{ userData.firstName }</Text>
                </View>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.profileItem }>Last Name: </Text>
                    <Text style={ styles.profileText }>{ userData.lastName }</Text>
                </View>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.profileItem }>Email: </Text>
                    <Text style={ styles.profileText }>{ userData.email }</Text>
                </View>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.profileItem }>Phone Number: </Text>
                    <Text style={ styles.profileText }>{userData.phone}</Text>
                </View>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.profileItem }>Favorite Anime: </Text>
                    <Text style={ styles.profileText }>{userData.favoriteAnime}</Text>
                </View>
                <View style={ styles.bioContainer }>
                    <Text style={ styles.bioTitle }>Bio </Text>
                    <Text style={ styles.bioContent }>{ userData.bio }</Text>
                </View>
            </View>

            <Pressable 
                onPress={ null }
                style={({ pressed }) => [
                    {
                      opacity: pressed
                        ? 0.3
                        : 1
                    },
                    styles.logoutButton
                  ]}>
                    <Text style={ styles.logoutButtonText }>Logout</Text>
            </Pressable>
        </View>
    )
}

export default AccountView;