import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import ListView from './main/list/list_view';
import AccountView from "./main/account/account_view";
import SavedView from "./main/saved/saved_items_view"
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./App_style";

const homeIcon = <IconE name="home" size={ 26 } />;
const bookmarkIcon = <IconE name="bookmark" size={ 28 } />;
const accountIcon = <IconA name="account" size={ 28 } />;

const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName="List"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={ styles.barStyle }>
        <Tab.Screen name="List" component={ ListView } options = {() => 
          ({tabBarIcon: () => homeIcon})} />
        <Tab.Screen name="Saved" component={ SavedView } options = {() => 
          ({tabBarIcon: () => bookmarkIcon})} />
        <Tab.Screen name="Account" component={ AccountView } options = {() => 
          ({tabBarIcon: () => accountIcon})} />
      </Tab.Navigator>
    );
}

export default Home;