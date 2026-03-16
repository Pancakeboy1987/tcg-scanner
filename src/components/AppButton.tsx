import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// 1. Описываем требования к данным
interface AppButtonProps {
  title: string;
  onPress: () => void;
}

// 2. Создаем компонент. 
// AppButton — это функциональный компонент (React.FC), 
// который работает по правилам AppButtonProps
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
    backgroundColor: '#0078d0',
    borderRadius: 56,
    // padding: 16px 21px
    paddingVertical: 16,
    paddingHorizontal: 21,
    
    // Эквивалент display: inline-block (кнопка не на всю ширину)
    alignSelf: 'center',
    
    // Позиционирование
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFCB8',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    textDecorationLine: 'none',
  },
});

export default AppButton;