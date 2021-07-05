import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";


const Comment = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: 30, flexDirection:"row",marginTop:10,}}>
                <Icon style={{ marginHorizontal: 10 }} name="heart-o" size={30} color="black" />
                <Feather style={{ marginHorizontal: 10 }} name="message-circle" size={30} color="black" />
                <Feather style={{ marginHorizontal: 10 }} name="send" size={30} color="black" />
                <Icon style={{ left:210}} name="bookmark-o" size={30} color="black" />
            </View>
            <View style={{ height: 30, flexDirection:"column", }}>
                <Text style={styles.username}>405 Beğenme</Text>
                <View style={{flexDirection:"row" }}>
                    <Text style={styles.username}>dolorsitamet</Text>
                    <Text style={styles.comment}>Lorem ipsum dolor sit amet, consectetur </Text>
                </View>
                <Text style={styles.comment}>76 yorumun tümünü gör </Text>
                <View style={{flexDirection:"row",alignItems: "center"}}>
                    <TouchableHighlight
                  style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:0, marginLeft:10 }]}>
                   <Image source={{ uri:"https://picsum.photos/200/300" }} style={styles.StoryImage} />
                </TouchableHighlight>
                <Text style={styles.comment}>Yorum ekle... </Text>
                </View>
                <Text style={styles.comment}>33 dakika önce</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 260,
        flexDirection: "column",
    },
    username: {
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 8,
        color: "black",
        marginVertical: 1,
    },
    comment: {
        fontSize: 14,
        fontWeight: "800",
        color: "black",
        marginVertical: 1,
        marginHorizontal:8,
    },
    StoryImage: {
    height: 30,
    width: 30,
    borderRadius: 70,
    },
    profileImgContainer: {
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: "red"
    },

});


export default Comment;