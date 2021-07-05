import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



const Buttons = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: 30, flexDirection:"row",marginTop:10,  justifyContent: "space-between",alignItems: "center"}}>
                <Feather style={{ marginHorizontal: 20 }} name="home" size={30} color="black" />
                <Feather style={{ marginHorizontal: 20 }} name="search" size={30} color="black" />
                <Feather style={{ marginHorizontal: 20 }} name="video" size={30} color="black" />
                <Feather style={{ marginHorizontal: 20 }} name="shopping-bag" size={30} color="black" />
                <MaterialCommunityIcons style={{ marginHorizontal: 10 }} name="account-circle" size={30} color="black" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 170,
        flexDirection: "column",
        borderWidth: 0.6,
        borderColor: "#DDDDDD",
    
    
    },

});




export default Buttons;