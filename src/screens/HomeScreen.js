import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import logo from '../../img/logo.png'; 
import styles from '../../styles/HomeScreen.style'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {logo && <Image source={logo} style={styles.logo} />}
      <Text style={styles.title}>Bem-vindo!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Report')}>
          <FontAwesome name="search" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Relatar Avistamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
          <FontAwesome name="map" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Mapa de Avistamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Biodiversity')}>
          <FontAwesome5 name="water" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Espécies Marítimas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Education')}>
          <FontAwesome5 name="book-open" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Blog</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;






