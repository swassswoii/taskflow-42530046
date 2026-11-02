# TaskFlow — Sistem Manajemen Tugas Mahasiswa

## 1. Deskripsi Proyek

TaskFlow adalah aplikasi berbasis web yang dibuat untuk membantu mahasiswa mengelola tugas kuliah. Aplikasi ini memungkinkan pengguna menambahkan, melihat, mengubah, dan menghapus data tugas melalui antarmuka yang sederhana.

Proyek ini dibuat menggunakan Express.js, EJS, dan MySQL dengan menerapkan pola arsitektur Model-View-Controller (MVC).

## 2. Teknologi yang Digunakan

- Node.js
- Express.js
- EJS
- MySQL
- MySQL2
- Dotenv
- HTML dan CSS

## 3. Fitur Aplikasi

- Menampilkan seluruh daftar tugas mahasiswa.
- Menambahkan tugas baru.
- Mengedit data tugas.
- Menghapus tugas dengan konfirmasi.
- Mengatur deadline tugas.
- Mengatur prioritas dan status pengerjaan.
- Menyimpan bobot tugas.

## 4. Struktur Folder

```text
taskflow/
├── config/
│   └── database.js
├── controllers/
│   └── tugas.controller.js
├── docs/
│   └── screenshots/
├── models/
│   └── tugas.model.js
├── public/
│   └── css/
│       └── style.css
├── routes/
│   └── tugas.routes.js
├── views/
│   └── tugas/
│       ├── index.ejs
│       ├── create.ejs
│       └── edit.ejs
├── .env.example
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## 5. Struktur Database

Nama database: `db_taskflow`

Nama tabel: `tugas`

| Kolom | Tipe Data |
|---|---|
| id | INT AUTO_INCREMENT PRIMARY KEY |
| judul | VARCHAR(150) |
| mata_kuliah | VARCHAR(100) |
| deskripsi | TEXT |
| deadline | DATE |
| prioritas | ENUM |
| status | ENUM |
| bobot | DECIMAL(5,2) |
| created_at | TIMESTAMP |

## 6. Penerapan MVC

- **Model:** Mengelola seluruh proses komunikasi dan query ke database MySQL.
- **View:** Menampilkan halaman aplikasi menggunakan EJS.
- **Controller:** Mengatur alur permintaan pengguna dan menghubungkan Model dengan View.
- **Routes:** Mengatur alamat URL dan metode HTTP untuk setiap fitur.

## 7. Keamanan Database

Aplikasi menggunakan prepared statements dengan placeholder `?` pada operasi database yang menerima parameter pengguna. Penerapan ini membantu mencegah SQL Injection.

Koneksi database menggunakan MySQL connection pooling. Konfigurasi database disimpan dalam file `.env`, sedangkan `.env.example` disediakan sebagai contoh konfigurasi. File `.env` tidak disertakan dalam repository.

## 8. Cara Menjalankan Aplikasi

1. Clone repository ini.
2. Masuk ke folder proyek.
3. Jalankan `npm install`.
4. Buat database bernama `db_taskflow` pada MySQL.
5. Buat tabel `tugas` sesuai struktur database.
6. Salin `.env.example` menjadi `.env`.
7. Sesuaikan konfigurasi database pada file `.env`.
8. Jalankan aplikasi dengan perintah `npm start`.
9. Buka browser dan akses `http://localhost:3000`.

## 9. Pengujian Aplikasi

| ID | Skenario Pengujian | Hasil yang Diharapkan | Status |
|---|---|---|---|
| TC-01 | Membuka halaman daftar tugas | Daftar tugas ditampilkan | Berhasil |
| TC-02 | Membuka form tambah tugas | Form tambah ditampilkan | Berhasil |
| TC-03 | Menambahkan tugas baru | Data tersimpan dan muncul pada daftar | Berhasil |
| TC-04 | Membuka form edit tugas | Form menampilkan data sebelumnya | Berhasil |
| TC-05 | Memperbarui data tugas | Data terbaru ditampilkan pada daftar | Berhasil |
| TC-06 | Menghapus tugas | Data berhasil dihapus dari daftar | Berhasil |

## 10. Bukti Pengujian

Bukti pengujian aplikasi tersedia pada folder `docs/screenshots/`, yang berisi enam screenshot proses pengujian fitur CRUD.

## 11. Pengembang

Proyek ini dibuat untuk memenuhi Tugas 3 Terstruktur pada Praktikum Module 3.