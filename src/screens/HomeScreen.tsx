import { ScrollView, StatusBar, StyleSheet, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Search from '../component/Search'
import MovieCard from '../component/MovieCard'

const HomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: hp('5%') }}
    >
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.header}>
        What would you
      </Text>
      <Text
        style={[
          styles.header, {
            paddingHorizontal: wp('4%'),
            marginTop: 0
          }
        ]}>
        like to watch?
      </Text>
      <Search />

      <Text style={styles.movieHeader}>
        Highest Rated Today
      </Text>
      <MovieCard />
      <Text style={styles.movieHeader}>
        New
      </Text>
      <MovieCard />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)'
  },
  header: {
    color: 'white',
    fontSize: hp('4.3%'),
    fontWeight: 'bold',
    marginTop: hp('5%'),
    paddingHorizontal: wp('8%'),
    textAlign: 'center'
  },
  movieHeader: {
    color: 'white',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    marginTop: hp('4%'),
    paddingHorizontal: wp('5%'),
  }
})