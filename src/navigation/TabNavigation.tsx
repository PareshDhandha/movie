import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourite from '../screens/Favourite';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#26282A",
                },
                tabBarActiveTintColor: "#fff",
                tabBarHideOnKeyboard: true,
                headerShown: false,
            }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../images/home.png')
                                    : require('../images/home.png')
                            }
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#007AFF' : '#999',
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Favourite'
                component={Favourite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../images/heart.png')
                                    : require('../images/heart.png')
                            }
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#007AFF' : '#999',
                            }}
                            resizeMode="contain"
                        />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})