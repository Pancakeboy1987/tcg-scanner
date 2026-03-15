import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BlurView } from "@react-native-community/blur";
import {styles} from "../styles/ScannerStyles"
import AppButton from '../components/AppButton';

// 2. ОПИСЫВАЕМ ТИПЫ НАШИХ ЭКРАНОВ 
export type RootTabParamList = {
  Home: undefined;
  Collection: undefined;
  Settings: undefined;
  Scanner: undefined; // Наш скрытый экран сканера
};


type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Готовы найти карту?</Text>
      <AppButton 
  title="НАЧАТЬ СКАНИРОВАНИЕ" 
  onPress={() => navigation.navigate('Scanner')}/>

    </View>
  );
};



export default HomeScreen;