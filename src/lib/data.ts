import type { Region, TimelineEvent, Tradition, TimelineEra } from './types';

const eraColors: Record<TimelineEra, string> = {
  kerajaan: 'bg-yellow-900/10 border-yellow-700',
  kolonial: 'bg-gray-700/10 border-gray-500',
  kemerdekaan: 'bg-red-900/10 border-red-700', // This era is no longer used in the new timeline, but kept for type consistency
  modern: 'bg-blue-800/10 border-blue-600',
};

export const timelineData: (TimelineEvent & { colorClass: string })[] = [
  {
    id: 'sriwijaya-golden-age',
    year: 'Abad ke-7',
    era: 'kerajaan',
    title: 'Sriwijaya: Kejayaan Maritim',
    slug: 'sriwijaya-golden-age',
    description: 'Pusat pembelajaran Buddha terbesar dan kekuatan maritim. Sungai Musi menjadi "jalan tol" internasional.',
    fullDescription: 'Pada Babak Kejayaan Kerajaan, Nusantara adalah pusat perdagangan dan spiritualitas Asia. Di Sumatera, Kerajaan Sriwijaya bangkit sebagai kekuatan maritim utama. Mereka menguasai jalur perdagangan dan menjadi pusat pembelajaran agama Buddha yang menarik para sarjana dari seluruh Asia. Sungai Musi di Palembang menjadi urat nadi perdagangan internasional yang sibuk.',
    keyFigures: ['Candi Muara Takus', 'Prasasti Kedukan Bukit', 'Bahasa Melayu Kuno'],
    relatedEvents: ['Pusat pembelajaran Buddha terbesar di Asia Tenggara.', 'Menguasai jalur perdagangan maritim Selat Malaka.', 'Cikal bakal Bahasa Indonesia modern.'],
    imageId: 'sriwijaya-ship',
  },
  {
    id: 'majapahit-golden-age',
    year: 'Abad 8-15',
    era: 'kerajaan',
    title: 'Mataram Kuno & Majapahit: Mahakarya Agraris',
    slug: 'majapahit-golden-age',
    description: 'Agraris yang kuat dan toleransi beragama (Hindu-Buddha). Puncaknya pada Sumpah Palapa Gajah Mada.',
    fullDescription: 'Di Jawa, kerajaan-kerajaan agraris seperti Mataram Kuno dan Majapahit membangun peradaban yang luar biasa. Mereka menunjukkan toleransi beragama yang tinggi, dengan harmonisnya budaya Hindu dan Buddha. Puncak kejayaan dicapai pada masa Majapahit dengan Sumpah Palapa oleh Mahapatih Gajah Mada, sebuah visi untuk menyatukan Nusantara.',
    keyFigures: ['Candi Borobudur', 'Candi Prambanan', 'Seni Wayang Kulit'],
    relatedEvents: ['Mencapai swasembada pangan dengan sistem agraris yang maju.', 'Melahirkan mahakarya arsitektur yang diakui dunia.', 'Sumpah Palapa sebagai visi penyatuan Nusantara.'],
    imageId: 'majapahit-temple',
  },
  {
    id: 'gowa-tallo-golden-age',
    year: 'Abad ke-16',
    era: 'kerajaan',
    title: 'Gowa-Tallo: Penjelajah Laut dari Timur',
    slug: 'gowa-tallo-golden-age',
    description: 'Ketangguhan pelaut Bugis-Makassar dengan kapal Phinisi. Hukum laut "Amanna Gappa" lahir di sini.',
    fullDescription: 'Di Sulawesi, Kerajaan Gowa-Tallo dikenal dengan ketangguhan para pelaut Bugis-Makassar. Dengan kapal Phinisi yang legendaris, mereka menjelajahi samudra hingga ke Madagaskar dan Australia. Mereka juga mengembangkan hukum laut pertama di Nusantara, yang dikenal sebagai "Amanna Gappa", yang mengatur perdagangan dan pelayaran.',
    keyFigures: ['Kapal Phinisi', 'Hukum Laut Amanna Gappa'],
    relatedEvents: ['Menjadi kekuatan maritim dominan di Indonesia bagian timur.', 'Menciptakan salah satu sistem hukum maritim tertua di dunia.'],
    imageId: 'phinisi-ship',
  },
  {
    id: 'maluku-colonial-era',
    year: 'Abad 16-18',
    era: 'kolonial',
    title: 'Maluku: Perebutan Jalur Rempah',
    slug: 'maluku-colonial-era',
    description: 'Titik nol jalur rempah dunia. Cengkih dan pala lebih berharga dari emas, memicu kedatangan bangsa Eropa.',
    fullDescription: 'Memasuki Babak Perdagangan & Akulturasi, kedatangan bangsa Eropa mengubah wajah Nusantara. Maluku, yang dijuluki "Kepulauan Rempah-Rempah", menjadi pusat perhatian dunia. Cengkih dan pala yang tumbuh subur di sini memiliki nilai yang melebihi emas, memicu persaingan sengit antara Portugis, Spanyol, dan Belanda untuk memonopoli perdagangan.',
    keyFigures: ['Benteng Belgica', 'Benteng Victoria'],
    relatedEvents: ['Menjadi pusat perdagangan rempah global.', 'Pembangunan benteng-benteng kolonial yang megah.', 'Percampuran budaya Eropa dengan tradisi lokal.'],
    imageId: 'maluku-fort',
  },
  {
    id: 'batavia-colonial-era',
    year: 'Abad 17-19',
    era: 'kolonial',
    title: 'Batavia: Kuali Peleburan Budaya',
    slug: 'batavia-colonial-era',
    description: 'Melting pot budaya Sunda, Jawa, Arab, Tionghoa, dan Eropa. Lahirnya Suku Betawi dan Gambang Kromong.',
    fullDescription: 'Di bawah kendali VOC, Batavia (kini Jakarta) menjadi sebuah "melting pot" atau kuali peleburan budaya. Orang dari berbagai etnis seperti Sunda, Jawa, Arab, Tionghoa, Portugis, dan Belanda hidup berdampingan. Interaksi intensif ini melahirkan budaya baru yang unik, yaitu budaya Betawi, dengan seni Gambang Kromong yang merupakan perpaduan gamelan dan musik Tionghoa.',
    keyFigures: ['Kota Tua Jakarta', 'Gambang Kromong', 'Suku Betawi'],
    relatedEvents: ['Lahirnya budaya Betawi sebagai hasil akulturasi.', 'Pusat pemerintahan dan perdagangan VOC di Asia.', 'Arsitektur kolonial yang khas di Kota Tua.'],
    imageId: 'batavia-old-town',
  },
  {
    id: 'aceh-colonial-era',
    year: 'Abad 17-19',
    era: 'kolonial',
    title: 'Aceh: Serambi Mekkah & Perlawanan',
    slug: 'aceh-colonial-era',
    description: 'Pintu gerbang Islam dan perdagangan lada. Seni Tari Saman yang mendunia lahir sebagai media dakwah.',
    fullDescription: 'Kesultanan Aceh berhasil menjadi kekuatan dominan di ujung barat Nusantara, dikenal sebagai "Serambi Mekkah" karena perannya sebagai pintu gerbang Islam di wilayah ini. Aceh juga merupakan pusat perdagangan lada yang penting. Di tengah perjuangan melawan kolonialisme, lahir seni Tari Saman yang kini mendunia, digunakan sebagai media dakwah dan untuk mempererat kekompakan masyarakat.',
    keyFigures: ['Tari Saman'],
    relatedEvents: ['Menjadi pusat penyebaran Islam di Nusantara.', 'Pusat perdagangan lada dunia.', 'Perlawanan gigih terhadap kolonialisme Belanda.'],
    imageId: 'aceh-mosque',
  },
  {
    id: 'bali-modern-era',
    year: 'Abad ke-20',
    era: 'modern',
    title: 'Bali: Transformasi Spiritual ke Digital',
    slug: 'bali-modern-era',
    description: 'Dari sistem Subak (UNESCO) menjadi ikon pariwisata dunia dan hub bagi pekerja kreatif digital.',
    fullDescription: 'Memasuki Babak Modern & Digital, Indonesia merawat tradisi dengan cara baru. Bali, yang dulunya dikenal dengan masyarakat agraris dan sistem irigasi Subak yang diakui UNESCO, bertransformasi menjadi ikon pariwisata global. Kini, Bali juga menjadi magnet bagi para "digital nomad" dan pekerja kreatif dari seluruh dunia, menciptakan perpaduan unik antara spiritualitas dan gaya hidup modern.',
    keyFigures: ['Sistem Subak', 'Industri Pariwisata', 'Komunitas Digital Nomad'],
    relatedEvents: ['Diakui sebagai destinasi wisata terbaik dunia.', 'Menjadi pusat bagi para pekerja jarak jauh (remote worker).', 'Menjaga keseimbangan antara tradisi dan modernitas.'],
    imageId: 'bali-modern',
  },
  {
    id: 'yogyakarta-modern-era',
    year: 'Abad ke-21',
    era: 'modern',
    title: 'Yogyakarta: Merawat Tradisi, Merangkul Seni',
    slug: 'yogyakarta-modern-era',
    description: 'Mempertahankan tradisi Keraton tetapi menjadi pusat seni kontemporer. Batik berevolusi menjadi fesyen modern.',
    fullDescription: 'Yogyakarta tetap menjadi jantung budaya Jawa dengan tradisi Keraton yang kental. Namun, kota ini juga merangkul perubahan dengan menjadi pusat seni kontemporer terkemuka di Asia Tenggara, salah satunya melalui acara ArtJog. Di sini, seni tradisional seperti batik tidak hanya dilestarikan, tetapi juga berevolusi menjadi produk fesyen modern yang diakui secara global.',
    keyFigures: ['Keraton Yogyakarta', 'ArtJog', 'Industri Batik Modern'],
    relatedEvents: ['Pusat pendidikan dan seni kontemporer.', 'Evolusi batik dari kain tradisional menjadi produk fesyen global.', 'Menjadi model pelestarian budaya yang hidup dan dinamis.'],
    imageId: 'yogyakarta-art',
  },
  {
    id: 'ikn-modern-era',
    year: 'Masa Depan',
    era: 'modern',
    title: 'IKN: Visi Masa Depan Forest City',
    slug: 'ikn-modern-era',
    description: 'Konsep Forest City yang menggabungkan kearifan lokal Dayak dengan teknologi Smart City yang futuristik.',
    fullDescription: 'Pembangunan Ibu Kota Nusantara (IKN) di Kalimantan Timur adalah visi ambisius Indonesia untuk masa depan. Dengan konsep "Forest City", IKN bertujuan untuk menggabungkan kearifan lokal suku Dayak yang sangat menghormati alam, dengan teknologi "Smart City" yang futuristik dan ramah lingkungan. Ini adalah proyek untuk menciptakan pusat pemerintahan baru yang berkelanjutan.',
    keyFigures: ['Konsep Forest City', 'Teknologi Smart City'],
    relatedEvents: ['Pemindahan ibu kota dari Jakarta.', 'Upaya pembangunan yang berwawasan lingkungan dan berkelanjutan.', 'Integrasi teknologi modern dengan kearifan lokal.'],
    imageId: 'ikn-nusantara',
  },
  {
    id: 'papua-modern-era',
    year: 'Masa Kini',
    era: 'modern',
    title: 'Papua: Harmoni Alam & Pembangunan',
    slug: 'papua-modern-era',
    description: 'Pembangunan infrastruktur membuka akses tanpa menghilangkan tradisi bakar batu dan noken.',
    fullDescription: 'Papua hari ini adalah contoh bagaimana pembangunan dan tradisi dapat berjalan beriringan. Proyek infrastruktur seperti Jalan Trans Papua membuka akses ke daerah-daerah terpencil, sementara tradisi kuno seperti upacara bakar batu dan kerajinan Noken (tas tradisional Papua yang diakui UNESCO) tetap hidup. Papua juga telah membuktikan kemampuannya menjadi tuan rumah event berskala nasional seperti Pekan Olahraga Nasional (PON).',
    keyFigures: ['Jalan Trans Papua', 'Tradisi Bakar Batu', 'Noken (Warisan UNESCO)'],
    relatedEvents: ['Peningkatan konektivitas melalui pembangunan infrastruktur.', 'Pelestarian tradisi di tengah modernisasi.', 'Menjadi tuan rumah event olahraga nasional.'],
    imageId: 'papua-modern',
  },
].map(event => ({
  ...event,
  colorClass: eraColors[event.era],
}));


export const regionsData: Region[] = [
    {
        id: 'sumatera',
        name: 'Sumatera',
        description: 'Jelajahi kekayaan alam dan budaya Melayu yang kental di pulau paling barat di Indonesia.',
        imageId: 'sumatera-region',
        coordinates: [0.5897, 101.3431],
        details: {
            history: 'Sumatera adalah rumah bagi kerajaan maritim besar seperti Sriwijaya yang menguasai perdagangan di Selat Malaka selama berabad-abad. Pulau ini juga menjadi salah satu gerbang utama masuknya Islam ke Nusantara.',
            folklore: 'Legenda Malin Kundang, anak durhaka yang dikutuk menjadi batu, adalah salah satu cerita rakyat paling terkenal dari Sumatera Barat, mengajarkan pentingnya menghormati orang tua.',
            figures: [
                { name: 'Tuanku Imam Bonjol', description: 'Ulama, pemimpin, dan pejuang yang berperang melawan Belanda dalam Perang Padri.', imageId: 'imam-bonjol' },
                { name: 'Sutan Sjahrir', description: 'Seorang intelektual, politikus, dan perdana menteri pertama Indonesia.', imageId: 'sutan-sjahrir' },
                { name: 'Chairil Anwar', description: 'Penyair terkemuka Indonesia, pelopor Angkatan \'45 dalam sastra Indonesia.', imageId: 'chairil-anwar' },
            ],
            cuisine: ['Rendang', 'Pempek', 'Gulai Ikan Patin', 'Bika Ambon'],
            cuisineImageId: 'rendang',
            clothing: 'Ulos (Batak), Songket (Palembang)',
            clothingImageId: 'ulos',
            traditions: ['Upacara Tabuik', 'Lompat Batu Nias'],
            traditionImageId: 'lompat-batu',
            quiz: [
                {
                    question: 'Kerajaan maritim besar yang pernah berkuasa di Sumatera adalah...',
                    options: ['Majapahit', 'Sriwijaya', 'Mataram Kuno', 'Gowa-Tallo'],
                    correctAnswer: 'Sriwijaya',
                },
                {
                    question: 'Legenda terkenal dari Sumatera Barat tentang anak durhaka adalah...',
                    options: ['Roro Jonggrang', 'Sangkuriang', 'Malin Kundang', 'Timun Mas'],
                    correctAnswer: 'Malin Kundang',
                },
                {
                    question: 'Siapakah pahlawan yang memimpin Perang Padri melawan Belanda?',
                    options: ['Sutan Sjahrir', 'Tuanku Imam Bonjol', 'Chairil Anwar', 'Gajah Mada'],
                    correctAnswer: 'Tuanku Imam Bonjol',
                },
                {
                    question: 'Makanan khas dari Palembang yang terbuat dari ikan dan sagu adalah...',
                    options: ['Rendang', 'Gulai Ikan Patin', 'Bika Ambon', 'Pempek'],
                    correctAnswer: 'Pempek',
                },
                {
                    question: 'Kain tradisional khas suku Batak disebut...',
                    options: ['Songket', 'Ulos', 'Batik', 'Kebaya'],
                    correctAnswer: 'Ulos',
                }
            ]
        }
    },
    {
        id: 'jawa',
        name: 'Jawa',
        description: 'Selami jantung peradaban kuno, pusat pemerintahan, dan dinamika budaya modern Indonesia.',
        imageId: 'jawa-region',
        coordinates: [-7.7956, 110.3695],
        details: {
            history: 'Pulau Jawa menjadi pusat dari kerajaan-kerajaan agraris besar seperti Mataram Kuno, Majapahit, hingga Mataram Islam. Peninggalan berupa candi-candi megah menjadi saksi bisu kejayaan masa lalu.',
            folklore: 'Kisah Roro Jonggrang yang menceritakan asal-usul Candi Prambanan adalah dongeng populer tentang cinta, pengkhianatan, dan kekuatan gaib.',
            figures: [
                { name: 'Gajah Mada', description: 'Mahapatih Majapahit yang terkenal dengan Sumpah Palapa untuk menyatukan Nusantara.', imageId: 'gajah-mada' },
                { name: 'Pangeran Diponegoro', description: 'Pahlawan nasional yang memimpin Perang Jawa melawan penjajah Belanda.', imageId: 'diponegoro' },
                { name: 'R.A. Kartini', description: 'Pahlawan nasional dan pelopor emansipasi wanita di Indonesia.', imageId: 'kartini' },
            ],
            cuisine: ['Gudeg', 'Rawon', 'Sate Madura', 'Nasi Liwet'],
            cuisineImageId: 'gudeg',
            clothing: 'Batik, Kebaya',
            clothingImageId: 'batik-kebaya',
            traditions: ['Sekaten', 'Upacara Kasada Bromo'],
            traditionImageId: 'kasada-bromo',
            quiz: [
                {
                    question: 'Candi Buddha terbesar di dunia yang terletak di Jawa adalah...',
                    options: ['Candi Prambanan', 'Candi Borobudur', 'Candi Sewu', 'Candi Mendut'],
                    correctAnswer: 'Candi Borobudur',
                },
                {
                    question: 'Siapakah mahapatih Majapahit yang terkenal dengan Sumpah Palapa?',
                    options: ['Hayam Wuruk', 'Raden Wijaya', 'Gajah Mada', 'Airlangga'],
                    correctAnswer: 'Gajah Mada',
                },
                {
                    question: 'Kisah legenda yang berhubungan dengan asal-usul Candi Prambanan adalah...',
                    options: ['Malin Kundang', 'Roro Jonggrang', 'Sangkuriang', 'Lutung Kasarung'],
                    correctAnswer: 'Roro Jonggrang',
                },
                {
                    question: 'Makanan khas Yogyakarta yang terbuat dari nangka muda adalah...',
                    options: ['Rawon', 'Sate Madura', 'Gudeg', 'Nasi Liwet'],
                    correctAnswer: 'Gudeg',
                },
                {
                    question: 'Upacara adat yang diselenggarakan oleh suku Tengger di Bromo adalah...',
                    options: ['Sekaten', 'Grebeg Maulud', 'Nyepi', 'Kasada'],
                    correctAnswer: 'Kasada',
                }
            ]
        }
    },
    {
        id: 'kalimantan',
        name: 'Kalimantan',
        description: 'Temukan keajaiban hutan hujan tropis, keanekaragaman hayati, dan kearifan lokal suku Dayak.',
        imageId: 'kalimantan-region',
        coordinates: [-0.02, 113.9213],
        details: {
            history: 'Kalimantan memiliki sejarah kerajaan Hindu seperti Kutai Kartanegara, kerajaan tertua di Indonesia. Hutan lebatnya menyimpan banyak misteri dan menjadi jalur perdagangan penting di masa lalu.',
            folklore: 'Legenda Batu Menangis dari Kalimantan Barat menceritakan tentang seorang gadis cantik yang durhaka pada ibunya dan dikutuk menjadi batu yang terus mengeluarkan air mata.',
            figures: [
                { name: 'Pangeran Antasari', description: 'Pahlawan Nasional Indonesia dari Kesultanan Banjar yang memimpin perlawanan terhadap Belanda.', imageId: 'antasari' },
                { name: 'Tjilik Riwut', description: 'Pahlawan Nasional, gubernur pertama Kalimantan Tengah, dan tokoh adat Dayak.', imageId: 'tjilik-riwut' },
            ],
            cuisine: ['Soto Banjar', 'Ayam Cincane', 'Bubur Pedas Sambas'],
            cuisineImageId: 'soto-banjar',
            clothing: 'Baju adat Dayak',
            clothingImageId: 'dayak-clothing',
            traditions: ['Upacara adat Erau', 'Tato tradisional Dayak'],
            traditionImageId: 'erau-ceremony',
            quiz: [
                {
                    question: 'Kerajaan Hindu tertua di Indonesia yang terletak di Kalimantan adalah...',
                    options: ['Sriwijaya', 'Majapahit', 'Kutai', 'Tarumanegara'],
                    correctAnswer: 'Kutai',
                },
                {
                    question: 'Siapakah pahlawan nasional dari Kesultanan Banjar yang melawan Belanda?',
                    options: ['Tjilik Riwut', 'Pangeran Antasari', 'Sultan Hasanuddin', 'Pattimura'],
                    correctAnswer: 'Pangeran Antasari',
                },
                {
                    question: 'Suku asli terbesar yang mendiami pulau Kalimantan adalah suku...',
                    options: ['Batak', 'Minang', 'Asmat', 'Dayak'],
                    correctAnswer: 'Dayak',
                },
                {
                    question: 'Makanan berkuah khas dari Banjarmasin adalah...',
                    options: ['Ayam Cincane', 'Bubur Pedas', 'Soto Banjar', 'Rawon'],
                    correctAnswer: 'Soto Banjar',
                },
                {
                    question: 'Upacara adat besar yang diselenggarakan oleh Kesultanan Kutai Kartanegara adalah...',
                    options: ['Erau', 'Ngaben', 'Rambu Solo', 'Sekaten'],
                    correctAnswer: 'Erau',
                }
            ]
        }
    },
    {
        id: 'sulawesi',
        name: 'Sulawesi',
        description: 'Jelajahi pulau dengan bentuk unik, dari surga bawah laut hingga ritual pemakaman yang menakjubkan.',
        imageId: 'sulawesi-region',
        coordinates: [-1.42, 120.46],
        details: {
            history: 'Sulawesi dikenal sebagai rumah bagi para pelaut ulung Bugis-Makassar dari Kerajaan Gowa-Tallo. Mereka mengarungi samudra dengan kapal Phinisi yang legendaris.',
            folklore: 'La Galigo adalah sebuah wiracarita mitologis dari peradaban Bugis kuno, salah satu karya sastra terpanjang di dunia yang menceritakan asal-usul manusia.',
            figures: [
                { name: 'Sultan Hasanuddin', description: 'Raja Gowa ke-16 yang dijuluki "Ayam Jantan dari Timur" oleh Belanda karena keberaniannya.', imageId: 'hasanuddin' },
                { name: 'Emmy Saelan', description: 'Pahlawan wanita dari Sulawesi Selatan yang berjuang dalam perang kemerdekaan.', imageId: 'emmy-saelan' },
            ],
            cuisine: ['Coto Makassar', 'Pallubasa', 'Sop Konro'],
            cuisineImageId: 'coto-makassar',
            clothing: 'Baju Bodo',
            clothingImageId: 'baju-bodo',
            traditions: ['Rambu Solo (upacara pemakaman Toraja)', 'Pembuatan Kapal Phinisi'],
            traditionImageId: 'rambu-solo',
            quiz: [
                {
                    question: 'Pelaut ulung dari Sulawesi yang terkenal dengan kapal Phinisi berasal dari suku...',
                    options: ['Minahasa', 'Toraja', 'Bugis-Makassar', 'Mandar'],
                    correctAnswer: 'Bugis-Makassar',
                },
                {
                    question: 'Sultan dari Kerajaan Gowa yang dijuluki "Ayam Jantan dari Timur" adalah...',
                    options: ['Sultan Agung', 'Sultan Baabullah', 'Sultan Hasanuddin', 'Sultan Iskandar Muda'],
                    correctAnswer: 'Sultan Hasanuddin',
                },
                {
                    question: 'Upacara pemakaman yang megah dan unik di Sulawesi dikenal dengan nama...',
                    options: ['Ngaben', 'Rambu Solo', 'Pukul Sapu', 'Bakar Batu'],
                    correctAnswer: 'Kunci Jawaban: Rambu Solo',
                },
                {
                    question: 'Makanan khas Makassar yang berkuah kental dan kaya rempah adalah...',
                    options: ['Sop Konro', 'Coto Makassar', 'Pallubasa', 'Semua jawaban benar'],
                    correctAnswer: 'Semua jawaban benar',
                },
                {
                    question: 'Pakaian adat tradisional wanita dari suku Bugis adalah...',
                    options: ['Kebaya', 'Ulos', 'Baju Bodo', 'Baju Cele'],
                    correctAnswer: 'Baju Bodo',
                }
            ]
        }
    },
    {
        id: 'papua',
        name: 'Papua',
        description: 'Nikmati petualangan di tanah paling timur Indonesia, rumah bagi puncak salju abadi dan tradisi kuno.',
        imageId: 'papua-region',
        coordinates: [-4.2249, 138.084],
        details: {
            history: 'Papua memiliki sejarah panjang sebagai wilayah yang dihuni oleh ratusan suku dengan budaya yang sangat beragam. Kontak dengan dunia luar secara intensif baru terjadi dalam beberapa abad terakhir.',
            folklore: 'Kisah buaya ajaib yang menolong seorang anak dari suku Asmat adalah salah satu cerita yang menggambarkan hubungan erat antara manusia dan alam di Papua.',
            figures: [
                { name: 'Frans Kaisiepo', description: 'Pahlawan Nasional yang berperan dalam penyatuan Papua dengan Indonesia.', imageId: 'frans-kaisiepo' },
                { name: 'Silas Papare', description: 'Seorang pejuang kemerdekaan yang mendirikan Partai Kemerdekaan Indonesia Irian.', imageId: 'silas-papare' },
            ],
            cuisine: ['Papeda', 'Ikan Bakar Manokwari', 'Sate Ulat Sagu'],
            cuisineImageId: 'papeda',
            clothing: 'Koteka, Rok Rumbai',
            clothingImageId: 'koteka',
            traditions: ['Tradisi Bakar Batu', 'Kerajinan Noken (Warisan UNESCO)'],
            traditionImageId: 'bakar-batu',
            quiz: [
                {
                    question: 'Puncak tertinggi di Indonesia yang diselimuti salju abadi terletak di Papua, yaitu...',
                    options: ['Gunung Rinjani', 'Gunung Semeru', 'Puncak Jaya', 'Gunung Kerinci'],
                    correctAnswer: 'Puncak Jaya',
                },
                {
                    question: 'Tas tradisional dari Papua yang diakui UNESCO sebagai warisan budaya takbenda adalah...',
                    options: ['Ulos', 'Noken', 'Songket', 'Batik'],
                    correctAnswer: 'Noken',
                },
                {
                    question: 'Tradisi memasak bersama dengan menggunakan batu panas di Papua disebut...',
                    options: ['Ngaben', 'Bakar Batu', 'Rambu Solo', 'Dugderan'],
                    correctAnswer: 'Bakar Batu',
                },
                {
                    question: 'Makanan pokok masyarakat Papua yang terbuat dari sagu adalah...',
                    options: ['Nasi', 'Papeda', 'Roti', 'Jagung'],
                    correctAnswer: 'Papeda',
                },
                {
                    question: 'Siapakah pahlawan nasional yang wajahnya diabadikan dalam uang pecahan Rp 10.000 dan berasal dari Papua?',
                    options: ['Silas Papare', 'Frans Kaisiepo', 'Pattimura', 'Tuanku Imam Bonjol'],
                    correctAnswer: 'Frans Kaisiepo',
                }
            ]
        }
    },
    {
        id: 'bali-nusa-tenggara',
        name: 'Bali & Nusa Tenggara',
        description: 'Temukan pesona gugusan pulau eksotis, dari spiritualitas Bali hingga kadal purba di Komodo.',
        imageId: 'bali-nt-region',
        coordinates: [-8.65, 115.2167],
        details: {
            history: 'Bali memiliki sejarah kerajaan yang kuat dengan budaya Hindu yang unik. Sementara itu, Nusa Tenggara menjadi jalur perdagangan penting dan rumah bagi berbagai suku.',
            folklore: 'Cerita Calon Arang dari Bali mengisahkan tentang pertarungan antara sihir baik dan jahat, menjadi dasar dari banyak pertunjukan seni di Bali.',
            figures: [
                { name: 'I Gusti Ngurah Rai', description: 'Pahlawan Nasional yang memimpin pasukan Ciung Wanara dalam Puputan Margarana.', imageId: 'ngurah-rai' },
                { name: 'Walter Spies', description: 'Seniman Jerman yang sangat berpengaruh dalam perkembangan seni modern Bali.', imageId: 'walter-spies' },
            ],
            cuisine: ['Ayam Betutu', 'Sate Lilit', 'Ayam Taliwang (Lombok)'],
            cuisineImageId: 'ayam-betutu',
            clothing: 'Payas Agung (Bali)',
            clothingImageId: 'payas-agung',
            traditions: ['Upacara Ngaben', 'Sistem irigasi Subak (Warisan UNESCO)'],
            traditionImageId: 'subak',
            quiz: [
                {
                    question: 'Upacara pembakaran jenazah di Bali dikenal dengan sebutan...',
                    options: ['Rambu Solo', 'Sekaten', 'Ngaben', 'Kasada'],
                    correctAnswer: 'Ngaben',
                },
                {
                    question: 'Sistem irigasi tradisional di Bali yang diakui UNESCO adalah...',
                    options: ['Tumpangsari', 'Subak', 'Sengkedan', 'Terasering'],
                    correctAnswer: 'Subak',
                },
                {
                    question: 'Pahlawan nasional yang memimpin perang Puputan Margarana di Bali adalah...',
                    options: ['Pangeran Diponegoro', 'Sultan Hasanuddin', 'I Gusti Ngurah Rai', 'Pattimura'],
                    correctAnswer: 'I Gusti Ngurah Rai',
                },
                {
                    question: 'Pulau di Nusa Tenggara Timur yang menjadi habitat asli hewan purba Komodo adalah...',
                    options: ['Pulau Flores', 'Pulau Sumba', 'Pulau Komodo', 'Pulau Lombok'],
                    correctAnswer: 'Pulau Komodo',
                },
                {
                    question: 'Makanan khas dari Lombok yang terkenal dengan rasa pedasnya adalah...',
                    options: ['Ayam Betutu', 'Sate Lilit', 'Ayam Taliwang', 'Babi Guling'],
                    correctAnswer: 'Ayam Taliwang',
                }
            ]
        }
    },
    {
        id: 'maluku',
        name: 'Maluku',
        description: 'Kunjungi "Kepulauan Rempah" yang legendaris, pusat sejarah maritim dan surga pantai tersembunyi.',
        imageId: 'maluku-region',
        coordinates: [-3.655, 128.19],
        details: {
            history: 'Selama berabad-abad, Maluku menjadi satu-satunya sumber rempah-rempah seperti cengkih dan pala, menjadikannya rebutan bangsa-bangsa Eropa dan pusat perdagangan dunia.',
            folklore: 'Legenda Batu Badaong (Batu Berdaun) di Ternate menceritakan tentang batu keramat yang menjadi pusat kekuatan spiritual kesultanan.',
            figures: [
                { name: 'Kapitan Pattimura', description: 'Pahlawan Nasional yang memimpin pemberontakan melawan VOC Belanda di Maluku.', imageId: 'pattimura' },
                { name: 'Sultan Baabullah', description: 'Sultan Ternate yang berhasil mengusir Portugis dari Maluku dan membawa kesultanan ke puncak kejayaan.', imageId: 'baabullah' },
            ],
            cuisine: ['Ikan Kuah Pala Banda', 'Gohu Ikan', 'Nasi Lapola'],
            cuisineImageId: 'ikan-kuah-pala',
            clothing: 'Baju Cele',
            clothingImageId: 'baju-cele',
            traditions: ['Tradisi Pukul Sapu', 'Upacara Cuci Negeri Soya'],
            traditionImageId: 'pukul-sapu',
            quiz: [
                {
                    question: 'Maluku dikenal di dunia sebagai...',
                    options: ['Kepulauan Emas', 'Kepulauan Rempah', 'Kepulauan Sutra', 'Kepulauan Cendana'],
                    correctAnswer: 'Kepulauan Rempah',
                },
                {
                    question: 'Pahlawan nasional yang memimpin perlawanan terhadap Belanda di Maluku pada tahun 1817 adalah...',
                    options: ['Sultan Baabullah', 'Kapitan Pattimura', 'Sultan Nuku', 'Martha Christina Tiahahu'],
                    correctAnswer: 'Kapitan Pattimura',
                },
                {
                    question: 'Dua jenis rempah yang paling dicari dari Maluku adalah...',
                    options: ['Lada dan Kayu Manis', 'Cengkih dan Pala', 'Vanili dan Kapulaga', 'Kunyit dan Jahe'],
                    correctAnswer: 'Cengkih dan Pala',
                },
                {
                    question: 'Hidangan ikan mentah yang diasinkan dengan perasan lemon dan garam dari Ternate adalah...',
                    options: ['Ikan Kuah Pala', 'Nasi Lapola', 'Gohu Ikan', 'Ikan Asar'],
                    correctAnswer: 'Gohu Ikan',
                },
                {
                    question: 'Tradisi adu kekuatan fisik menggunakan lidi aren di Maluku Tengah disebut...',
                    options: ['Pukul Sapu', 'Cuci Negeri', 'Bambu Gila', 'Tari Cakalele'],
                    correctAnswer: 'Pukul Sapu',
                }
            ]
        }
    },
];

export const traditionsData: Tradition[] = [
  {
    id: 'tari-piring',
    name: 'Tari Piring',
    region: 'Sumatera Barat',
    category: 'Tarian',
    imageId: 'tari-piring',
    shortDescription: 'Tarian energik yang menampilkan penari memegang piring di telapak tangan mereka tanpa perekat.',
    fullDescription: 'Tari Piring adalah tarian tradisional Minangkabau yang melambangkan rasa syukur kepada dewa-dewa setelah panen yang melimpah. Para penari melakukan gerakan cepat sambil memegang piring, dan secara ajaib piring tersebut tidak jatuh.',
    history: 'Awalnya merupakan ritual ucapan syukur masyarakat animisme. Setelah masuknya Islam, tarian ini diadaptasi menjadi seni hiburan rakyat.',
    meaning: 'Melambangkan kegembiraan, rasa syukur, dan keterampilan serta kehati-hatian dalam hidup.',
  },
  {
    id: 'tari-saman',
    name: 'Tari Saman',
    region: 'Aceh',
    category: 'Tarian',
    imageId: 'tari-saman',
    shortDescription: 'Tarian seribu tangan dari Suku Gayo dengan gerakan tepukan yang sinkron dan cepat.',
    fullDescription: 'Tari Saman adalah media dakwah yang mencerminkan pendidikan, keagamaan, sopan santun, dan kepahlawanan. Keunikannya terletak pada kekompakan gerakan tangan para penari yang sangat cepat dan harmonis, diiringi syair-syair berbahasa Gayo.',
    history: 'Diciptakan oleh Syekh Saman, seorang ulama dari Gayo, sebagai media penyebaran agama Islam. Diakui sebagai Warisan Budaya Takbenda oleh UNESCO.',
    meaning: 'Mewakili semangat kebersamaan, disiplin, dan kecepatan dalam mencapai tujuan bersama.',
  },
  {
    id: 'tari-kecak',
    name: 'Tari Kecak',
    region: 'Bali',
    category: 'Tarian',
    imageId: 'tari-kecak',
    shortDescription: 'Drama tari spektakuler yang menceritakan kisah Ramayana dengan iringan paduan suara "cak-cak".',
    fullDescription: 'Tari Kecak adalah pertunjukan seni khas Bali yang diciptakan pada tahun 1930-an. Puluhan penari pria duduk melingkar, menyuarakan "cak" secara berirama sebagai musik pengiring, sambil mementaskan adegan dari epos Ramayana.',
    history: 'Terinspirasi dari ritual sanghyang (tarian trance) dan dikembangkan oleh seniman Bali I Wayan Limbak bersama pelukis Jerman Walter Spies.',
    meaning: 'Menggambarkan kekuatan persatuan dalam melawan kejahatan dan pentingnya kesetiaan.',
  },
  {
    id: 'batik',
    name: 'Batik',
    region: 'Jawa',
    category: 'Kerajinan',
    imageId: 'batik',
    shortDescription: 'Seni melukis kain menggunakan lilin (malam) untuk menciptakan corak yang kaya makna filosofis.',
    fullDescription: 'Batik adalah seni kerajinan tangan bernilai tinggi yang telah menjadi bagian dari budaya Indonesia, khususnya Jawa. Prosesnya melibatkan penulisan atau pengecapan lilin pada kain untuk menahan pewarnaan, menghasilkan motif yang rumit dan indah.',
    history: 'Telah ada sejak zaman Majapahit. Setiap corak memiliki makna dan status sosial tersendiri. Diakui UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi.',
    meaning: 'Setiap motif batik memiliki filosofi mendalam, mulai dari doa, harapan, hingga status sosial pemakainya.',
  },
  {
    id: 'tenun',
    name: 'Tenun',
    region: 'Nusa Tenggara Timur',
    category: 'Kerajinan',
    imageId: 'tenun',
    shortDescription: 'Kain tradisional yang dibuat dengan teknik menenun benang secara manual, menghasilkan motif khas daerah.',
    fullDescription: 'Tenun adalah salah satu warisan budaya Indonesia yang paling berharga. Di berbagai daerah, terutama NTT, perempuan menenun kain dengan motif yang diwariskan turun-temurun. Setiap kain menceritakan sebuah kisah, identitas suku, atau status sosial.',
    history: 'Keterampilan menenun telah diwariskan dari generasi ke generasi selama ratusan tahun, menjadi bagian penting dari kehidupan adat.',
    meaning: 'Melambangkan kerja keras, kesabaran, dan identitas budaya suatu komunitas.',
  },
  {
    id: 'wayang',
    name: 'Wayang Kulit',
    region: 'Jawa & Bali',
    category: 'Kerajinan',
    imageId: 'wayang',
    shortDescription: 'Seni pertunjukan teater bayangan yang menggunakan boneka kulit, diiringi musik gamelan.',
    fullDescription: 'Wayang Kulit adalah bentuk teater tradisional yang dimainkan oleh seorang dalang. Dalang menggerakkan boneka kulit di belakang layar putih yang disinari lampu, menciptakan bayangan yang hidup sambil menuturkan kisah-kisah epik seperti Mahabharata dan Ramayana.',
    history: 'Merupakan seni kuno yang telah berkembang di Jawa selama lebih dari seribu tahun, digunakan sebagai media hiburan, pendidikan, dan penyebaran nilai-nilai filosofis.',
    meaning: 'Sebagai cerminan kehidupan manusia, mengajarkan filosofi tentang kebaikan melawan kejahatan, takdir, dan moralitas.',
  },
  {
    id: 'ngaben',
    name: 'Ngaben',
    region: 'Bali',
    category: 'Upacara',
    imageId: 'ngaben',
    shortDescription: 'Upacara kremasi jenazah umat Hindu di Bali yang megah dan penuh sukacita.',
    fullDescription: 'Ngaben adalah upacara pembakaran jenazah di Bali yang bertujuan untuk menyucikan roh orang yang telah meninggal agar dapat kembali ke Sang Pencipta. Berbeda dari upacara pemakaman yang sedih, Ngaben dilaksanakan dengan semarak karena diyakini sebagai perayaan pembebasan jiwa.',
    history: 'Tradisi ini berakar dari ajaran Hindu Dharma yang telah berakulturasi dengan kepercayaan lokal Bali selama berabad-abad.',
    meaning: 'Melambangkan pelepasan ikatan duniawi dan pengembalian unsur Panca Maha Bhuta (lima elemen alam) ke asalnya.',
  },
  {
    id: 'rendang',
    name: 'Rendang',
    region: 'Sumatera Barat',
    category: 'Kuliner',
    imageId: 'rendang',
    shortDescription: 'Hidangan daging kaya rempah yang dimasak berjam-jam hingga kering dan sering disebut makanan terlezat di dunia.',
    fullDescription: 'Rendang adalah masakan daging yang berasal dari Minangkabau. Proses memasaknya yang lama dengan santan dan aneka rempah menghasilkan hidangan yang tidak hanya lezat tetapi juga awet. Rendang bukan sekadar makanan, tetapi juga memiliki peran penting dalam upacara adat Minang.',
    history: 'Telah menjadi bagian dari tradisi kuliner Minangkabau selama berabad-abad, berfungsi sebagai hidangan kehormatan dalam acara-acara penting.',
    meaning: 'Empat bahan utamanya (daging, santan, cabai, rempah) melambangkan empat pilar masyarakat Minang: ninik mamak (pemimpin adat), cerdik pandai, alim ulama, dan kaum ibu.',
  },
  {
    id: 'gamelan',
    name: 'Gamelan',
    region: 'Jawa & Bali',
    category: 'Musik',
    imageId: 'gamelan',
    shortDescription: 'Ansambel musik tradisional yang terdiri dari berbagai instrumen perkusi metal seperti metalofon, gambang, dan gendang.',
    fullDescription: 'Gamelan adalah jantung dari musik tradisional di Jawa dan Bali. Ansambel ini menciptakan alunan musik yang meditatif dan kompleks, sering kali digunakan untuk mengiringi tarian, pertunjukan wayang, atau upacara keagamaan. Setiap set gamelan dianggap memiliki rohnya sendiri.',
    history: 'Relief di Candi Borobudur menunjukkan bahwa gamelan telah ada sejak abad ke-8. Musik ini berkembang di lingkungan keraton sebagai musik yang agung dan sakral.',
    meaning: 'Mencerminkan nilai-nilai harmoni, keselarasan, dan keseimbangan dalam kehidupan masyarakat Jawa dan Bali.',
  },
];
