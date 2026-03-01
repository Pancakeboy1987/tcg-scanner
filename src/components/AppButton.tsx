import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// 1. Описываем требования к данным
interface AppButtonProps {
  title: string;
  onPress: () => void;
}

// 2. Создаем компонент. 
// Мы говорим: "AppButton — это функциональный компонент (React.FC), 
// который работает по правилам AppButtonProps"
const AppButton: React.FC<AppButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// 3. Стили (тут всё как в JS)
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3B4CCA', // Цвет покебола (синий)
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#FFCB05', // Желтый цвет логотипа Pokemon
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default AppButton;