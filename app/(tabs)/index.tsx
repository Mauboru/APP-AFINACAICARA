import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Linking } from 'react-native';

export default function SimpleScreen() {
  const [message, setMessage] = useState('Pressione o botão para iniciar a afinação!');

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>🎵 AFINADOR CAIÇARA 🎶</Text>
      <Text style={styles.message}>{message}</Text>
      <Button title="Iniciar Afinação" onPress={() => setMessage('Afinando...')} color="#00796B" />
      <View style={styles.footerContainer}>
        <Text style={styles.footer} onPress={() => Linking.openURL('https://josuashenrique.site')}>
          Desenvolvido por TecnoMaub
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004D40',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  footer: {
    fontSize: 14,
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
});
