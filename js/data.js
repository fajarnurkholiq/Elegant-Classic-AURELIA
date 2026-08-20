/**
 * =====================================================================
 *  DATA UNDANGAN — SATU-SATUNYA FILE YANG PERLU DIEDIT KLIEN
 * =====================================================================
 *  Ubah nilai di bawah ini untuk mengganti seluruh isi undangan:
 *  nama pasangan, tanggal, lokasi, foto, rekening, dll.
 *  JANGAN ubah nama key (bagian kiri titik dua) — cukup ubah nilainya.
 *  Path foto merujuk ke folder assets/images/ (ganti file di sana,
 *  pertahankan nama file yang sama, atau ubah path-nya di sini).
 * =====================================================================
 */

const WEDDING_DATA = {

  // ------------------------------------------------------------------
  // META (judul tab browser, preview saat dibagikan di WhatsApp)
  // ------------------------------------------------------------------
  meta: {
    siteTitle: "Undangan Pernikahan — Arka & Raia",
    ogDescription: "Dengan penuh sukacita, kami mengundang Anda merayakan pernikahan Arka & Raia.",
  },

  // ------------------------------------------------------------------
  // NAMA TAMU (opsional — diisi otomatis lewat parameter URL ?to=Nama)
  // ------------------------------------------------------------------
  guest: {
    defaultLabel: "Tamu Undangan",
  },

  // ------------------------------------------------------------------
  // MEMPELAI
  // ------------------------------------------------------------------
  couple: {
    initials: "A & R",
    groom: {
      fullName: "Arka Wicaksana Putra",
      nickname: "Arka",
      parents: "Putra kedua dari Bapak Wirawan Putra & Ibu Sulistyani",
      photo: "assets/images/groom.svg",
      instagram: "@arka.wp",
    },
    bride: {
      fullName: "Raia Anindya Kirana",
      nickname: "Raia",
      parents: "Putri pertama dari Bapak Handoko Kirana & Ibu Maya Anindita",
      photo: "assets/images/bride.svg",
      instagram: "@raia.ak",
    },
    heroPhoto: "assets/images/hero-couple.svg",
    heroQuote: "Dua hati, satu langkah menuju rumah yang sama.",
  },

  // ------------------------------------------------------------------
  // TANGGAL & WAKTU UTAMA (dipakai untuk hitung mundur)
  // Format wajib: "YYYY-MM-DDTHH:mm:ss+07:00"
  // ------------------------------------------------------------------
  countdownTarget: "2026-11-14T08:00:00+07:00",

  // ------------------------------------------------------------------
  // RANGKAIAN ACARA
  // ------------------------------------------------------------------
  events: [
    {
      name: "Akad Nikah",
      date: "Sabtu, 14 November 2026",
      time: "08.00 — 10.00 WIB",
      venueName: "Kediaman Mempelai Wanita",
      address: "Jl. Melati Raya No. 21, Cirebon, Jawa Barat",
      mapsUrl: "https://maps.google.com/?q=Cirebon",
    },
    {
      name: "Resepsi",
      date: "Sabtu, 14 November 2026",
      time: "11.00 — 14.00 WIB",
      venueName: "Grand Ballroom, Hotel Aston Cirebon",
      address: "Jl. Brigjen Dharsono No. 12, Cirebon, Jawa Barat",
      mapsUrl: "https://maps.google.com/?q=Aston+Cirebon",
    },
  ],

  // ------------------------------------------------------------------
  // LOKASI UNTUK PETA (section Location) — pakai acara terakhir di atas
  // ------------------------------------------------------------------
  location: {
    embedMapUrl: "https://maps.google.com/maps?q=Cirebon&t=&z=14&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://maps.google.com/?q=Aston+Cirebon",
  },

  // ------------------------------------------------------------------
  // LOVE STORY (tambah / hapus objek sesuai kebutuhan)
  // ------------------------------------------------------------------
  loveStory: [
    {
      year: "2019",
      title: "Awal Bertemu",
      text: "Dipertemukan di sebuah acara kampus yang sama sekali tidak direncanakan — obrolan singkat yang ternyata berlanjut jauh lebih lama dari perkiraan.",
      photo: "assets/images/story-1.svg",
    },
    {
      year: "2022",
      title: "Menjalin Kasih",
      text: "Melalui suka duka, jarak, dan banyak percakapan panjang di telepon, kami memutuskan untuk saling memilih setiap harinya.",
      photo: "assets/images/story-2.svg",
    },
    {
      year: "2026",
      title: "Melamar",
      text: "Di tempat yang penuh kenangan, satu pertanyaan diajukan — dan jawabannya adalah ya, untuk selamanya.",
      photo: "assets/images/story-3.svg",
    },
  ],

  // ------------------------------------------------------------------
  // GALERI FOTO
  // ------------------------------------------------------------------
  gallery: [
    "assets/images/gallery-1.svg",
    "assets/images/gallery-2.svg",
    "assets/images/gallery-3.svg",
    "assets/images/gallery-4.svg",
    "assets/images/gallery-5.svg",
    "assets/images/gallery-6.svg",
  ],

  // ------------------------------------------------------------------
  // RSVP — dikirim ke WhatsApp mempelai (ganti nomor di bawah)
  // ------------------------------------------------------------------
  rsvp: {
    whatsappNumber: "6282121759018", // format 62xxxxxxxxxx tanpa + atau 0 di depan
    deadline: "7 November 2026",
  },

  // ------------------------------------------------------------------
  // HADIAH / AMPLOP DIGITAL
  // ------------------------------------------------------------------
  gift: {
    intro: "Doa restu Anda adalah hadiah yang paling berarti bagi kami. Namun jika ingin memberi tanda kasih, kami dengan senang hati menerimanya melalui:",
    banks: [
      {
        bankName: "Bank BCA",
        accountNumber: "1234567890",
        accountName: "Arka Wicaksana Putra",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "Raia Anindya Kirana",
      },
    ],
    addressIntro: "Atau kirim hadiah ke alamat berikut:",
    address: "Jl. Melati Raya No. 21, Cirebon, Jawa Barat 45123",
  },

  // ------------------------------------------------------------------
  // MUSIK LATAR — letakkan file MP3 di assets/audio/backsound.mp3
  // ------------------------------------------------------------------
  music: {
    src: "assets/audio/backsound.mp3",
    title: "Musik Latar",
  },

  // ------------------------------------------------------------------
  // PENUTUP
  // ------------------------------------------------------------------
  closing: {
    text: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    signOff: "Kami yang berbahagia,",
    hashtag: "#ArkaRaiaBersatu",
  },
};
