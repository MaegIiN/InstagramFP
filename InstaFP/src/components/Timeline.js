import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";



const Timeline = () => {
    return (
        <View style={styles.container} >
            <View style={{height:260}}>
                <Image style={{flex:1}} source={{ uri:"https://i.picsum.photos/id/184/500/400.jpg?hmac=I7lIxBKbewxZe_4euIMfmLyc88UCIguuEa42COSKD5A" }} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
   container: {
    flex: 1,
        paddingTop: 60,
    flexDirection : "column",
    },
    
});


export default Timeline;