import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00293B',
    padding: 16,
  },
  logo: {
    width: '50%',
    height: '30%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
  },
  post: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 20,
    color: '#00293B',
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  postContent: {
    fontSize: 16,
    color: '#00293B',
    fontFamily: 'Roboto_400Regular',
  },
});

export default styles;



