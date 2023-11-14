// screens/Home.js

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/HomeStyles'; // Renomeando para HomeStyles

const Home = ({ navigation }) => {
  const iniciarQuiz = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={iniciarQuiz}>
        <Text style={styles.textoBotao}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
