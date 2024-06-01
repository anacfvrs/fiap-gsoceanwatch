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
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#0E6275',
    borderRadius: 5,
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'Roboto_400Regular',
  },
  button: {
    backgroundColor: '#0E6275',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },
  link: {
    color: '#0E6275',
    marginTop: 10,
    fontFamily: 'Roboto_400Regular',
  },
});

export default styles;

