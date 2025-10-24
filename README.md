# Hoshinova AI - Website Company Profile

Projek tugas mata kuliah Pemrograman Web yang berupa website *company profile* untuk startup bernama "Hoshinova AI".

## Data Mahasiswa

* **Nama:** Erik Putra Hernanda
* **NIM:** 202310370311250
* **Mata Kuliah:** Pemrograman Web D

## Deskripsi Proyek

Website ini adalah *company profile* 3 halaman untuk "Hoshinova AI", sebuah startup yang berfokus pada solusi kecerdasan buatan. Website ini dibuat tanpa menggunakan *framework* CSS seperti Bootstrap atau *template* apa pun.

Proyek ini mengimplementasikan 4 pilar *scripting* web.

## Implementasi Fitur

Berikut adalah rincian implementasi fitur dari tiap-tiap *script* :

| Script | Implementasi Fitur |
| :--- | :--- |
| **HTML** | <ul><li>Pembuatan 3 halaman (`index.html`, `pricing.html`, `contact.html`).</li><li>Penggunaan **Tag HTML Semantik** untuk struktur yang baik (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`).</li></ul> |
| **CSS** | <ul><li>**CSS Murni (Tanpa Bootstrap):** Seluruh *styling* dan *layout* dibuat dari nol.</li><li>**CSS Variables (`:root`):** Digunakan untuk manajemen tema dan menjadi dasar fitur *Dark Mode*.</li><li>**Layout Canggih:** Menggunakan **Flexbox** (untuk navbar) dan **CSS Grid** (untuk halaman harga).</li><li>**Responsive Design:** Menggunakan **`@media query`** agar tampilan tetap baik di berbagai ukuran layar (termasuk *scaling* 125%).</li></ul> |
| **JavaScript** | Mengimplementasikan **6 fitur *Client-Side*** di file `assets/js/script.js`: <br> 1. **Tabs:** Untuk bagian "Fitur Unggulan" di halaman Home. <br> 2. **Accordion:** Untuk bagian FAQ di halaman Home. <br> 3. **Pricing Toggle:** Mengubah tampilan harga (Bulanan/Tahunan) di halaman Pricing. <br> 4. **Validasi Form Real-Time:** Mencegah *submit* form kontak jika data (nama, email) tidak valid. <br> 5. **Scroll Reveal:** Memberi animasi *fade-in* pada elemen saat di-*scroll* (`IntersectionObserver`). <br> 6. **Dark Mode Toggle:** Mengubah tema (terang/gelap) dan menyimpannya di **`localStorage`** agar pilihan *user* tidak hilang. |
| **PHP** | Mengimplementasikan **fitur *Server-Side*** di file `process.php`: <br> 1. **Menerima Data:** Menggunakan `$_POST` untuk menangkap data dari form kontak. <br> 2. **Validasi Server-Side:** Memastikan data tidak kosong (`!empty()`) dan email valid (`filter_var()`) di sisi server. <br> 3. **Konten Dinamis:** Memberikan halaman balasan yang dipersonalisasi (`echo "Terima Kasih, $name!"`). |
