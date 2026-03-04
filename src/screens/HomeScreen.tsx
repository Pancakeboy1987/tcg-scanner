import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

// TS: Описываем тип для навигации, чтобы IDE подсказывала нам названия экранов.
// В JS ты бы просто написал: const navigation = useNavigation();
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Готовы найти карту??</Text>
      
      {/* TouchableOpacity — это кнопка, которую можно стилизовать */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Scanner')} // Сюда добавим навигацию позже
      >
        <Text style={styles.buttonText}>Начать сканирование</Text>
      </TouchableOpacity>
    </View>
  );
};

// Стили одинаковы и для JS, и для TS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#ff4444',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;