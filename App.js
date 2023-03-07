import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Homescreen from './screens/Homescreen';

// automatically view app in ios simulator

export default function App() {
  return (
    < SafeAreaView style={styles.container}>
     <Homescreen/>  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
