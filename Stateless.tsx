import React from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Keyboard,
} from 'react-native';

// Tipe Data props
interface StatelessProps {
  sisi: string;
  hasil: string;
  onSisiChange: (text: string) => void;
  onHitung: () => void;
}

// Komponen yg menerima props
const  Stateless: React.FC<StatelessProps> = ({
  sisi,
  hasil,
  onSisiChange,
  onHitung,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Luas Persegi</Text>
      <Text style={styles.description}>Mochamad Afdal (20230040323)</Text>

      <TextInput
      style={styles.input}
      placeholder="Masukan Panjang Sisi"
      placeholderTextColor="#999"
      keyboardType='numeric'
      value={sisi}
      onChangeText={onSisiChange}
      />

      <TouchableOpacity style={styles.button} onPress={onHitung}>
        <Text style={styles.buttonText}>Hitung Luas</Text>
        </TouchableOpacity>

        {/*Tampilkan Hasil Jika Input Benar */}
        {hasil.length > 0 && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{hasil}</Text>
          </View>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#365b81ff',
    paddingVertical: 15,
    borderRadius: '8',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    backgroundColor: '#e7f3ff',
    padding: 20,
    borderRadius: 8,
  },
  resultValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0056b3'
  },
});

export default Stateless;