# ResepAI

ResepAI adalah sebuah aplikasi berbasis web yang menggunakan NextJS, Typescript, Tailwind, dan OpenAI API. Aplikasi ini dapat membantu pengguna mencari resep makanan berdasarkan bahan-bahan yang dimiliki dengan bantuan teknologi GPT3.5.

## Demo

Aplikasi ini dapat diakses pada [https://resep-ai.vercel.app/](https://resep-ai.vercel.app/).

## Penggunaan

1. Masukkan bahan-bahan yang dimiliki pada kolom pencarian di halaman utama.
2. Tekan tombol "Cari Resep".
3. Aplikasi akan menampilkan daftar resep makanan yang dapat dibuat dengan bahan-bahan yang dimiliki. Setiap resep akan menampilkan gambar, judul, dan deskripsi singkat.
4. Klik salah satu resep untuk melihat detail resep, termasuk bahan-bahan dan langkah-langkah pembuatan.
5. Selamat mencoba!

## Instalasi

Untuk menjalankan aplikasi ResepAI secara lokal, ikuti langkah-langkah berikut:

1. Clone repository ini ke dalam direktori lokal Anda.

```bash
git clone https://github.com/username/resepai.git
```

2. Masuk ke direktori proyek.

```bash
cd resepai
```

3. Install dependencies.

```bash
npm install
```

4. Copy file `.env.example` menjadi `.env` dan isi dengan API key OpenAI Anda.

```bash
cp .env.example .env
```

5. Jalankan aplikasi.

```bash
npm run dev
```

6. Aplikasi dapat diakses pada `http://localhost:3000`.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan kirimkan pull request atau buat issue baru. Kami sangat terbuka untuk saran dan masukan dari komunitas.

## Lisensi

Proyek ini menggunakan lisensi MIT. Silakan lihat berkas [LICENSE](LICENSE) untuk informasi lebih lanjut.
