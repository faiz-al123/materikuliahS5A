# modul praktikum 4: core components and styling

## tujuan pembelajaran
setelah menyiapkan praktikum ini mahasiswa mampu:
1. memahami dan menggunakan **16 core components** react native
2. menerapkan **stylesheet** untuk styling terpusat
3. menggunakan **useState** untuk state management dasar
4. membuat layout responsif dengan **flexbox**
5. menangani **interaksi pengguna** (tekan,inputscroll)

## praktikum ##

### langkah 1 : import library  and components ###
1. buka file app.js pada folder projek ptmn2
2. import library dan core 
3. konfirmasi bukti
![alt text](image.png)

## langkah 2: menyiapkan array objek untuk menampung data ##
1. membuat array objek bernama PROFILE untuk menampung data profile
2 konfirmasi bukti
![alt text](image-2.png)

## 📝 LANGKAH 3 — Sub-Components (SkillCard & TimelineCard)
**Konsep:** Komponen kecil yang bertugas merender satu item list. Ini adalah praktik **component reuse**.
Tambahkan kode berikut **di antara data dan fungsi App()**:
![alt text](image-3.png)

## 📝 LANGKAH 4 — State Management dengan useState
**Konsep:** `useState` menyimpan data yang bisa berubah. Setiap perubahan state akan men-trigger re-render komponen.
Tambahkan state di dalam fungsi `App()`:
![alt text](image-4.png)
![alt text](image-5.png)

## 📝 LANGKAH 5 — SafeAreaView, StatusBar & Header
**Konsep:**
- `SafeAreaView` → memastikan konten tidak tertutup notch (takik kamera) atau home indicator
- `StatusBar` → mengatur tampilan bar di bagian atas perangkat
- `View` + `Switch` → membangun header bar

Ganti bagian `return (...)` di `App()`:

![alt text](image-6.png)

> [!TIP]
> `flexDirection: 'row'` membuat anak View tersusun **horizontal** (kiri ke kanan).  
> Default di React Native adalah `column` (atas ke bawah).

**✅ Checkpoint:** Header bar berwarna gelap dengan teks putih dan switch terlihat.

---

## 📝 LANGKAH 6 — ScrollView & Profil Section (View, Text,  img/image)

**Konsep:**
- `ScrollView` → membungkus konten panjang agar bisa di-scroll
- ` img/image` → menampilkan gambar dari URL (`source={{ uri: '...' }}`)
- `Text` → bisa di-styling dengan `style` prop seperti CSS
Ganti `<View><Text ...>Step 5</Text></View>` dengan:
{/* 4. ScrollView → semua konten CV dibungkus di sini */}
![alt text](image-7.png)

> [!NOTE]
> **Perbedaan `TouchableOpacity` vs `Pressable`:**
> - `TouchableOpacity` → sederhana, otomatis redup saat ditekan
> - `Pressable` → lebih fleksibel, kita kontrol sendiri style saat `pressed`

*✅ Checkpoint:** Foto profil, nama, jabatan, bio, dan tombol sosmed terlihat.

---


### hasil akhir ###