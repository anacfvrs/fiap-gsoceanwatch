import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    width: '100%',
    backgroundColor: '#00293B',
    padding: 16,
    borderRadius: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'Roboto_400Regular',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#0E6275',
    borderRadius: 5,
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
  },
  cityText: {
    color: '#ccc',
    marginTop: 5,
    fontFamily: 'Roboto_400Regular',
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E6275',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto_700Bold',
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchLabel: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },
  button: {
    backgroundColor: '#0E6275',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },
});

export default styles;




