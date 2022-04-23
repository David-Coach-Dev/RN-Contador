import React from 'react';
import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';
//tamaño de pantalla
//const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.5,
          }}
        />
        <View style={styles.cajaNaranja} />
      </View>
      <View>
        <Text style={styles.title}>
          W:{width}, H:{height}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#ff0000',
  },
  cajaMorada: {
    width: '50%',
    height: '50%',
    backgroundColor: '#8000ff',
  },
  cajaNaranja: {
    backgroundColor: '#ff8000',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
