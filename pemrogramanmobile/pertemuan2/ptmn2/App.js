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
    title: 'Pengalaman Kerja',
    data: [
      {
        id: 'e1',
        role: 'Senior Mobile Developer',
        company: 'PT. TechVision Indonesia',
        period: '2022 - Sekarang',
        desc: 'Memimpin tim 5 developer dalam pengembangan aplikasi e-commerce mobile.',
      },
      {
        id: 'e2',
        role: 'Mobile Developer',
        company: 'Startup Fintech - PayEasy',
        period: '2020 - 2022',
        desc: 'Mengembangkan fitur pembayaran digital menggunakan React Native & Redux.',
      },
    ],
  },
  {
    title: 'Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024 - 2029',
        desc: 'IPK 3.72 / 4.00 Skripsi: Implementasi ML pada Aplikasi Mobile.',
      },
    ],
  },
];

// DATA SOSIAL MEDIA
const SOCIAL = [
  { id: 's1', label: 'GitHub', icon: '🦑', url: 'github.com/faiz-al123' },
  //{ id: 's2', label: 'LinkedIn', icon: '', url: 'linkedin.com/in/fulan' },
  //{ id: 's3', label: 'Portfolio', icon: '', url: 'fulan.dev' },
];


// SUB-COMPONENT: SkillCard
// Dipakai oleh FlatList untuk render tiap skill
// Props: item { name, level, color }
const SkillCard = ({ item }) => (
  // 1. View -> container kartu
  <View style={styles.skillCard}>
    {/* Baris atas: nama + persentase */}
    <View style={styles.skillHeader}>
      {/* 2. Text -> nama skill */}
      <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.skillLevel}>{item.level}</Text>
    </View>
    {/* Progress bar: View berlapis */}
    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          // width dinamis dari data, warna dari data
          { width: item.level, backgroundColor: item.color }
        ]}
      />
    </View>
  </View>
);

//
// SUB-COMPONENT: TimelineCard
// Dipakai oleh SectionList
// Props: item { role, company, period }, onPress
const TimelineCard = ({ item, onPress }) => (
  // 9. TouchableOpacity -> tekan untuk buka Modal
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.75} // opacity saat ditekan (0-1)
  >
    {/* Titik bulat di sebelah kiri (dekorasi timeline) */}
    <View style={styles.timelineDot} />

    {/* Konten teks */}
    <View style={styles.timelineContent}>
      <Text style={styles.roleText}>{item.role}</Text>
      <Text style={styles.companyText}>{item.company}</Text>
      <Text style={styles.periodText}>{item.period}</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
  // --- STATE
  // 11. Switch: apakah user "Open to Work"?
  const [openToWork, setOpenToWork] = useState(true);
  // 12. Modal: item yang dipilih & visibilitas modal
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // 7. TextInput: nilai input form kontak
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  // 13. ActivityIndicator: status loading
  const [sending, setSending] = useState(false);
  // 10. Pressable: status sedang ditekan
  const [pressing, setPressing] = useState(false);

  // --- HANDLER FUNCTIONS
  // Dipanggil saat kartu timeline ditekan
  const handleCardPress = (item) => {
    setSelectedItem(item);   // simpan item yang dipilih
    setModalVisible(true);   // tampilkan modal
  };

  // Dipanggil saat tombol "Kirim Pesan" ditekan
  const handleSend = () => {
    // Validasi input tidak boleh kosong
    if (!senderName.trim() || !message.trim()) {
      Alert.alert('⚠️ Peringatan', 'Nama dan pesan tidak boleh kosong!');
      return;
    }

    setSending(true); // tampilkan ActivityIndicator

    // Simulasi delay 2 detik (misal: request ke server)
    setTimeout(() => {
      setSending(false);
      setSenderName('');
      setMessage('');
      Alert.alert('✅ Berhasil', `Pesan dari ${senderName} telah terkirim!`);
    }, 2000);
  };

  return (
    //JSX akan ditulis di langkah berikutnya
    <View><Text>Step 4 done </Text></View>
  );
}

return (
    // 15. SafeAreaView -> area aman dari notch & home bar
    <SafeAreaView style={styles.safeArea}>
      {/* 14. StatusBar -> warna latar status bar & style teks/ikon */}
      <StatusBar
        backgroundColor="#1a1a2e" // warna latar (Android)
        barStyle="light-content"  // ikon putih (iOS & Android)
      />

      {/* HEADER BAR */}
      {/* 1. View -> container header dengan flexDirection row */}
      <View style={styles.header}>
        {/* 2. Text -> judul header */}
        <Text style={styles.headerTitle}>Curriculum Vitae</Text>

        {/* Toggle "Open to Work" */}
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>
            {openToWork ? '🟢 Open' : '🔴 Busy'}
          </Text>
          {/* 11. Switch -> toggle on/off */}
          <Switch
            value={openToWork} // nilai saat ini
            onValueChange={setOpenToWork} // callback saat diubah
            trackColor={{ false: '#555', true: '#4ade80' }}
            thumbColor={openToWork ? '#fff' : '#aaa'}
          />
        </View>
      </View>

      {/* Konten akan ditambahkan di langkah berikutnya */}
    </SafeAreaView>
  );

  
<ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

  {/*
    SECTION PROFIL
    Komponen: View, Text, Image
  */}
  <View style={styles.profileSection}>

    {/* 3. Image → foto profil dari URL internet */}
    <Image
      source={{ url: PROFILE.avatar }}
      style={styles.avatar}
      // resizeMode menentukan cara gambar menyesuaikan ukuran
      // 'cover' = memenuhi area (mungkin terpotong)
      // 'contain' = semua terlihat (mungkin ada ruang kosong)
    />

    {/* Conditional rendering: badge hanya tampil jika openToWork = true */}
    {openToWork && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>✅ Open to Work</Text>
      </View>
    )}

    {/* 2. Text → berbagai ukuran & weight */}
    <Text style={styles.profileName}>{PROFILE.name}</Text>
    <Text style={styles.profileTitle}>{PROFILE.title}</Text>
    <Text style={styles.profileBio}>{PROFILE.bio}</Text>

    {/* Info kontak dalam baris horizontal */}
    <View style={styles.contactRow}>
      <Text style={styles.contactItem}>📧 {PROFILE.email}</Text>
      <Text style={styles.contactItem}>📍 {PROFILE.location}</Text>
    </View>

    <Text style={styles.contactItem}>📱 {PROFILE.phone}</Text>

    {/* 9. TouchableOpacity → tombol sosial media */}
    <View style={styles.socialRow}>
      {SOCIAL.map((s) => (
        <TouchableOpacity
          key={s.id}
          style={styles.socialBtn}
          onPress={() => Alert.alert('🔗 Link', s.url)}
          activeOpacity={0.8}
        >
          <Text style={styles.socialIcon}>{s.icon}</Text>
          <Text style={styles.socialLabel}>{s.label}</Text>
        </TouchableOpacity>
      ))}
    </View>

    {/* 10. Pressable → tombol dengan efek saat ditekan */}
    <Pressable
      // style bisa berupa fungsi yang menerima { pressed }
      style={({ pressed }) => [
        styles.downloadBtn,
        pressed && styles.downloadBtnPressed, // style tambahan saat ditekan
      ]}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      onPress={() => Alert.alert('⬇️ Download', 'CV sedang diunduh...')}
    >
      <Text style={styles.downloadBtnText}>
        {pressing ? '⌛ Mengunduh...' : '⬇️ Download CV (PDF)'}
      </Text>
    </Pressable>

  </View>

  {/* Konten lanjutan di langkah berikutnya */}
  <View style={{ height: 40 }} />

<View style={styles.sectionBox}>
  <Text style={styles.sectionTitle}>🛠️ Keahlian</Text>
  <Text style={styles.sectionSubtitle}>
    ↳ FlatList: menampilkan list data secara efisien
  </Text>

  {/* 5. FlatList → daftar skill */}
  <FlatList
    data={SKILLS} // array data
    keyExtractor={(item) => item.id} // key unik tiap item
    renderItem={({ item }) => <SkillCard item={item} />} // render tiap item
    scrollEnabled={false} // scroll dihandle ScrollView
    ItemSeparatorComponent={() => (
      // komponen pemisah antar item
      <View style={{ height: 8 }} />
    )}
  />
</View>

<View style={styles.sectionBox}>
  <Text style={styles.sectionTitle}>📋 Riwayat</Text>
  <Text style={styles.sectionSubtitle}>
    ↳ SectionList: data dikelompokkan per kategori. Ketuk kartu untuk Modal detail.
  </Text>

  {/* 6. SectionList → pengalaman & pendidikan */}
  <SectionList
    sections={SECTIONS}                 // array of { title, data }
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      // TimelineCard punya onPress untuk membuka Modal
      <TimelineCard item={item} onPress={handleCardPress} />
    )}
    // renderSectionHeader: header untuk tiap kelompok
    renderSectionHeader={({ section: { title } }) => (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    )}
    scrollEnabled={false}
    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
  />
</View>

<View style={styles.sectionBox}>
  <Text style={styles.sectionTitle}>✉️ Hubungi Saya</Text>

  <Text style={styles.sectionSubtitle}>
    ↳ TextInput, Button, ActivityIndicator
  </Text>

  {/* 7. TextInput → input nama (single line) */}
  <TextInput
    style={styles.textInput}
    placeholder="Nama Anda"
    placeholderTextColor="#888"
    value={senderName}          // nilai terkontrol dari state
    onChangeText={setSenderName} // update state setiap ketik
    returnKeyType="next"         // label tombol keyboard
    editable={!sending}          // nonaktif saat loading
  />

  {/* 7. TextInput → input pesan (multiline = seperti textarea) */}
  <TextInput
    style={[styles.textInput, styles.textArea]} // gabungkan 2 style
    placeholder="Tulis pesan Anda di sini..."
    placeholderTextColor="#888"
    value={message}
    onChangeText={setMessage}
    multiline                    // aktifkan multiline
    numberOfLines={4}            // tinggi awal 4 baris
    textAlignVertical="top"      // teks mulai dari atas (Android)
    editable={!sending}
  />

  {/* Kondisi: tampilkan loading atau tombol kirim */}
  {sending ? (

    // 13. ActivityIndicator → spinner saat proses
    <View style={styles.loadingRow}>
      <ActivityIndicator
        size="large"
        color="#7c3aed"
      />

      <Text style={styles.loadingText}>
        Mengirim pesan...
      </Text>
    </View>

  ) : (

    // 8. Button → tombol standar React Native
    <Button
      title="✉️ Kirim Pesan"
      color="#7c3aed"           // warna tombol
      onPress={handleSend}      // handler saat ditekan
    />

  )}
</View>

<Modal
  visible={modalVisible}
  animationType="slide"
  transparent
  onRequestClose={() => setModalVisible(false)}
>
  {/* Overlay gelap di belakang dialog */}
  <View style={styles.modalOverlay}>

    {/* Kotak dialog */}
    <View style={styles.modalBox}>

      {/* Render isi hanya jika ada item yang dipilih */}
      {selectedItem && (
        <>
          <Text style={styles.modalTitle}>
            {selectedItem.role}
          </Text>

          <Text style={styles.modalCompany}>
            {selectedItem.company}
          </Text>

          <Text style={styles.modalPeriod}>
            📅 {selectedItem.period}
          </Text>

          <View style={styles.modalDivider} />

          <Text style={styles.modalDesc}>
            {selectedItem.desc}
          </Text>
        </>
      )}

      {/* Tombol tutup modal */}
      <TouchableOpacity
        style={styles.modalCloseBtn}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.modalCloseBtnText}>
          ✕ Tutup
        </Text>
      </TouchableOpacity>

    </View>

  </View>
</Modal>

</ScrollView>





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