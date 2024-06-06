import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../../styles/MapScreen.style'; 

const MapScreen = () => {
  const initialRegion = {
    latitude: -23.7957,
    longitude: -45.5683,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const sampleMarkers = [
    {
      id: 1,
      title: 'Baleia Jubarte',
      description: 'Avistada nadando perto da costa',
      coordinate: {
        latitude: -23.7957,
        longitude: -45.5683,
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Avistamentos</Text>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {sampleMarkers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;

