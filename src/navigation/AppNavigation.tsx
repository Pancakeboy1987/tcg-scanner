import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import CollectionScreen from '../screens/CollectionScreen';



const ProfileScreen = () => <View style={styles.center}><Text>Профиль</Text></View>;
const SettingsScreen = () => <View style={styles.center}><Text>Настройки</Text></View>;
// ----------------------------------------------------------------------

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Скрываем верхние заголовки
          tabBarShowLabel: false,
          
          
          tabBarStyle: {
            alignItems:'center',
            justifyContent:'center',
            position: 'absolute',
            bottom: 25, 
            left: 50,   
            right: 50,  // Отступ справа
            height: 70, // Высота меню
            backgroundColor: '#3A409C',
            borderRadius: 35, // Делает меню полукруглым по бокам
            borderTopWidth: 0, // Убираем стандартную серую полосу сверху
            
            // Тени для iOS
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 9,
            // Тени для Android
            elevation: 7,
          },

          // Логика переключения иконок
          tabBarIcon: ({ focused, color }) => {
            let iconName = '';
            
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Collection') iconName = focused ? 'albums' : 'albums-outline';
            else if (route.name === 'Profile') iconName = focused ? 'albums' : 'albums-outline';
            else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';

            return <Icon name={iconName} size={28} color={color} />;
          },
          tabBarActiveTintColor: '#FFCB05', 
          tabBarInactiveTintColor: '#a1a1aa',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Collection" component={CollectionScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen 
          name="Scanner" 
          component={ScannerScreen} 
          options={{
            // Скрываем само меню на экране сканера, чтобы оно не мешало камере
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null, // Прячем иконку из нижнего бара
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});