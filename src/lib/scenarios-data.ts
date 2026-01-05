import type { CulturalScenario } from './types-user';

/**
 * Cultural Scenarios Database
 * Real-world situations with step-by-step cultural guidance
 */

export const culturalScenarios: CulturalScenario[] = [
  {
    id: 'javanese-wedding',
    title: 'Diundang ke Pernikahan Adat Jawa',
    description: 'Panduan lengkap menghadiri pernikahan adat Jawa sebagai tamu',
    region: 'Jawa Tengah',
    category: 'wedding',
    difficulty: 'beginner',
    context: 'Anda diundang ke pernikahan adat Jawa di Yogyakarta. Ini adalah pertama kalinya Anda menghadiri acara seperti ini dan ingin menghormati adat setempat dengan baik.',
    learningObjectives: [
      'Mengetahui pakaian yang pantas untuk tamu',
      'Memahami urutan acara dan kapan datang',
      'Belajar ucapan selamat yang tepat',
      'Mengerti etika memberi amplop'
    ],
    steps: [
      {
        id: 'step-1',
        order: 1,
        title: 'Persiapan: Pakaian & Perlengkapan',
        description: 'Pilih pakaian yang sesuai dan siapkan perlengkapan',
        doList: [
          'Kenakan batik atau kebaya untuk wanita',
          'Gunakan batik lengan panjang dan celana bahan untuk pria',
          'Pilih warna yang tidak terlalu mencolok (hindari putih total)',
          'Siapkan amplop dengan nominal genap (Rp 200.000, Rp 500.000, dst)',
          'Bawa syal atau selendang jika mengenakan baju tanpa lengan'
        ],
        dontList: [
          'Jangan memakai pakaian serba hitam (melambangkan duka)',
          'Hindari pakaian terlalu terbuka atau ketat',
          'Jangan datang dengan pakaian casual (kaos, jeans)',
          'Hindari memakai terlalu banyak perhiasan mencolok'
        ],
        keyPhrases: [
          {
            phrase: 'Sugeng rawuh',
            meaning: 'Selamat datang',
            pronunciation: 'Su-geng ra-wuh',
            whenToUse: 'Saat disambut oleh keluarga pengantin'
          },
          {
            phrase: 'Nuwun sewu',
            meaning: 'Permisi / Mohon maaf',
            pronunciation: 'Nu-wun se-wu',
            whenToUse: 'Saat melewati orang yang lebih tua atau ingin permisi'
          }
        ]
      },
      {
        id: 'step-2',
        order: 2,
        title: 'Kedatangan & Registrasi',
        description: 'Tiba di lokasi acara dengan tepat waktu',
        doList: [
          'Datang sesuai waktu yang tertera di undangan (jangan terlalu awal/terlambat)',
          'Salim (cium tangan) orang tua kedua mempelai jika bertemu',
          'Tulis nama di buku tamu',
          'Serahkan amplop di meja registrasi atau langsung ke keluarga',
          'Ikuti arahan panitia untuk duduk'
        ],
        dontList: [
          'Jangan langsung mengambil makanan sebelum acara dimulai',
          'Hindari memotret saat prosesi sakral sedang berlangsung (tanya dulu)',
          'Jangan duduk di tempat yang sudah disediakan untuk keluarga',
          'Hindari berbicara keras saat prosesi berlangsung'
        ],
        keyPhrases: [
          {
            phrase: 'Mugi-mugi dados kulawarga ingkang sakinah, mawadah, warahmah',
            meaning: 'Semoga menjadi keluarga yang sakinah, mawadah, warahmah',
            pronunciation: 'Mu-gi-mu-gi da-dos ku-la-war-ga ing-kang sa-ki-nah, ma-wa-dah, wa-rah-mah',
            whenToUse: 'Ucapan selamat kepada pengantin'
          }
        ]
      },
      {
        id: 'step-3',
        order: 3,
        title: 'Mengikuti Prosesi Akad',
        description: 'Menyaksikan prosesi akad nikah dengan khidmat',
        doList: [
          'Duduk tenang dan khidmat',
          'Matikan atau silent-kan handphone',
          'Berikan perhatian penuh saat ijab kabul',
          'Ucapkan "Alhamdulillah" atau tepuk tangan setelah akad sah',
          'Tunggu giliran untuk bersalaman dengan pengantin'
        ],
        dontList: [
          'Jangan keluar masuk saat prosesi berlangsung',
          'Hindari mengobrol dengan tamu lain',
          'Jangan memotret dengan flash saat prosesi sakral',
          'Hindari makan atau minum saat akad berlangsung'
        ]
      },
      {
        id: 'step-4',
        order: 4,
        title: 'Ucapan Selamat & Foto Bersama',
        description: 'Memberikan ucapan selamat kepada pengantin',
        doList: [
          'Antre dengan tertib untuk bersalaman',
          'Ucapkan selamat dengan bahasa yang sopan',
          'Berjabat tangan dengan lembut (untuk sesama jenis)',
          'Tersenyum dan berikan ucapan tulus',
          'Foto bersama jika dipersilakan (jangan terlalu lama)'
        ],
        dontList: [
          'Jangan menyerobot antrian',
          'Hindari candaan yang terlalu personal atau sensitif',
          'Jangan terlalu lama mengobrol (masih banyak tamu lain)',
          'Hindari meminta selfie berkali-kali'
        ],
        keyPhrases: [
          {
            phrase: 'Selamat menempuh hidup baru',
            meaning: 'Ucapan selamat untuk pengantin',
            whenToUse: 'Saat bersalaman dengan pengantin'
          },
          {
            phrase: 'Semoga menjadi keluarga yang samawa',
            meaning: 'Semoga menjadi keluarga yang harmonis',
            whenToUse: 'Ucapan tambahan untuk pengantin'
          }
        ]
      },
      {
        id: 'step-5',
        order: 5,
        title: 'Menikmati Jamuan & Pamit',
        description: 'Menikmati hidangan dengan sopan',
        doList: [
          'Ambil makanan secukupnya (jangan berlebihan)',
          'Gunakan tangan kanan saat mengambil makanan',
          'Duduk dengan sopan saat makan',
          'Habiskan makanan yang sudah diambil',
          'Pamit dengan sopan setelah selesai (tidak harus lama-lama)'
        ],
        dontList: [
          'Jangan mengambil makanan berulang kali dalam jumlah banyak',
          'Hindari buang-buang makanan',
          'Jangan pulang sebelum makan (dianggap kurang sopan)',
          'Hindari membawa pulang makanan tanpa izin'
        ],
        keyPhrases: [
          {
            phrase: 'Matur nuwun, kula pamit rumiyin',
            meaning: 'Terima kasih, saya pamit dulu',
            pronunciation: 'Ma-tur nu-wun, ku-la pa-mit ru-mi-yin',
            whenToUse: 'Saat berpamitan dengan tuan rumah'
          }
        ]
      }
    ],
    tips: [
      'Jika ragu tentang adat tertentu, tidak ada salahnya bertanya pada tamu lain yang lebih tahu',
      'Bawa tissue basah atau hand sanitizer untuk kebersihan',
      'Siapkan uang cash untuk parkir atau tips',
      'Datang tidak terlalu awal agar tidak mengganggu persiapan',
      'Jika tidak bisa hadir, kabari sebelumnya via WhatsApp atau telepon'
    ],
    commonMistakes: [
      'Datang terlambat saat acara sakral sedang berlangsung',
      'Memakai pakaian yang terlalu kasual atau mencolok',
      'Lupa memberikan amplop atau memberikan nominal ganjil',
      'Terlalu lama mengobrol dengan pengantin saat antri panjang',
      'Pulang sebelum makan (dianggap tidak menghargai tuan rumah)'
    ],
    relatedTraditions: ['batik', 'gamelan']
  },
  {
    id: 'minang-proposal',
    title: 'Meminang Gadis Minangkabau',
    description: 'Panduan lengkap meminang dalam adat Minangkabau',
    region: 'Sumatera Barat',
    category: 'wedding',
    difficulty: 'advanced',
    context: 'Anda (pria) ingin meminang seorang wanita Minang. Dalam adat Minang, yang meminang adalah pihak wanita! Anda dan keluarga perlu memahami prosesi yang unik ini.',
    learningObjectives: [
      'Memahami sistem matrilineal Minang',
      'Mengerti peran mamak (paman dari ibu)',
      'Belajar tahapan meminang yang benar',
      'Memahami filosofi siriah carano'
    ],
    steps: [
      {
        id: 'step-1',
        order: 1,
        title: 'Persiapan: Pahami Adat Matrilineal',
        description: 'Memahami sistem keluarga matrilineal Minangkabau',
        doList: [
          'Pahami bahwa pihak wanita yang akan "meminang" pihak pria',
          'Hormati peran mamak (paman dari ibu) sebagai pengambil keputusan',
          'Siapkan mental untuk dikunjungi pihak wanita',
          'Konsultasi dengan keluarga tentang kesiapan',
          'Pelajari tentang filosofi adat Minang'
        ],
        dontList: [
          'Jangan memaksakan kehendak atau terburu-buru',
          'Hindari membicarakan adat dengan sembarangan',
          'Jangan meremehkan peran mamak',
          'Hindari mengubah adat sesuai keinginan sendiri'
        ],
        keyPhrases: [
          {
            phrase: 'Kami datang baampuah siriah, basasok pinang',
            meaning: 'Kami datang membawa sirih dan pinang (pembukaan pinangan)',
            whenToUse: 'Ucapan pembuka dari pihak wanita saat datang melamar'
          }
        ]
      },
      {
        id: 'step-2',
        order: 2,
        title: 'Maresek (Penjajakan Awal)',
        description: 'Tahap awal penjajakan dari pihak wanita',
        doList: [
          'Terima kunjungan pihak wanita dengan hormat',
          'Sediakan sirih dalam carano (tempat sirih)',
          'Dengarkan maksud kedatangan mereka',
          'Berikan jawaban yang bijak dan sopan',
          'Diskusikan dengan keluarga setelahnya'
        ],
        dontList: [
          'Jangan langsung menolak atau menerima',
          'Hindari sikap sombong atau meremehkan',
          'Jangan lupa menyediakan jamuan',
          'Hindari membahas materi terlalu detail di tahap ini'
        ]
      },
      {
        id: 'step-3',
        order: 3,
        title: 'Maminang (Pinangan Resmi)',
        description: 'Pinangan resmi dari pihak keluarga wanita',
        doList: [
          'Sambut rombongan dengan tata cara adat',
          'Sediakan uang japuik (uang jemputan) sesuai kesepakatan',
          'Terima tando (tanda) dari pihak wanita',
          'Diskusikan tanggal pernikahan',
          'Catat semua kesepakatan dengan jelas'
        ],
        dontList: [
          'Jangan menawar uang japuik dengan tidak sopan',
          'Hindari perdebatan di depan banyak orang',
          'Jangan terburu-buru menentukan tanggal',
          'Hindari sikap tidak menghargai adat'
        ],
        keyPhrases: [
          {
            phrase: 'Alhamdulillah, kami tarimo jo senang hati',
            meaning: 'Alhamdulillah, kami terima dengan senang hati',
            whenToUse: 'Saat menerima pinangan'
          }
        ]
      }
    ],
    tips: [
      'Pihak pria perlu menyiapkan "uang hilang" dan "uang japuik" sesuai kesanggupan',
      'Hormati peran mamak, mereka yang memutuskan',
      'Jangan bandingkan dengan adat daerah lain',
      'Siapkan siriah carano sebagai simbol penghormatan'
    ],
    commonMistakes: [
      'Pihak pria yang aktif melamar (salah dalam adat Minang)',
      'Mengabaikan peran mamak dalam pengambilan keputusan',
      'Menawar uang japuik dengan cara yang tidak sopan',
      'Tidak memahami filosofi di balik setiap tahapan'
    ],
    relatedTraditions: ['rendang']
  },
  {
    id: 'toraja-rambu-solo',
    title: 'Menghadiri Rambu Solo di Toraja',
    description: 'Panduan menghadiri upacara pemakaman besar Rambu Solo',
    region: 'Sulawesi Selatan',
    category: 'funeral',
    difficulty: 'advanced',
    context: 'Anda diundang ke upacara Rambu Solo di Tana Toraja, salah satu upacara pemakaman paling megah di Indonesia. Upacara ini bisa berlangsung berhari-hari dengan berbagai prosesi unik.',
    learningObjectives: [
      'Memahami kepercayaan Aluk Todolo',
      'Mengerti prosesi Ma\'nene (ritual jenazah)',
      'Belajar tentang penyembelihan kerbau sebagai simbol status',
      'Memahami peran keluarga dalam upacara'
    ],
    steps: [
      {
        id: 'step-1',
        order: 1,
        title: 'Persiapan & Kedatangan',
        description: 'Mempersiapkan diri untuk upacara multi-hari',
        doList: [
          'Siapkan pakaian hitam atau gelap untuk hari pemakaman',
          'Bawa amplop sesuai kemampuan',
          'Datang dengan rasa hormat pada kepercayaan Aluk Todolo',
          'Siapkan stamina untuk upacara yang panjang',
          'Tanyakan kepada keluarga tentang jadwal prosesi'
        ],
        dontList: [
          'Jangan datang dengan pakaian terlalu cerah atau mencolok',
          'Hindari sikap tidak hormat pada ritual',
          'Jangan kaget dengan penyembelihan kerbau (ini bagian dari adat)',
          'Hindari memaksakan pandangan agama sendiri'
        ]
      },
      {
        id: 'step-2',
        order: 2,
        title: 'Prosesi Penyembelihan Kerbau',
        description: 'Menyaksikan prosesi penyembelihan kerbau sebagai penghormatan',
        doList: [
          'Pahami bahwa jumlah kerbau menandakan status sosial almarhum',
          'Hormati prosesi dengan tenang',
          'Tetap di area yang aman dan ditentukan',
          'Pahami makna spiritual di balik ritual',
          'Boleh memotret dari jarak aman jika diizinkan'
        ],
        dontList: [
          'Jangan menunjukkan rasa tidak nyaman atau jijik',
          'Hindari menghalangi prosesi',
          'Jangan terlalu dekat dengan area penyembelihan',
          'Hindari komentar negatif tentang tradisi'
        ]
      },
      {
        id: 'step-3',
        order: 3,
        title: 'Pemakaman di Liang (Gua)',
        description: 'Prosesi pemakaman di liang batu atau gua',
        doList: [
          'Ikuti keluarga menuju liang (gua pemakaman)',
          'Hormati tau-tau (patung kayu perwakilan almarhum)',
          'Berikan doa sesuai kepercayaan masing-masing',
          'Ikuti arahan keluarga dan to minaa (pemimpin adat)',
          'Tetap khidmat saat jenazah dimasukkan ke liang'
        ],
        dontList: [
          'Jangan menyentuh tau-tau tanpa izin',
          'Hindari memasuki area liang yang terlarang',
          'Jangan membuat keributan',
          'Hindari meninggalkan acara sebelum prosesi selesai'
        ]
      }
    ],
    tips: [
      'Rambu Solo bisa berlangsung 3-7 hari, tanyakan bagian mana yang wajib dihadiri',
      'Bawa uang tunai untuk sumbangan (bisa mencapai jutaan untuk keluarga dekat)',
      'Siapkan mental untuk melihat penyembelihan hewan',
      'Hormati setiap prosesi meski berbeda dengan kepercayaan Anda',
      'Bawa kamera jika ingin dokumentasi, tapi selalu minta izin'
    ],
    commonMistakes: [
      'Terkejut atau menunjukkan ketidaknyamanan saat penyembelihan kerbau',
      'Tidak memahami bahwa upacara ini sangat mahal dan bergengsi',
      'Meninggalkan acara terlalu cepat',
      'Tidak menghormati tau-tau dan simbol-simbol adat',
      'Membandingkan dengan upacara pemakaman di daerah lain'
    ],
    relatedTraditions: ['rambu-solo', 'ukiran-toraja']
  },
  {
    id: 'balinese-ngaben',
    title: 'Menghadiri Upacara Ngaben di Bali',
    description: 'Panduan menghadiri upacara kremasi Ngaben',
    region: 'Bali',
    category: 'funeral',
    difficulty: 'intermediate',
    context: 'Anda diundang menghadiri upacara Ngaben (kremasi) di Bali. Berbeda dengan pemakaman pada umumnya, Ngaben adalah upacara yang penuh sukacita karena dipercaya sebagai pembebasan jiwa.',
    learningObjectives: [
      'Memahami makna Ngaben dalam kepercayaan Hindu Bali',
      'Mengetahui pakaian yang tepat',
      'Belajar etika saat prosesi berlangsung',
      'Memahami mengapa Ngaben adalah perayaan'
    ],
    steps: [
      {
        id: 'step-1',
        order: 1,
        title: 'Persiapan Mental & Pakaian',
        description: 'Memahami esensi Ngaben dan berpakaian yang pantas',
        doList: [
          'Kenakan pakaian adat Bali (kebaya dan kain untuk wanita, safari dan udeng untuk pria)',
          'Gunakan selendang/sabuk (saput) di pinggang',
          'Siapkan mental bahwa ini adalah upacara sukacita, bukan dukacita',
          'Datang dengan hati yang iklas dan tenang',
          'Bawa persembahan (canang) jika diminta'
        ],
        dontList: [
          'Jangan menangis berlebihan (ini perayaan pembebasan jiwa)',
          'Hindari pakaian serba hitam',
          'Jangan datang dalam keadaan kotor atau tidak suci',
          'Hindari membawa energi negatif'
        ],
        keyPhrases: [
          {
            phrase: 'Om Swastyastu',
            meaning: 'Salam dalam agama Hindu Bali',
            pronunciation: 'Om Swas-tyas-tu',
            whenToUse: 'Saat menyapa atau datang ke upacara'
          }
        ]
      },
      {
        id: 'step-2',
        order: 2,
        title: 'Mengikuti Prosesi Arak-arakan',
        description: 'Menyaksikan prosesi arak-arakan bade (wadah jenazah)',
        doList: [
          'Ikuti arak-arakan dengan khidmat',
          'Hormati gamelan dan tarian yang mengiringi',
          'Berdiri atau duduk dengan sopan saat prosesi lewat',
          'Boleh membantu mengangkat bade jika dipersilakan',
          'Ikuti arahan pemangku (pendeta)'
        ],
        dontList: [
          'Jangan memotong jalan prosesi',
          'Hindari menghalangi jalannya bade',
          'Jangan bersikap sedih berlebihan',
          'Hindari memotret tanpa izin saat prosesi sakral'
        ]
      },
      {
        id: 'step-3',
        order: 3,
        title: 'Penyucian & Pembakaran',
        description: 'Menyaksikan prosesi penyucian dan pembakaran',
        doList: [
          'Duduk di area yang disediakan untuk umum',
          'Ikuti doa-doa yang dipimpin pemangku',
          'Tetap tenang saat api menyala',
          'Pahami ini adalah momen pembebasan jiwa ke alam suci',
          'Berikan doa tulus untuk yang meninggal'
        ],
        dontList: [
          'Jangan terlalu dekat dengan area pembakaran',
          'Hindari membuat keributan',
          'Jangan meninggalkan acara sebelum selesai',
          'Hindari menunjukkan rasa takut atau jijik'
        ]
      },
      {
        id: 'step-4',
        order: 4,
        title: 'Setelah Upacara',
        description: 'Mengikuti ritual penutup dan jamuan',
        doList: [
          'Ikuti ritual penyucian diri jika ada',
          'Terima jamuan yang disediakan',
          'Ucapkan belasungkawa dengan bahasa yang tepat',
          'Bantu bersih-bersih jika diperlukan',
          'Pamit dengan sopan'
        ],
        dontList: [
          'Jangan langsung pulang tanpa pamit',
          'Hindari menolak jamuan (dianggap tidak sopan)',
          'Jangan membandingkan dengan upacara daerah lain',
          'Hindari kritik terhadap adat'
        ],
        keyPhrases: [
          {
            phrase: 'Om Santih Santih Santih Om',
            meaning: 'Doa kedamaian dalam Hindu',
            whenToUse: 'Doa penutup atau saat berdoa untuk yang meninggal'
          }
        ]
      }
    ],
    tips: [
      'Ngaben sering kali adalah perayaan besar dan meriah, bukan suasana duka',
      'Fotografer biasanya diperbolehkan, tapi tanyakan dulu',
      'Bawa air minum sendiri karena upacara bisa panjang',
      'Jika tidak paham prosesi, ikuti apa yang dilakukan orang lain',
      'Hormati setiap tahapan, semuanya memiliki makna spiritual'
    ],
    commonMistakes: [
      'Datang dengan pakaian yang tidak sesuai (tanpa kain/saput)',
      'Bersikap sedih berlebihan (ini adalah perayaan)',
      'Mengganggu prosesi dengan mengambil foto tanpa izin',
      'Pulang sebelum upacara selesai',
      'Tidak memahami bahwa Ngaben adalah upacara pembebasan yang sukacita'
    ],
    relatedTraditions: ['ngaben', 'gamelan']
  },
  
  {
    id: 'aceh-peusijuek',
    title: 'Mengikuti Upacara Peusijuek di Aceh',
    description: 'Panduan menghadiri upacara adat Islami Peusijuek (penyiraman)',
    region: 'Aceh',
    category: 'religious',
    difficulty: 'intermediate',
    context: 'Anda diundang ke upacara Peusijuek di Aceh. Peusijuek adalah upacara adat Aceh yang memadukan tradisi lokal dengan nilai-nilai Islam, dilakukan untuk berbagai momen penting seperti pernikahan, naik rumah baru, berangkat haji, atau syukuran.',
    learningObjectives: [
      'Memahami makna Peusijuek dalam tradisi Islam Aceh',
      'Mengetahui pakaian sesuai dengan syariat',
      'Belajar etika dalam upacara adat Islami',
      'Memahami filosofi padi dan air dalam ritual'
    ],
    steps: [
      {
        id: 'step-1',
        order: 1,
        title: 'Persiapan: Pakaian & Perlengkapan',
        description: 'Berpakaian sesuai syariat Islam dan budaya Aceh',
        doList: [
          'Wanita: kenakan baju kurung atau baju muslim tertutup dengan jilbab/hijab yang menutupi dada',
          'Pria: kenakan baju koko atau kemeja dengan celana panjang (boleh memakai peci)',
          'Pastikan pakaian sopan, tidak ketat, dan menutup aurat',
          'Siapkan amplop berisi uang (nominal genap dan sopan)',
          'Bawa doa dan niat yang baik'
        ],
        dontList: [
          'Jangan memakai pakaian yang terbuka atau ketat',
          'Wanita jangan keluar rumah tanpa jilbab (sangat tidak sopan di Aceh)',
          'Hindari pakaian dengan gambar yang tidak Islami',
          'Jangan memakai parfum atau wewangian yang menyengat (terutama wanita)',
          'Hindari pakaian dengan warna terlalu mencolok'
        ],
        keyPhrases: [
          {
            phrase: 'Assalamualaikum warahmatullahi wabarakatuh',
            meaning: 'Salam Islam lengkap',
            pronunciation: 'As-sa-la-mu-a-lai-kum wa-rah-ma-tul-la-hi wa-ba-ra-ka-tuh',
            whenToUse: 'Saat datang dan bertemu tuan rumah'
          },
          {
            phrase: 'Alhamdulillah, meuah reuzeki',
            meaning: 'Alhamdulillah, semoga diberi rezeki',
            pronunciation: 'Al-ham-du-lil-lah, meu-ah reu-ze-ki',
            whenToUse: 'Ucapan syukur dan doa kepada tuan rumah'
          }
        ]
      },
      {
        id: 'step-2',
        order: 2,
        title: 'Kedatangan & Pemisahan Tempat Duduk',
        description: 'Datang tepat waktu dan duduk sesuai dengan area yang ditentukan',
        doList: [
          'Datang tepat waktu (jangan terlambat untuk acara sakral)',
          'Ucapkan salam dengan mengangkat tangan (tidak berjabat tangan lintas gender)',
          'Pria dan wanita duduk terpisah sesuai area yang ditentukan',
          'Duduk bersila dengan sopan di atas tikar',
          'Letakkan amplop di tempat yang sudah disediakan'
        ],
        dontList: [
          'Jangan berjabat tangan dengan lawan jenis (tidak sesuai syariat)',
          'Hindari duduk dengan kaki lurus ke arah orang atau ke tengah',
          'Jangan duduk di area yang bukan untuk gender Anda',
          'Hindari berbicara keras atau mengobrol saat acara berlangsung',
          'Jangan melewati orang yang sedang duduk tanpa izin'
        ],
        keyPhrases: [
          {
            phrase: 'Tabeuk, jih nyan',
            meaning: 'Permisi, lewat sini',
            pronunciation: 'Ta-be-uk, jih nyan',
            whenToUse: 'Saat melewati orang yang sedang duduk'
          }
        ]
      },
      {
        id: 'step-3',
        order: 3,
        title: 'Prosesi Peusijuek (Penyiraman)',
        description: 'Mengikuti ritual penyiraman dengan khidmat',
        doList: [
          'Duduk dengan khusyuk saat teungku (ulama) memimpin doa',
          'Ikuti bacaan doa atau dzikir dengan hikmat',
          'Saat giliran disirami, terima dengan tangan kanan',
          'Pahami bahwa air beras campur dedaunan melambangkan kesejukan dan berkah',
          'Biarkan air mengalir di tangan, lalu usap ke wajah dan kepala'
        ],
        dontList: [
          'Jangan menolak saat disirami (bagian dari berkah)',
          'Hindari mengusap air dengan tangan kiri',
          'Jangan berdiri atau bergerak saat prosesi berlangsung',
          'Hindari memotret dengan flash saat doa dipimpin',
          'Jangan berbicara atau tertawa saat ritual sakral'
        ],
        keyPhrases: [
          {
            phrase: 'Amin ya Rabbal alamin',
            meaning: 'Amin ya Allah Tuhan semesta alam',
            pronunciation: 'A-min ya Rab-bal a-la-min',
            whenToUse: 'Saat mengamini doa yang dibacakan teungku'
          },
          {
            phrase: 'Subhanallah, Alhamdulillah, Allahuakbar',
            meaning: 'Maha Suci Allah, Segala puji bagi Allah, Allah Maha Besar',
            whenToUse: 'Dzikir yang sering dibaca dalam upacara'
          }
        ]
      },
      {
        id: 'step-4',
        order: 4,
        title: 'Makan Bersama (Buet Jame)',
        description: 'Makan hidangan tradisional Aceh dengan tata cara Islam',
        doList: [
          'Cuci tangan sebelum makan',
          'Duduk melingkar di sekeliling hidangan (biasanya di atas dulang/nampan besar)',
          'Ucapkan "Bismillahirrahmanirrahim" sebelum makan',
          'Makan dengan tangan kanan, ambil yang dekat dengan Anda',
          'Makan dengan sopan dan tidak berlebihan'
        ],
        dontList: [
          'Jangan makan dengan tangan kiri',
          'Hindari mengambil makanan yang jauh dari posisi Anda',
          'Jangan buang-buang makanan (sangat tidak sopan)',
          'Hindari makan sambil berdiri',
          'Jangan lupa ucapkan "Alhamdulillah" setelah selesai makan'
        ],
        keyPhrases: [
          {
            phrase: 'Bismillahirrahmanirrahim',
            meaning: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang',
            whenToUse: 'Sebelum memulai makan'
          },
          {
            phrase: 'Alhamdulillahirobbil alamin',
            meaning: 'Segala puji bagi Allah Tuhan semesta alam',
            whenToUse: 'Setelah selesai makan'
          }
        ]
      },
      {
        id: 'step-5',
        order: 5,
        title: 'Pamit & Ucapan Doa',
        description: 'Berpamitan dengan sopan dan mendoakan tuan rumah',
        doList: [
          'Tunggu hingga acara selesai sebelum pamit',
          'Salim (cium tangan) orang tua atau tokoh yang dihormati (sesama jenis)',
          'Ucapkan terima kasih dan doa untuk tuan rumah',
          'Pamit dengan mengucapkan salam',
          'Keluar dengan tenang tanpa membuat keributan'
        ],
        dontList: [
          'Jangan pulang sebelum acara selesai (sangat tidak sopan)',
          'Hindari berjabat tangan lintas gender',
          'Jangan lupa mengucapkan salam saat pamit',
          'Hindari sikap terburu-buru yang terkesan tidak menghargai',
          'Jangan kritik atau komentar negatif tentang adat'
        ],
        keyPhrases: [
          {
            phrase: 'Waalaikumsalam warahmatullahi wabarakatuh',
            meaning: 'Wa\'alaikumussalam warahmatullahi wabarakatuh (jawaban salam)',
            pronunciation: 'Wa-a-lai-kum-sa-lam wa-rah-ma-tul-la-hi wa-ba-ra-ka-tuh',
            whenToUse: 'Saat menjawab salam'
          },
          {
            phrase: 'Mulia get keu droeuh nyan',
            meaning: 'Terima kasih banyak',
            pronunciation: 'Mu-li-a get keu droe-uh nyan',
            whenToUse: 'Saat berterima kasih kepada tuan rumah'
          }
        ]
      }
    ],
    tips: [
      'Aceh sangat menjunjung tinggi syariat Islam, pastikan Anda menghormati aturan tersebut',
      'Peusijuek bisa dilakukan untuk berbagai acara: pernikahan, naik rumah baru, khitanan, berangkat haji, dll',
      'Air beras dengan dedaunan (on atra/bu leukat) melambangkan kesejukan, berkah, dan penolak bala',
      'Teungku (ulama) memiliki peran penting, dengarkan dan hormati setiap kata-katanya',
      'Padi kuning dalam upacara melambangkan kemakmuran dan kesuburan',
      'Jika ragu tentang etika, tanyakan kepada sesama tamu atau panitia'
    ],
    commonMistakes: [
      'Wanita tidak memakai jilbab atau pakaian terbuka (sangat tidak sopan di Aceh)',
      'Berjabat tangan dengan lawan jenis (tidak sesuai syariat)',
      'Duduk tidak sopan atau kaki mengarah ke tengah/orang lain',
      'Mengambil foto tanpa izin saat prosesi sakral berlangsung',
      'Tidak menghormati pemisahan area pria dan wanita',
      'Pulang sebelum acara selesai tanpa izin',
      'Makan dengan tangan kiri atau tidak membaca doa'
    ],
    relatedTraditions: ['saman-aceh', 'meuseukat']
  }
];

// Helper function to get scenarios by category
export const getScenariosByCategory = (category: CulturalScenario['category']) => {
  return culturalScenarios.filter(s => s.category === category);
};

// Helper function to get scenarios by difficulty
export const getScenariosByDifficulty = (difficulty: CulturalScenario['difficulty']) => {
  return culturalScenarios.filter(s => s.difficulty === difficulty);
};

// Helper function to get scenarios by region
export const getScenariosByRegion = (region: string) => {
  return culturalScenarios.filter(s =>
    s.region.toLowerCase().includes(region.toLowerCase())
  );
};
