import React , { Component } from 'react';
import { Text, View } from 'react-native';
import Header from "./src/components/Header";
import Story from "./src/components/Story";
import Username from "./src/components/Username";
import Timeline from "./src/components/Timeline";
import Comment from "./src/components/Comment";
import Buttons from "./src/components/Buttons";



const App = () => {
  
   
     return (
          <View>
               <Header />
               <Story />
               <Username />
               <Timeline />
               <Comment />
               <Buttons/>
          </View>
     )
};



    
 



export default App;