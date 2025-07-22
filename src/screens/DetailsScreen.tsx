import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTypedNavigation } from '../hook/useTypedNavigation';
import { addToFavourite, removeFromFavourite } from '../store/slice/FavouriteSlice';
import { useAppDispatch, useAppSelector } from '../hook/StateHook';
import { imageMap } from '../../json/ImageMap';

const { width, height } = Dimensions.get('window');

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;

const DetailsScreen = ({ route }: DetailsScreenProps) => {

    const navigation = useTypedNavigation();
    const { item } = route.params;
    const dispatch = useAppDispatch();
    const favourite = useAppSelector(state => state.favourites);
    const isFavourite = favourite.some(fav => fav.id === item.id);

    const toggleFavourite = () => {
        if (isFavourite) {
            dispatch(removeFromFavourite(item.id));
        } else {
            dispatch(addToFavourite(item));
        }
    }
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ImageBackground
                source={imageMap[item.img_url]}
                style={styles.imageBackground}

            >
                <View style={styles.headerSection}>
                    <TouchableOpacity style={styles.headerButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../images/back.png')}
                            style={styles.headerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerButton} onPress={toggleFavourite}>
                        <Image source={isFavourite ? require('../images/heart_fill.png') : require('../images/heart.png')}
                            style={styles.headerIcon} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.year}>{item.Year}</Text>
            <View style={styles.genreSection}>
                <Text style={styles.genre}>{item.genre[0]}</Text>
                <Text style={styles.genre}>{item.genre[1]}</Text>
            </View>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.genre}>{item.description}</Text>
        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // paddingTop: StatusBar.currentHeight ?,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: wp('5%'),
        marginTop:hp('5%')
    },
    headerButton: {
        backgroundColor: '#ccc',
        width: wp('10%'),
        height: hp('5%'),
        borderRadius: wp('10%'),
        alignItems: 'center'
    },
    headerIcon: {
        width: wp('5%'),
        height: hp('5%'),
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        fontSize: hp('3.5%'),
        fontWeight: '600',
        paddingHorizontal: wp('2%'),
        marginTop: hp('2%')
    },
    year: {
        fontSize: hp('1.7%'),
        color: '#ccc',
        paddingLeft: wp('3%')
    },
    genreSection: {
        flexDirection: 'row',
    },
    genre: {
        color: '#ccc',
        fontSize: hp('2%'),
        paddingHorizontal: wp('2%'),
        marginTop: hp('1%'),
    },
    description: {
        color: '#fff',
        fontSize: hp('2.5%'),
        fontWeight: '600',
        marginTop: hp('2%'),
        paddingLeft: wp('2%')
    },
    imageBackground: {
        // flex: 1,
        width: width,
        height: height * 0.50,
        resizeMode: 'contain',
        // paddingTop: StatusBar.currentHeight || 40
    },

})
