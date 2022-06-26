import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

// You can import from local files
export default function App() {

  return (
    <ScrollView>
      <View>
        <Text style={Styles.facebookText}>facebook</Text>
        <StatusBar/>
      </View>
    </ScrollView>
  );
}
const Styles= StyleSheet.create(
  {
facebookText:{
  fontSize: 60,
  fontWeight: 'bold',
  color: 'blue',  
}
})
