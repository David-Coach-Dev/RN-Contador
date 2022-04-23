import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';
//CONTADOR
export const ContadorScreen = () => {
  const [contador, setcontador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador : {contador}</Text>
      <Fab title="+1" position="br" onPress={() => setcontador(contador + 1)} />
      <Fab title="-1" position="bl" onPress={() => setcontador(contador - 1)} />
    </View>
  );
};
//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c8ff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#0000a0',
  },
});

{
  /*<TouchableOpacity
        style={styles.fabLocationBR}

      >
        <View style={styles.fab}>
          <Text
            style={styles.fabText}
          > +1 </Text>
        </View>
  </TouchableOpacity>*/
}
