import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//Posición Relativa
export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ffff',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#8000ff',
    borderWidth: 10,
    borderColor: '#ffffff',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#ff8000',
    borderWidth: 10,
    borderColor: '#ffffff',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cajaVerde: {
    //width: 100,
    //height: 100,
    backgroundColor: '#008000',
    borderWidth: 10,
    borderColor: '#ffffff',
    //position: 'absolute',
    //left: 0,
    //bottom: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
