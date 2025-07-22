import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

// const Card = ({ item, index }: any) => {
//     console.log('data....', item)
//     return (
//         <TouchableOpacity>
//             <View style={styles.cardDetails}>
//                 <Image
//                     source={require('../images/loveryrunner.jpeg')}
//                     style={styles.image}

//                 />
//                 <Text style={{ color: "#fff" }}>{item.name}</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

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
        // marginLeft: wp('2%'),
        marginBottom: hp('1%'),
        resizeMode: 'contain'
    }
})


// export default function App() {
//     return (
//         <ScrollView style={styles.container}>
//             <StatusBar barStyle="light-content" />

//             <Text style={styles.heading}>Featured</Text>

//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 {featuredShows.map((show, index) => (
//                     <ImageBackground
//                         key={index}
//                         source={{ uri: show.image }}
//                         style={styles.card}
//                         imageStyle={{ borderRadius: 20 }}
//                     >

//                         <View style={styles.cardHeader}>
//                             <Text style={styles.brand}>slothui original</Text>
//                             <Ionicons name="person-circle" size={26} color="#fff" />
//                         </View>

//                         <View style={styles.cardContent}>
//                             <View style={styles.tags}>
//                                 {show.tags.map((tag, i) => (
//                                     <View key={i} style={styles.tag}>
//                                         <Text style={styles.tagText}>{tag}</Text>
//                                     </View>
//                                 ))}
//                             </View>

//                             <Text style={styles.title}>{show.title}</Text>
//                             <Text style={styles.subtitle}>{show.episode}</Text>

//                             <View style={styles.buttons}>
//                                 <TouchableOpacity style={styles.playButton}>
//                                     <Ionicons name="play" size={16} color="#fff" />
//                                     <Text style={styles.playText}>Play S1 E1</Text>
//                                 </TouchableOpacity>

//                                 <TouchableOpacity style={styles.detailButton}>
//                                     <Text style={styles.detailText}>Details</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </ImageBackground>
//                 ))}
//             </ScrollView>

//             <Text style={styles.heading}>All Episodes</Text>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#0a0a0a',
//         paddingTop: 40,
//         paddingHorizontal: 16,
//     },
//     heading: {
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 12,
//         marginTop: 20,
//     },
//     card: {
//         width: 280,
//         height: 460,
//         marginRight: 16,
//         borderRadius: 20,
//         overflow: 'hidden',
//         justifyContent: 'space-between',
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     cardHeader: {
//         marginTop: 16,
//         paddingHorizontal: 16,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     brand: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 12,
//         backgroundColor: '#5a3ef3',
//         paddingHorizontal: 10,
//         paddingVertical: 4,
//         borderRadius: 8,
//     },
//     cardContent: {
//         padding: 16,
//     },
//     tags: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         gap: 8,
//         marginBottom: 6,
//     },
//     tag: {
//         backgroundColor: 'rgba(255,255,255,0.2)',
//         paddingHorizontal: 10,
//         paddingVertical: 3,
//         borderRadius: 15,
//         marginRight: 6,
//         marginBottom: 6,
//     },
//     tagText: {
//         color: '#fff',
//         fontSize: 12,
//     },
//     title: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 4,
//     },
//     subtitle: {
//         color: '#ccc',
//         fontSize: 13,
//         marginBottom: 10,
//     },
//     buttons: {
//         flexDirection: 'row',
//         gap: 10,
//         marginTop: 10,
//     },
//     playButton: {
//         backgroundColor: '#5a3ef3',
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 14,
//         paddingVertical: 8,
//         borderRadius: 20,
//         gap: 6,
//     },
//     playText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 14,
//     },
//     detailButton: {
//         borderColor: '#fff',
//         borderWidth: 1,
//         paddingHorizontal: 14,
//         paddingVertical: 8,
//         borderRadius: 20,
//     },
//     detailText: {
//         color: '#fff',
//         fontSize: 14,
//     },

// });
