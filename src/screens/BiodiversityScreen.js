import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../../styles/BiodiversityScreen.style'; // Importe os estilos do arquivo separado
import logo from '../../img/logo.png'; // Importe a imagem do logo

const INATURALIST_API_URL = 'https://api.inaturalist.org/v1/observations?taxon_id=47178&per_page=10';

const BiodiversityScreen = () => {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    fetch(INATURALIST_API_URL)
      .then(response => response.json())
      .then(data => {
        setObservations(data.results);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {logo && <Image source={logo} style={styles.logo} />}
      <Text style={styles.title}>Observações de Espécies Marinhas</Text>
      <FlatList
        data={observations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.speciesName}>{item.taxon.name}</Text>
            <Text style={styles.speciesInfo}>{item.taxon.preferred_common_name}</Text>
            {item.description && <Text style={styles.speciesInfo}>{item.description}</Text>}
            {item.photos && item.photos.length > 0 && (
              <Image
                source={{ uri: item.photos[0].url.replace('square', 'medium') }}
                style={styles.speciesImage}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default BiodiversityScreen;




