# Template Undangan Digital — Modern Elegant Wedding
Dibuat oleh KaveloLab.

## Struktur Folder
```
undangan-pernikahan-template/
├── index.html          ← struktur halaman (JANGAN diubah kecuali menambah bagian baru)
├── css/style.css        ← warna, font, animasi
├── js/data.js            ← EDIT DI SINI: nama, tanggal, lokasi, rekening, teks
├── js/script.js          ← logic (countdown, RSVP, musik, galeri) — tidak perlu diedit
├── assets/images/        ← ganti file foto di sini (pertahankan nama file yang sama)
└── assets/audio/          ← taruh file musik latar: backsound.mp3
```

## Cara Edit Cepat (untuk Klien)
Semua isi undangan diatur dari **satu file: `js/data.js`**. Buka file itu dengan
text editor apapun (Notepad, VS Code, atau editor teks di HP), ubah nilai di
antara tanda kutip `" "`, lalu simpan.

1. **Nama pasangan & orang tua** → bagian `couple`
2. **Tanggal & jam countdown** → `countdownTarget` (format: `2026-11-14T08:00:00+07:00`)
3. **Rangkaian acara (akad/resepsi)** → bagian `events`
4. **Cerita cinta** → bagian `loveStory`
5. **Nomor WhatsApp RSVP** → `rsvp.whatsappNumber` (format `62xxxxxxxxxx`, tanpa `+` atau `0` di depan)
6. **Rekening / amplop digital** → bagian `gift`
7. **Lokasi peta** → `location.embedMapUrl` (ambil dari Google Maps → Bagikan → Sematkan peta → salin URL di dalam `src="..."`)
8. **Nama tamu otomatis di cover**: tambahkan `?to=NamaTamu` di akhir link undangan, contoh:
   `https://namadomain.com/index.html?to=Budi%20%26%20Keluarga`

## Mengganti Foto
Ganti file di `assets/images/` (format `.jpg`/`.png` juga boleh — cukup ubah
nama ekstensi path di `data.js` jika nama filenya berbeda). Rasio yang disarankan
sudah tertulis di setiap placeholder:
- Foto hero, mempelai, love story → potret 4:5
- Foto galeri → persegi 1:1

## Musik Latar
Taruh file MP3 di `assets/audio/backsound.mp3`. Musik **tidak autoplay** saat
halaman dibuka (agar tidak mengganggu) — musik mulai otomatis begitu tamu
menekan tombol "Buka Undangan", atau bisa dinyalakan manual lewat tombol
bulat di pojok kanan bawah kapan saja.

## Cara Menjalankan / Deploy
- **Lokal**: buka `index.html` langsung di browser HP/PC.
- **Deploy gratis**: upload seluruh folder ke GitHub Pages, Netlify, atau Cloudflare Pages.
  Pastikan struktur folder (css/js/assets) tetap sejajar dengan `index.html`.
- **Bagikan ke WhatsApp**: setelah online, kirim link-nya langsung — undangan
  sudah mobile-first dan ringan untuk dibuka dari chat WA.

## Catatan Teknis
- Font: Fraunces (display/italic) + Manrope (body), dimuat via Google Fonts.
- Styling: Tailwind CSS (CDN) + `css/style.css` untuk token desain kustom.
- Tidak ada dependensi build — murni HTML/CSS/JS, tidak perlu `npm install`.
