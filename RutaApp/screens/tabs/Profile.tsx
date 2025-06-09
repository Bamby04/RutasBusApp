import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutas de Buses Cercanas</Text>
      <Text>Ruta 1 - ₡350</Text>
      <Text>Ruta 2 - ₡400</Text>
      <Text>Ruta 3 - ₡300</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});