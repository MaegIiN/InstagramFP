import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";





const Story = () => {

    return (
        <View style={styles.container}>
            <View style={{ height: 100, flexDirection: "row", alignItems: "center" }}>
                
                <TouchableHighlight
                  style={[styles.profileImgContainer, {borderColor: 'green', borderWidth:0, marginLeft:10 }]}>
                    <Image source={{ uri: "https://picsum.photos/200/300" }} style={styles.StoryImage} />
                </TouchableHighlight>
                <Icon style={styles.plusIcon} name="plus-circle" size={30} color="#39A2DB"/>
                <TouchableHighlight
                  style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:3, marginLeft:10 }]}>
                   <Image source={{ uri:"https://i.picsum.photos/id/71/200/300.jpg?hmac=gynXVv0pTO33farflQTb9mpn-A6N5nt8t0_r9DEDNKU" }} style={styles.StoryImage} />
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:3, marginLeft:10 }]}>
                   <Image source={{ uri:"https://i.picsum.photos/id/660/200/300.jpg?hmac=j7s3I-0KukW6B1Vt4AJzCYxM8kbZz5kTMOEl9Y7zUOg" }} style={styles.StoryImage} />
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:3, marginLeft:10 }]}>
                   <Image source={{ uri:"https://i.picsum.photos/id/908/200/300.jpg?hmac=guEHon4cM5wVkD_yaCyg37gD09iEjrpqzKfo-YU-Iwc" }} style={styles.StoryImage} />
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:3, marginLeft:10 }]}>
                   <Image source={{ uri:"https://i.picsum.photos/id/827/200/300.jpg?hmac=0Q7y5JGXuxSXgO7VUvdNhXC4yoAupOJiKmRS9RoPqs8" }} style={styles.StoryImage} />
                </TouchableHighlight>
            </View>
            <View style={[styles.username],{height: 50, flexDirection: "row", }}>
                <Text style={styles.username}>Loremipsum</Text>
                <Text style={styles.username}>dolorsitamet</Text>
                <Text style={styles.username}>consectetu</Text>
                <Text style={styles.username}>Maecenasut</Text>
                <Text style={styles.username}>rhoncus</Text>

            </View>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
    flex: 1,
    paddingTop: 50,
        flexDirection: "column",
    
    
    },
    StoryImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    },
    profileImgContainer: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: "red"
    },
    plusIcon: {
        position: "absolute",
        elevation: 1,
        left: 60,
        top: 60,
    },
    username: {
        fontSize: 12,
        fontWeight: "200",
        marginHorizontal: 10,
        paddingLeft : 5
        
        
    }
  
});

export default Story;