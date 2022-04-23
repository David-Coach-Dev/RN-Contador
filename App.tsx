import React from 'react';
import {SafeAreaView} from 'react-native';
import {ContadorScreen} from './src/screen/ContadorScreen';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
//import {DimensionScreen} from './src/screen/DimensionScreen';
//import {PositionScreen} from './src/screen/PositionScreen';
//import {FlexScreen} from './src/screen/FlexScreen';
//import {TareaScreen} from './src/screen/TareaScreen';
//App
export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ContadorScreen />
    </SafeAreaView>
  );
};
