import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView } from 'react-native';
import Logo from "../images/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";




const Header = () => {
  return (
    <View style={styles.container}>
       <View style={{height:50, flexDirection: "row" }}>
        <Image style={styles.logo} source={Logo} />
        <View style={styles.icons}>
          <Icon style={{marginHorizontal:10}} name="plus-square-o" size={30} color="black" />
          <Icon style={{marginHorizontal:10}} name="heart-o" size={30} color="black" />
          <Feather style={{marginHorizontal:10}} name="send" size={30} color="black" />
        </View>
       </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    
    flexDirection : "column",
    
  },
  icons: {
    flex: 1,
    height: 50,
    
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    
   },
  logo: {
    width: 150,
    height: 50,
    marginLeft : 10,
   }
});

export default Header;