import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

// TS: Мы создаем "тип" для списка экранов. 
// В JS ты бы просто создал навигатор без этой проверки.
// undefined означает, что при переходе на этот экран параметры передавать не нужно.
export type RootStackParamList = {
  Home: undefined;
  Scanner: undefined;
  Details: { cardId: string }; // Тут мы говорим: на экран Details нужно передать ID карты.
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'PokeScanner' }} 
        />
        {/* Экран сканера ты добавишь чуть позже сам */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;