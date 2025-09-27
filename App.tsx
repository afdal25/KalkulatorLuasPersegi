import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Statefull from './Statefull';

const App: React.FC = () => {
  return (
    // TouchableWithoutFeedback digunakan agar keyboard bisa ditutup
    // saat menekan area di luar input
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Statefull />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;