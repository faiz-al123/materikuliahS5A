import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama: Faiz Alfaresi</Text>
      <Text>NIM: 2488010012</Text>
      <Text>Cita-cita: Data analyst</Text>
      <Text>Rencana mencapai cita-cita menjadi seorang data analyst dengan belajar keterampilan teknis</Text>
      <Text>keterampilan teknis untuk mengolah data serta keterampilan non-teknis untuk memahami kebutuhan bisnis</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});