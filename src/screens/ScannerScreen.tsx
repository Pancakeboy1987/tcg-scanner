import React, { useEffect, useState, useRef } from 'react'; // Добавили useRef
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native';
import { Camera, useCameraDevice, CameraPermissionStatus } from 'react-native-vision-camera';
import { styles } from '../styles/ScannerStyles';
import AppButton from '../components/AppButton'; // Импортируем твою кнопку

const ScannerScreen: React.FC = () => {
  const [permissionStatus, setPermissionStatus] = useState<CameraPermissionStatus>('not-determined');
  const device = useCameraDevice('back');
  
  // 1. Создаем ссылку на камеру
  const camera = useRef<Camera>(null);

  useEffect(() => {
    const checkPermission = async () => {
      const status = await Camera.requestCameraPermission();
      setPermissionStatus(status);
    };
    checkPermission();
  }, []);

  // 2. Функция для совершения снимка
  const takePhoto = async () => {
    try {
      if (camera.current == null) throw new Error('Камера еще не готова');
      
      console.log('Делаю снимок...');
      const photo = await camera.current.takePhoto({
        flash: 'off', // Можно включить 'on', если темно
      });

      // photo.path — это путь к временному файлу на диске телефона
      console.log('Снимок сохранен по пути:', photo.path);
      
      Alert.alert('Успех', 'Снимок сделан! Путь: ' + photo.path);
      
      // Здесь в будущем будет логика отправки файла на Python-сервер
    } catch (e) {
      console.error('Ошибка при создании снимка:', e);
    }
  };

  if (permissionStatus !== 'granted') {
    return (
      <View style={styles.center}>
        <Text style={{color: 'white'}}>Ожидание разрешения...</Text>
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FFCB05" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera} // 3. Привязываем ссылку к компоненту
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      
      <View style={styles.overlay}>
        <View style={styles.targetFrame} />
        <Text style={styles.hint}>Поместите карту в рамку</Text>
      </View>

      
      <View style={styles.captureButtonContainer}>
        <AppButton 
          title="СКАНИРОВАТЬ КАРТУ" 
          onPress={takePhoto} 
        />
      </View>
    </View>
  );
};

export default ScannerScreen;