import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {styles} from "../styles/ScannerStyles"

// 2. ОПИСЫВАЕМ ТИПЫ НАШИХ ЭКРАНОВ 
export type RootTabParamList = {
  Home: undefined;
  Collection: undefined;
  Settings: undefined;
  Scanner: undefined; // Наш скрытый экран сканера
};


type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

const CollectionScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваша коллекция</Text>
      
      {/* Кнопка перехода на экран сканера */}

    </View>
  );
};



export default CollectionScreen;