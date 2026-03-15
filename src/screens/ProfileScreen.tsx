import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {styles} from "../styles/ProfileStyles"


const ProfileScreen = () => {
  

  return (
    <View style={styles.profilecontainer}>
      <Text style={styles.headerTitle}>Профиль</Text>
      <View style={styles.mainContainer}>
        <View style={styles.photoContainer}>
          <Image source={require('../assets/futaba.png')} style={{ width: 100, height: 100,borderRadius:45, borderColor:'black', borderWidth:0.4 }} />
        </View>
    
        <Text style={styles.title} >Futaba</Text>

      </View>

     

    </View>
  );
};



export default ProfileScreen;