import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00293B',
    padding: 16,
  },
  logo: {
    width: '50%',
    height: '30%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
  },
  item: {
    backgroundColor: '#0E6275',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  speciesName: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto_700Bold',
  },
  speciesInfo: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },
  speciesImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default styles;


