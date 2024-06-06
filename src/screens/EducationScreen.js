import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../../styles/EducationScreen.style'; 
import logo from '../../img/logo.png'; 

const EducationScreen = () => {
  const posts = [
    {
      id: 1,
      title: 'Importância dos Pinguins no Ecossistema Marinho',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    },
    {
      id: 2,
      title: 'A Vida das Baleias: Gigantes dos Oceanos',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    },
    {
      id: 3,
      title: 'A Beleza e Importância das Conchas Marinhas',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    },
    {
      id: 4,
      title: 'Dicas para Proteger a Vida Marinha',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {logo && <Image source={logo} style={styles.logo} />}
      <Text style={styles.title}>Blog da OceanWatch</Text>
      {posts.map(post => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postContent}>{post.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default EducationScreen;


