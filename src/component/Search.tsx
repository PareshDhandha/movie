import { Image, StyleSheet,TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useTypedNavigation } from "../hook/useTypedNavigation";

const Search = () => {
    const navigatin = useTypedNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigatin.navigate('SearchScreen')}>
                <TextInput
                    style={styles.input}
                    placeholder="Search Movie"
                    placeholderTextColor={"lightgray"}
                    editable={false}
                />
                <View style={styles.icon}>
                    <Image
                        source={require('../images/search.png')}
                        style={styles.image}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        marginTop: hp('4%'),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    input: {
        width: wp('90%'),
        paddingTop: 10,
        marginHorizontal: wp('5%'),
        height: hp('6%'),
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: wp('7%'),
        color: 'white',
        paddingLeft: wp('5%'),
    },
    icon: {
        position: 'absolute',
        right: wp('10%'),
    },
    image: {
        width: wp('6%'),
        height: hp('6%'),
        resizeMode: 'contain',
    }
});