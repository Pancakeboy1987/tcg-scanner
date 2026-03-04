import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'black' 
  },
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetFrame: {
    width: 280,
    height: 390,
    borderWidth: 3,
    borderColor: '#FFCB05', // Тот самый желтый цвет Покемонов
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  hint: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  // ТОТ САМЫЙ ОТСУТСТВУЮЩИЙ СТИЛЬ:
  captureButtonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});