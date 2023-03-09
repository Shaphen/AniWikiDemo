import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemInfo from './main/list/item_info';
import Home from './Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ Home }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ItemInfo"
            component={ ItemInfo }
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
