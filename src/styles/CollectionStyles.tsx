import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width / 2) - 20; // 20 - это суммарные отступы с краев

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      paddingHorizontal: 10,
      paddingTop: 50, 
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      marginLeft: 10,
    },
    row: {
      justifyContent: 'space-between', // Распределяем 2 карточки по краям ряда
      marginBottom: 15, // Отступ между рядами
    },
    
    // Стили самой карточки
    cardContainer: {
      width: cardWidth,
      height: 240, // Фиксированная высота карточки
      backgroundColor: '#ffffff',
      borderRadius: 15,
      overflow: 'hidden', // Чтобы картинка не вылезала за закругленные углы
      
      // Тени
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 4,
    },
    
    // Блок картинки (2/3)
    imageContainer: {
      flex: 2, // Занимает 2 доли из 3
      backgroundColor: '#eaeaea', // Серый фон на случай долгой загрузки картинки
      padding: 10, // Небольшой отступ внутри, чтобы карта дышала
    },
    image: {
      width: '100%',
      height: '100%',
    },
    
    // Блок текста (1/3)
    textContainer: {
      flex: 1, // Занимает 1 долю из 3
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderColor: '#f0f0f0', // Тонкая линия разделения картинки и текста
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: '#333',
      textAlign: 'center',
    },
    profileCcntainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 10,
        paddingTop: 50, 
      },
  });