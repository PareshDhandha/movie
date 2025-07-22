
import React from 'react'
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hook/StateHook'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { removeFromFavourite } from '../store/slice/FavouriteSlice'
import { imageMap } from '../../json/ImageMap'

const { width, height } = Dimensions.get('window')

const FavouritesScreen = ({ navigation }: any) => {
    const favourites = useAppSelector(state => state.favourites)
    const dispatch = useAppDispatch()
    console.log('favourites...', favourites)

    const handleRemove = (id: string) => {
        dispatch(removeFromFavourite(id))
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <FlatList
                data={favourites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { item })}>
                        <View style={styles.card}>
                            {/* <Image source={require(item.img_url)} style={styles.poster} /> */}
                            <Image source={imageMap[item.img_url]}
                                style={styles.poster}
                            />
                            <View>
                                <Text style={styles.title}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <Text style={styles.genre}>{item.genre[0]}</Text>
                                    <Text style={styles.genre}>{item.genre[1]}</Text>
                                </View>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                            <TouchableOpacity onPress={() => handleRemove(item.id)}>
                                <Image source={require('../images/heart_fill.png')}
                                    style={{ width: wp('5%'), height: hp('3%'), resizeMode: 'contain', marginTop: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: wp('2%'),
        backgroundColor: '#ccc',
        borderRadius: wp('3%'),
        overflow: 'hidden',
        flexDirection: 'row'
    },
    poster: {
        width: width * 0.20,
        height: height * 0.13,
        resizeMode: 'contain',
        margin: wp('2%'),
        borderRadius: wp('4%')
    },
    title: {
        fontSize: hp('2.5%'),
        paddingTop: wp('1%'),
        fontWeight: '600',
    },
    genre: {
        fontSize: hp('1.8%'),
    },
    description: {
        fontSize: hp('1.5%'),
        width: 250
    }
})

export default FavouritesScreen
