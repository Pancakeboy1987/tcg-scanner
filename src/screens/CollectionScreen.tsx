import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import {styles} from '../styles/CollectionStyles'

// Временно создадим фейковые данные (позже они будут приходить из базы данных)
const MOCK_CARDS =[
  { id: '1', name: 'Pikachu VMAX', imageUrl: 'https://images.pokemontcg.io/swsh4/44_hires.png' },
  { id: '2', name: 'Charizard', imageUrl: 'https://images.pokemontcg.io/base1/4_hires.png' },
  { id: '3', name: 'Mewtwo', imageUrl: 'https://images.pokemontcg.io/base1/10_hires.png' },
  { id: '4', name: 'Gengar', imageUrl: 'https://images.pokemontcg.io/fossil/20_hires.png' },
  { id: '5', name: 'Blastoise', imageUrl: 'https://images.pokemontcg.io/base1/2_hires.png' },
  { id: '6', name: 'Venusaur', imageUrl: 'https://images.pokemontcg.io/base1/15_hires.png' },
  { id: '7', name: 'Blastoise', imageUrl: 'https://images.pokemontcg.io/base1/2_hires.png' },
  { id: '8', name: 'Venusaur', imageUrl: 'https://images.pokemontcg.io/base1/15_hires.png' },
  { id: '9', name: 'Blastoise', imageUrl: 'https://images.pokemontcg.io/base1/2_hires.png' },
  { id: '10', name: 'Venusaur', imageUrl: 'https://images.pokemontcg.io/base1/15_hires.png' },
];

// Типизируем пропсы для отдельной карточки
interface CardItemProps {
  name: string;
  imageUrl: string;
}

// Компонент одной карточки (отвечает за 2/3 картинки и 1/3 текста)
const CardItem: React.FC<CardItemProps> = ({ name, imageUrl }) => (
  <View style={styles.cardContainer}>
    {/* Верхние 2/3 (flex: 2) — Картинка */}
    <View style={styles.imageContainer}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
        resizeMode="contain" // Картинка помещается целиком, не обрезаясь
      />
    </View>

    {/* Нижняя 1/3 (flex: 1) — Текст */}
    <View style={styles.textContainer}>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {name}
      </Text>
    </View>
  </View>
);

const CollectionScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Моя коллекция</Text>

      <FlatList
        data={MOCK_CARDS} // Передаем массив данных
        keyExtractor={(item) => item.id} // Уникальный ключ для каждого элемента
        numColumns={2} // ВОТ ОНА МАГИЯ СЕТКИ! 2 колонки.
        
        // renderItem объясняет FlatList-у, как рисовать каждый объект из массива

        renderItem={({ item }) => (
          <CardItem name={item.name} imageUrl={item.imageUrl} />
        )}
        
        // Стили для самого списка
        columnWrapperStyle={styles.row} // Расстояние между колонками
        showsVerticalScrollIndicator={false} // Прячем полосу прокрутки для красоты
        
        // ВАЖНО: Добавляем отступ снизу, чтобы наше плавающее нижнее меню 
        // не перекрывало последние карточки в списке!
        contentContainerStyle={{ paddingBottom: 100 }} 
      />
    </View>
  );
};

// --- СТИЛИ ---
// Вычисляем ширину экрана, чтобы карточки занимали ровно половину минус отступы
const { width } = Dimensions.get('window');


export default CollectionScreen;