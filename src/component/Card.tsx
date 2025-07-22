// components/MovieCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTypedNavigation } from '../hook/useTypedNavigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigation';
import { useNavigation } from '@react-navigation/native';
import { imageMap } from '../../json/ImageMap';

const { width, height } = Dimensions.get('window')

interface Props {
    item: any,
    index: number;
}
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'DetailsScreen'>;

export default function Card({ item, index }: Props) {
    const navigation = useNavigation<NavigationProp>();
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetailsScreen', { item })} key={index}>
            <Image source={imageMap[item.img_url]} style={styles.image} />
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.Year}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: wp('5%'),
        marginLeft: wp('3%')
    },
    image: {
        width: width * 0.33,
        height: height * 0.25,
        borderRadius: wp('4%'),
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: hp('1.5%'),
        fontSize: hp('1.8%'),
        paddingLeft: wp('1%')
    },
    subtitle: {
        color: '#aaa',
        fontSize: hp('1.5%'),
        paddingLeft: wp('1%'),
    },
    rating: {
        color: "yellow",
        alignSelf: 'center',
        backgroundColor: '#359534',
        padding: wp('1%'),
        position: 'absolute',
        top: 0,
        right: 0,
        borderTopRightRadius: wp('2%'),
        borderBottomLeftRadius: wp('2%'),
    }
});
