import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import movies from '../../json/movie.json';
import { imageMap } from '../../json/ImageMap';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');
export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const filtered = movies.filter((movie) =>
            movie.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [query]);

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.card}>
            <Image source={imageMap[item.img_url]} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.searchRow}>
                    <Image source={require('../images/search.png')}
                        style={{
                            width: width * 0.06, height: height * 0.028
                            , resizeMode: 'contain', position: 'absolute', left: 20, bottom: 21
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search Movies..."
                        value={query}
                        autoFocus
                        onChangeText={setQuery}
                    />
                    {/* {search.length > 0 && (
                        <TouchableOpacity onPress={() => setSearch('')}>
                            <Image source={require('../images/cross.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain',position:'absolute' }}
                            />
                        </TouchableOpacity>
                    )} */}
                </View>
                <FlatList
                    data={filteredMovies}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('4%'),
        backgroundColor: '#000',
    },
    input: {
        height: hp('6%'),
        borderColor: '#ccc',
        borderWidth: wp('0.25'),
        borderRadius: wp('8%'),
        paddingLeft: wp('10%'),
        marginBottom: hp('1%'),
        color: '#fff',
        flex: 1,
        width: '100%'
    },
    card: {
        alignItems: 'center',
        padding: wp('2%'),
        marginTop: hp('3%'),
    },
    image: {
        width: width * 0.40,
        height: height * 0.30,
        borderRadius: width * 0.03,
        marginRight: wp('2%'),
    },
    title: {
        fontSize: hp('2%'),
        color: '#fff',
        marginTop: hp('1%'),
        textAlign: 'center'
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    }
});
