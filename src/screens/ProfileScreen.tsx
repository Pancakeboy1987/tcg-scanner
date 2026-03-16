import React from 'react';
import  { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from "../styles/ProfileStyles"


const { width, height } = Dimensions.get('window');


const ProfileScreen = () => {


  return (
    <View style={styles.profilecontainer}>
      <Text style={styles.headerTitle}>Профиль</Text>
      <View style={styles.mainContainer}>
        <View style={styles.photoContainer}>
          <Image source={require('../assets/futaba.png')} style={{ width: 100, height: 100,borderRadius:45, borderColor:'black', borderWidth:0.4 }} />
        </View>
    
        <Text style={styles.title} >Futaba</Text>
        <View style={styles.recentContainer}>
          <Text style={styles.title} >Recent Cards</Text>
        </View>

        </View>

        


     

    </View>
  );
};



export default ProfileScreen;

