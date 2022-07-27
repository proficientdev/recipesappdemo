import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Home from './Home';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Home {...props} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#EFEFEF',
  
  },
});
