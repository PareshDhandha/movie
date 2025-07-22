import { ImageSourcePropType, StyleSheet,} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import TabNavigation from './TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParamList = {
    MainTabs: undefined;
    DetailsScreen: {
        item: {
            name: string;
            id: string;
            img_url: ImageSourcePropType;
            rating: string;
            description: string;
            [key: string]: any;
            genre: string;
        };
    };
    SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainTabs' screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='MainTabs' component={TabNavigation} />
                <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
                <Stack.Screen name='SearchScreen' component={SearchScreen}
                    options={{
                        presentation: 'modal',
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})