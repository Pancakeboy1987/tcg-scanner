import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppNavigation} from './src/navigation/AppNavigation';

// TS: Компонент остается функциональным
const App: React.FC = () => {
  return (
    // SafeAreaProvider заменяет SafeAreaView на верхнем уровне
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;

