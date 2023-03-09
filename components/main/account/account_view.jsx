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
                <Text style={ styles.profileText }>Username: {userData.username}</Text>
                <Text style={ styles.profileText }>First Name: {userData.firstName}</Text>
                <Text style={ styles.profileText }>Last Name: {userData.lastName}</Text>
                <Text style={ styles.profileText }>Bio: {userData.bio}</Text>
                <Text style={ styles.profileText }>Email: {userData.email}</Text>
                <Text style={ styles.profileText }>Phone Number: {userData.phone}</Text>
                <Text style={ styles.profileText }>Favorite Anime: {userData.favoriteAnime}</Text>
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