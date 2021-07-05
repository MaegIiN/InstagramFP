import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";



const Username = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: 60, flexDirection: "row", alignItems: "center",  }}>
                <TouchableHighlight
                  style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:3, marginLeft:10 }]}>
                   <Image source={{ uri:"https://i.picsum.photos/id/71/200/300.jpg?hmac=gynXVv0pTO33farflQTb9mpn-A6N5nt8t0_r9DEDNKU" }} style={styles.StoryImage} />
                </TouchableHighlight>
                <Text style={styles.username}>dolorsitamet</Text>
            </View>
            <View>
               <Entypo style={{position: "absolute", right: 20,bottom: 15}} name="dots-three-horizontal" size={20}/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 120,
    flexDirection : "column",
    },
    StoryImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
    },
    profileImgContainer: {
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: "red"
    },
    username: {
        fontSize: 16,
        fontWeight: "800",
        marginHorizontal: 8,
        color:"black",
    }
    
    

});


export default Username;