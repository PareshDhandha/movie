import { FlatList, StyleSheet, } from 'react-native'
import React from 'react'
import movie from '../../json/movie.json'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Card from './Card'

const MovieCard = () => {
    return (
        <FlatList
            data={movie}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }: any) => <Card item={item} index={index} />}
        >
        </FlatList>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    cardDetails: {
        borderWidth: wp('2%'),
        borderColor: '#fff',
        marginHorizontal: wp('2%'),
        width: wp('50%'),
    },
    image: {
        width: wp('40%'),
        height: hp('30%'),
        borderRadius: wp('6%'),
        marginBottom: hp('1%'),
        resizeMode: 'contain'
    }
})


