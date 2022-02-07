import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Tabbar from "./components/Tabbar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea3345',
    justifyContent: 'flex-end',
  },
});
