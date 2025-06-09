import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function Login({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateAndLogin = () => {
  // Verifica que ambos campos estén llenos
  if (!email || !password) {
    Alert.alert('Error', 'Todos los campos son obligatorios');
    return;
  }

  // Valida el formato del correo
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    Alert.alert('Error', 'Correo no válido');
    return;
  }

  // Valida credenciales exactas
  if (email !== 'williamsaavedra@gmail.com' || password !== 'william2025') {
    Alert.alert('Error', 'Credenciales incorrectas');
    return;
  }

  // Si todo está correcto, navega a Home
  navigation.navigate('Home');
};



  return (
    <View style={styles.container}>
     <Image source={require('../assets/bus.jpeg')} style={styles.image} />
      <Text style={styles.title}>Bienvenido a Rutas Bus</Text>
      <CustomInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton title="Iniciar Sesión" onPress={validateAndLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});