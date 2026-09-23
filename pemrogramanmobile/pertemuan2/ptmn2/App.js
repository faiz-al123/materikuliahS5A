//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
//import library
import react, { useState } from 'react';
//import components
import{
  View,
  Textt,
  image,
  Scrollview,
  Flatelist,
  Textinput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StleSheet,
  Alert,
  Platform,
} from 'react';

const PROFILE = {
  name: 'Faiz Alfaresi',
  title: 'mahasiswa',
  email: 'faizalfarzei@gmail.com',
  phone: '085701984398',
  location: 'Cirebon',
  avatar: 'https://radarjabar.disway.id/upload/30f8b5e657b08c497c7d67c797a55b34.jpg',
  //avatarOffline: 'assets/icon.png'
}

const SKILLS = [
  {id: '1', name: 'React Native', level: 90, color: '#61DAFB'},
  {id: '2', name: 'Flutter',      level: 75, color: '#02569B'},
  {id: '3', name: 'JavaScript',   level: 88, color: '#F7DF1E'},
  {id: '4', name: 'TypeScript',   level: 80, color: '#3178C6'},
  {id: '5', name: 'Node.js',      level: 70, color: '#339933'},
  {id: '6', name: 'Firebase',     level: 82, color: '#FFCA28'},
  
]

const SECTIONS = [
  {
    title: '💼 Pengalaman Kerja',
    data: [
      {
        id: 'e1',
        role: 'Senior Mobile Developer',
        company: 'PT. TechVision Indonesia',
        period: '2029 - Sekarang',
        desc: 'Memimpin tim 5 developer dalam pengembangan aplikasi e-commerce mobile.',
      },
      {
        id: 'e2',
        role: 'Mobile Developer',
        company: 'Startup Fintech - PayEasy',
        period: '2020-2022',
        desc: 'Mengembangkan fitur pembayaran digital menggunakan React Native & Redux.',
      },
    ],
  },
  {
    title: '🎓Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024 - 2029',
        desc: 'IPK 3.50 / 4.00 Skripsi: Implementasi ML pada Aplikasi Mobile.',
      },
    ],
  },
];

//================================
//|      DATA SOSIAL MEDIA       |
//================================
const SOCIAL = [
  { id: 's1', label: 'GitHub', icon: '🦑', url: 'github.com/faiz-al123' },
 // { id: 's2', label: 'LinkedIn', icon: '', url: 'linkedin.com/in/fulan' },
  //{ id: 's3', label: 'Portfolio', icon: '', url: 'fulan.dev' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama: Faiz Alfaresi</Text>
      <Text>NIM: 2488010012</Text>
      <Text>Asal sekolah: MAN5 Cirebon</Text>
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