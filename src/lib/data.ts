import type { Region, TimelineEvent, Tradition, TimelineEra } from './types';

const eraColors: Record<TimelineEra, string> = {
  kerajaan: 'bg-yellow-900/10 border-yellow-700',
  kolonial: 'bg-gray-700/10 border-gray-500',
  kemerdekaan: 'bg-red-900/10 border-red-700', // This era is no longer used in the new timeline, but kept for type consistency
  modern: 'bg-blue-800/10 border-blue-600',
};

const timelineEvents: TimelineEvent[] = [
  {
    id: 'kutai-kingdom',
    year: 'Abad ke-4',
    era: 'kerajaan',
    title: 'Kerajaan Kutai: Jejak Awal Peradaban',
    slug: 'kutai-kingdom',
    description: 'Kerajaan Hindu tertua di Indonesia dengan Prasasti Yupa sebagai bukti tertulis pertama peradaban Nusantara.',
    fullDescription: `Kerajaan Kutai yang terletak di Kalimantan Timur adalah kerajaan Hindu tertua yang tercatat dalam sejarah Indonesia. Nama Kutai sendiri diketahui oleh para ahli mitologi saat setelah ditemukannya sebuah prasasti, yaitu Yupa. Dari prasasti inilah kemudian ditemukan nama Raja Kudungga sebagai pendiri Kerajaan Kutai. Sepeninggalan Raja Kudungga, Kerjaan Kutai kemudian dipimpin oleh Aswawarman (anak Raja Kudungga). Namun, kepemimpinan Aswawarman tidak berlangsung lama yang kemudian dilanjutkan kembali oleh anaknya, Mulawarman. Mulawarman merupakan salah satu pemimpin paling terkenal dalam masa Kerajaan Kutai.

Masa kepemimpinan Mulawarman menjadi masa kejayaan Kerajaan Kutai. Hal ini ditandai oleh isi dari Prasati Yupa yang mengatakan bahwa pada masa itu Mulawarman melakukan upacara pengorbanan emas yang sangat banyak.Dari aspek sosial, Kerajaan Kutai menghasilkan golongan Ksatria dan Brahmana yang merupakan golongan terdidik berintelektua tinggi. Mereka menguasai Bahasa Sansekerta yang sulit dimengerti saat itu. Dari aspek ekonomi, bercocok tanam dan beternak menjadi sumber penghasilan utama yang sangat makmur. Hal ini ditandai dengan tulisan pada Prasati Yupa yang mengatakan bahwa Mulawarman pernah memberikan 20.000 ekor sapi pada golongan Brahmana.

Hal-hal di atas merupakan kisah dari Kerjaan Kutai Martadipura. Kerajaan tersebut kemudian ditaklukkan oleh Kerajaan Kutai Kartanegara yang pada saat itu telah memeluk agama Islam. Pada tahun 1635, raja terakhir Kutai Martadipura, Maharaja Dharma Setia guguur dalam pertempuran melawan raja Kutai Kartanegara, Pangeran Sinum Panji Mendapa.`,
    keyFigures: ['Tujuh Prasasti Yupa', 'Kura-Kura Emas', 'Keris Kering Bukit Kang', 'Kalung Ciwa'],
    relatedEvents: ['Bukti tertulis pertama peradaban Nusantara.', 'Pengaruh Hindu dari India mulai masuk.', 'Sistem kerajaan dengan struktur pemerintahan yang terorganisir.', 'Upacara penyucian diri, Vratyastoma'],
    imageId: 'kutai-yupa',
    suggestionQuestions: [
      'Apa makna dari Prasasti Yupa dalam sejarah Kerajaan Kutai?',
      'Bagaimana sistem sosial masyarakat Kutai pada masa kejayaan?',
      'Apa yang menyebabkan runtuhnya Kerajaan Kutai Martadipura?'
    ],
  },	
  
{
    id: 'sriwijaya-empire',
    year: 'Abad ke-7 - 13',
    era: 'kerajaan',
    title: 'Sriwijaya: Kerajaan Maritim Terbesar',
    slug: 'sriwijaya-empire',
    description: 'Pusat pembelajaran Buddha terbesar di Asia Tenggara dan penguasa Selat Malaka. Sungai Musi jadi jalur perdagangan internasional.',
    fullDescription: `Kerajaan Sriwijaya yang berpusat di Palembang, Sumatera, adalah kekuatan maritim terbesar di Asia Tenggara pada masanya. Kerajaan Sriwijaya didirikan oleh Dapunta Hyang Sri Jayanasa. Menurut Prasasti Kedukan Bukit, Sri Jayanasa mengadakan perjalanan dengan memimpin 20.000 tentara. Dalam perjalanannya, ia berhasil menaklukan daerah-daerah strategis untuk perdagangan sehingga hal ini yang mendorong kesejahteraan Sriwijaya ke depannya. Sri Jayanasa melakukan pada awal berdiri Sriwijaya melakukan ekspedisi pada wilayah-wilayah yang enggan tunduk pada mereka.

Puncak kejayaan Kerajaan Sriwijaya dimulai pada abad ke-8 hingga ke-9 di bawah kepemimpinan Raja Balaputradewa (850 M). Pada masa tersebut, Sriwijaya memiliki wilayah kekuasaan hingga Malaysia, Singapura, dan Thailand Selatan. Di bawah kepemimpinan Raja Balaputradewa, Sriwijaya dikenal sebagai kerajaan maritim. Kerajaan Sriwijaya menguasai jalur perdagangan strategis di Selat Malaka dan menjadi pusat pembelajaran agama Buddha yang menarik ribuan biksu dari China, India, dan negara lainnya. Sungai Musi menjadi "jalan tol" perdagangan internasional yang menghubungkan Timur dan Barat.

Kerajaan Sriwijaya mulai mengalami kemunduran sejak kepemimpinan Raja Rajendra Coladewa dari Kerajaan Cola (India Selatan) pada abad ke-11. Pada tahun 1025, Kerajaan Cola berhasil menawan Raja Sanggrama Wijayatunggawarman. Kerajaan Sriwijaya semakin tenggelam ketika Kerajaan Singasari melangsungkan Ekspedisi Pamalayu pada 1275. Ekspedisi ini merupakan misi dari Raja Kertanegara untuk melemahkan Sriwijaya. Pada akhirnya, di tahun 1377, Kerajaan Sriwijaya benar-benar runtuh karena persaingan dari Kerajaan Majapahit yang berhasil menaklukan bagian-bagian wilayah Sriwijaya.`,
    keyFigures: ['Candi Muara Takus', 'Prasasti Kedukan Bukit', 'Universitas Nalanda', 'Bahasa Melayu Kuno', 'Taman Purbakala'],
    relatedEvents: ['Pusat pembelajaran Buddha terbesar di Asia Tenggara.', 'Menguasai jalur perdagangan maritim Selat Malaka.', 'Perkembangan Bahasa Melayu sebagai lingua franca Nusantara.', 'Hubungan diplomatik dengan China dan India.', 'Tradisi pembuatan perahu dengan teknik papan ikat dan kupingan pengikat.'],
    imageId: 'sriwijaya-ship',
    suggestionQuestions: [
      'Mengapa Selat Malaka begitu penting bagi Kerajaan Sriwijaya?',
      'Bagaimana peran Sriwijaya dalam penyebaran agama Buddha di Asia Tenggara?',
      'Faktor apa saja yang menyebabkan kejatuhan Kerajaan Sriwijaya?'
    ],
  },
  
{
    id: 'borobudur-construction',
    year: 'Abad ke-8 - 9',
    era: 'kerajaan',
    title: 'Pembangunan Candi Borobudur & Prambanan',
    slug: 'borobudur-construction',
    description: 'Mahakarya arsitektur Mataram Kuno: Candi Buddha terbesar dunia (Borobudur) dan kompleks Hindu termegah (Prambanan).',
    fullDescription: `Kerajaan Mataram Kuno adalah kerajaan maritim yang terletak di pedalaman Jawa Tengah. Kerajaan Mataram Kuno pertama kali didirikan oleh Raja Sanjaya yang bergelar Rakai Mataram Sang Ratu Sanjaya yang menganut agama Hindu. Selama masa kepemimpinannya Kerajaan Mataram Kuno mampu melakukan perluasan wilayah dan menjadi pusat pembelajaran agama Hindu. Kemudian pada abad ke-8 M Raja Sanjaya meninggal dunia dan digantikan oleh puteranya yang bernama Rakai Panangkaran. Di pemerintahan puteranya inilah terjadi perpecahan di Kerajaan Mataram Kuno menjadi dua yakni Mataram Kuno bercorak Hindu (Sanjaya) dan Mataram Kuno bercorak Budha (Syailendra).
Kerajaan Mataram Kuno yang terpecah dapat disatukan kembali pada masa pemerintahan Raja Rakai Pikatan (Hindu) melalui perinikahannya dengan Pramodawardhani putri dari Raja Samaratungga (Buddha). Dari perkawinan politik tersebut, Dinasti Syailendra dan Sanjaya akhirnya bersatu kembali.`,
    keyFigures: ['Candi Borobudur', 'Candi Prambanan', 'Prasasti Canggal', 'Prasasti Sojomerto'],
    relatedEvents: ['Bukti kejayaan arsitektur dan seni pahat Indonesia.', 'Toleransi beragama antara Hindu dan Buddha.', 'Diakui UNESCO sebagai Warisan Dunia.', 'Menarik sarjana dan peziarah dari seluruh Asia.', 'Dibangunnya Candi Borobudur sebagai tempat ibadah, sedangkan Candi Prambanan sebagai makam bagi keluarga kerajaan.', 'Terkenal dengan sistem irigasi yang canggih dan mendukung pertanian.'],
    imageId: 'borobudur-temple',
    suggestionQuestions: [
      'Bagaimana toleransi beragama dipraktikkan di Kerajaan Mataram Kuno?',
      'Apa makna filosofis dari arsitektur Candi Borobudur?',
      'Bagaimana perkawinan politik menyatukan Dinasti Syailendra dan Sanjaya?'
    ],
  },
  
{
    id: 'majapahit-empire',
    year: 'Abad ke-13 - 15',
    era: 'kerajaan',
    title: 'Majapahit: Imperium Agraris Terbesar',
    slug: 'majapahit-empire',
    description: 'Kerajaan terbesar di Nusantara dengan Sumpah Palapa Gajah Mada. Melahirkan seni wayang, gamelan, dan sistem agraris maju.',
    fullDescription: `Kerajaan Majapahit terletak dan berpusat di Jawa Timur, dan dianggap sebagai salah satu kerajaan terbesar di wilayah Asia Tenggara pada masa lalu. Kerajaan Majapahit didirikan pada tahun 1293 M oleh Raden Wijaya. Berdirinya Kerajaan Majapahit dipercaya berawal dari kerajaan-kerajaan kecil yang ada di sekitar daerah Trowulan.

Masa kejayaan Kerajaan Majapahit ini dikenal dengan sebutan "Zaman Keemasan Hindu-Buddha". Selama masa kejayaan ini, Kerajaan Majapahit dipimpin oleh Hayam Wuruk dan Gajah Mada (sebagai penasihat). Wilayah kekuasaannya meliputi sebagian besar wilayah Indonesia hingga ke Semenanjung Malaya, Filipina, dan Papua Nugini. Hayam Wuruk menjalin hubungan perdagangan dengan Tiongkok, India, dan negara-negara Arab. Selain itu, ia juga membangun banyak monumen dan pura sebagai simbol kekuasaan kerajaan.

Terdapat beberapa alasan utama runtuhnya Kerjaaan Majapahit, salah satunya adalah konflik internal berupa Perang Paregreg. Perang Paregreg merupakan perang saudara yang memperebutkan kekuasaan Kerajaan Majapahit. Selain itu, masuknya dan berkembangnya agama Islah menjadi salah satu faktor runtuhnya Kerajaan Majapahit.`,
    keyFigures: ['Kitab Sutasoma', 'Sumpah Palapa', 'Kitab Negarakertagama', 'Prasati Waringin Pitu', 'Candi Tikus'],
    relatedEvents: ['Sumpah Palapa: visi penyatuan Nusantara.', 'Sistem pertanian dan irigasi yang maju.', 'Lambang Garuda Pancasila berakar dari relief dan simbol-simbil Kerjaan Majapahit', 'Seni pertunjukkan wayang kulit yang menjadi budaya lokal hingga saat ini.'],
    imageId: 'majapahit-palace',
    suggestionQuestions: [
      'Apa visi Gajah Mada dalam Sumpah Palapa dan bagaimana dampaknya?',
      'Bagaimana sistem pertanian Majapahit mendukung kekuasaannya?',
      'Mengapa Perang Paregreg menjadi awal kehancuran Majapahit?'
    ],
  },

  
// ERA 2: JALUR REMPAH & MASUKNYA ISLAM - ERA KESULTANAN (Abad 13-18)
  {
    id: 'islam-arrival',
    year: 'Abad ke-13',
    era: 'kolonial',
    title: 'Kedatangan Islam: Transformasi Spiritual Nusantara',
    slug: 'islam-arrival',
    description: 'Islam masuk melalui pedagang Arab, Persia, Gujarat. Sunan menyebarkan Islam dengan pendekatan kultural yang damai.',
    fullDescription: `Terdapat 3 teori yang menjelaskan proses masuknya agama Islam ke Indonesia. Teori Gujarat mengatakan bahwa Islam dibawa oleh orang-orang dari Gujarat, India. Teori Persia mengatakan bahwa Islam dibawa oleh orang-orang Persia. Sedangkan, Teori Mekkah mengatakan bahwa Islam dibawa oleh orang-orang Arab. Teori Mekkah inilah yang dianggap paling benar. Jalur masuknya Islam ke Indonesia diantaranya melalui jalur pedagangan, perkawinan, pendidikan, tasawuf, dakwah, dan kesenian. 

Agama Islam semakin berkembang setelah munculnya kesultanan-kesultanan bercorak Islam di Indonesia. Contohnya, Kesultanan Samudra Pasai, Kesultanan Demak, dan Kesultanan Malaka. Kesultanan-kesultanan ini melakukan persebaran agama Islam melalui perdagangan antar daerah atau bahkan dengan cara memperluas daerah kekuasaannya. 

Ajaran agama Islam kemudian disebarkan oleh para sunan dan ulama. Sunan-sunan Wali Songo menyebarkan Islam di daerah Pulau Jawa. Sedangkan, terdapat ulama-ulama lain yang ber-dakwah di penjuru Indonesia, seperti Syaikh Yusuf Abul Mahasin di Gowa, Syekh Abdus Samad di Palembang, dan Syekh Abdurrauf al-Singkili di Aceh. `,
    keyFigures: ['Bangunan arsitektur bekas Kesultanan', 'Makam para sultan, sunan, dan ulama', 'Kesenian yang digunakan oleh para sunan', 'Pesantren tempat pembelajaran agama Islam'],
    relatedEvents: ['Masuknya Islam melalui jalur paling utama, yaitu jalur perdagangan.', 'Berdirinya kesultanan-kesultanan Islam.', 'Penyebaran Islam melalui seni dan budaya.', 'Akulturasi Islam dengan agama yang sudah ada sebelumnya dan budaya lokal.'],
    imageId: 'islam-arrival',
    suggestionQuestions: [
      'Apa perbedaan ketiga teori masuknya Islam ke Indonesia?',
      'Bagaimana Wali Songo menyebarkan Islam melalui seni dan budaya?',
      'Apa yang dimaksud dengan akulturasi Islam dengan budaya lokal?'
    ],
  },
  
{
    id: 'maluku-spice-islands',
    year: 'Abad ke-16',
    era: 'kolonial',
    title: 'Maluku: Kepulauan Rempah yang Mengubah Dunia',
    slug: 'maluku-spice-islands',
    description: 'Cengkih dan pala Maluku lebih berharga dari emas. Memicu Age of Exploration dan kedatangan bangsa Eropa.',
    fullDescription: `Maluku, khususnya Kepulauan Banda dan Ternate, adalah satu-satunya tempat di dunia yang menghasilkan cengkih dan pala pada abad ke-16. Rempah-rempah ini lebih berharga dari emas dan permata, memicu "Age of Exploration" Eropa. Portugis, Spanyol, Inggris, dan Belanda berlomba mencapai Maluku, mengubah lanskap geopolitik dunia. Perebutan rempah ini membawa dampak besar bagi sejarah Indonesia.

Kedatangan bangsa Eropa ternyata tidak hanya didasari oleh keinginan mencari rempah-rempah, tapi juga memenuhi semboyan 3G (Gold, Glory, dan Gospel). Gold, mereka mancari kekayaan dengan memonopoli rempah-rempah yang harganya sangat tinggi pada saat itu. Glory, mereka mencari kejayaan dengan menguasai daerah-daerah penghasil rempah. Gospel, keinginan menyebarkan agama dan keyakinan mereka.`,
    keyFigures: ['Pilar-pilar batu para penjelajah Eropa', 'Benteng-benteng pertahanan bangsa Eropa', 'Rempah Cengkih dan Pala'],
    relatedEvents: ['Maluku menjadi pusat perdagangan dunia.', 'Kedatangan Portugis (1512) yang dipimpin oleh Alfonso de Albuqurque sebagai bangsa Eropa pertama.', 'Persaingan sengit antara Portugis, Spanyol, dan Belanda memperebutkan rempah-rempah.'],
    imageId: 'maluku-spices',
    suggestionQuestions: [
      'Mengapa rempah-rempah Maluku lebih berharga dari emas?',
      'Apa itu semboyan 3G yang dibawa bangsa Eropa?',
      'Bagaimana perebutan rempah mengubah sejarah dunia?'
    ],
  },
  
{
    id: 'aceh-sultanate',
    year: 'Abad ke-16 - 17',
    era: 'kolonial',
    title: 'Kesultanan Aceh: Serambi Mekkah dan Kekuatan Maritim',
    slug: 'aceh-sultanate',
    description: 'Pusat perdagangan lada dan pintu gerbang Islam. Sultan Iskandar Muda membawa Aceh ke puncak kejayaan.',
    fullDescription: `Kesultanan Aceh adalah kekuatan maritim dan perdagangan terbesar di Asia Tenggara pada abad ke-16 dan 17. Kesultanan Aceh pertama kali dibangun oleh Sultan Ali Mughayat Syah. Pada masa pemerintahannya, Kesultanan Aceh mambuat armada darat dan laut untuk menyerang bangsa Portugis yang berkuasa di Malaka pada saat itu. 

Di bawah kepemimpinan Sultan Iskandar Muda, Aceh mencapai puncak kejayaannya, menguasai perdagangan lada, dan menjadi pusat penyebaran Islam di Nusantara. Aceh dijuluki "Serambi Mekkah" karena perannya sebagai pusat pendidikan Islam dan pintu gerbang bagi jamaah haji dari Nusantara. 

Kesultanan Aceh bertahan dalam jangka waktu yang lama, karena adanya persatuan antara golongan Teuku yang merupakan golongan para keluarga kerajaan dan golongan Teungku yang merupakan golongan para ulama. Tetapi sayangnya, Kesultanan ini berhasil diruntuhkan oleh serangan bertubi dari Portugis, Belanda, dan pihak VOC.`,
    keyFigures: ['Taman Sari Gunongan', 'Masjid Raya Baiturrahman', 'Benteng Indra Patra', 'Buku Bustanus-Salatin'],
    relatedEvents: ['Eratnya persatuan antara golongan Teuku dan Teungku yang sulit untuk dikalahkan.', 'Pusat pendidikan Islam dan penyebaran agama.', 'Kekuatan armada laut yang ditakuti Eropa.', 'Lahirnya Tari Saman sebagai warisan budaya UNESCO.'],
    imageId: 'aceh-sultanate',
    suggestionQuestions: [
      'Mengapa Aceh dijuluki "Serambi Mekkah"?',
      'Apa peran golongan Teuku dan Teungku dalam kejayaan Aceh?',
      'Bagaimana Sultan Iskandar Muda membawa Aceh ke puncak kejayaan?'
    ],
  },
  
{
    id: 'voc-batavia',
    year: 'Abad ke-17 - 18',
    era: 'kolonial',
    title: 'VOC & Batavia: Awal Kolonialisme Belanda',
    slug: 'voc-batavia',
    description: 'VOC mendirikan Batavia sebagai pusat perdagangan. Melting pot budaya melahirkan kebudayaan Betawi yang unik.',
    fullDescription: `Verenigde Oost-Indische Compagnie (VOC) merupakan persatuan dagang perusahaan-perusahaan Belanda. Awalnya, perusahaan Belanda ber-ekspedisi secara masing-masing, tetapi biaya pelayaran yang mahal. Untuk meminimalisir pengeluaran dana, mereka bersetu membentuk VOC.

VOC mendirikan Batavia (Jakarta) sebagai pusat perdagangan dan pemerintahan kolonial. Batavia menjadi "melting pot" budaya tempat orang Sunda, Jawa, Melayu, Arab, Tionghoa, Portugis, dan Belanda hidup berdampingan. Melting pot adalah kondisi dimana berbagai suku, budaya, dan ideologi saling berinteraksi di dalam satu wilayah.

VOC juga membangun sistem monopoli perdagangan yang eksploitatif di seluruh Nusantara. Mereka semakin diuntungkan ketuka pemerintah Belanda mengeluarkan Hak Oktroi yang berisi tata cara militer dan kolonialisasi, mata uang yang digunakan, dan pemungutan pajak dalam memonopoli ekonomi Indonesia.`,
    keyFigures: ['Benteng Rotterdam', 'Kota Tua Jakarta', 'Gambang Kromong', 'Lawang Sewu', 'Benteng Batavia'],
    relatedEvents: ['Pendirian Batavia sebagai pusat kolonial (1619).', 'Lahirnya budaya Betawi sebagai hasil akulturasi dari berbagai macam budaya.', 'Arsitektur kolonial di Kota Tua.'],
    imageId: 'batavia-old-town',
    suggestionQuestions: [
      'Apa itu VOC dan mengapa didirikan?',
      'Bagaimana Batavia menjadi melting pot berbagai budaya?',
      'Apa itu Hak Oktroi yang diberikan kepada VOC?'
    ],
  },

  
// ERA 3: ERA KOLONIAL & PERJUANGAN (Abad 16-1945)
  {
    id: 'colonial-resistance',
    year: 'Abad ke-18 - 19',
    era: 'kemerdekaan',
    title: 'Perlawanan Rakyat: Pattimura hingga Pangeran Antasari',
    slug: 'colonial-resistance',
    description: 'Perlawanan Maluku, Perang Padri, Perang Banjar, dan Perang Jawa. Para pahlawan bangkit melawan penjajahan dengan gagah berani.',
    fullDescription: `Di seluruh Nusantara, rakyat bangkit melawan kolonialisme Belanda. Dimulai dari Perlawanan Maluku (1817) yang dipimpin oleh Pattimura dan Martha Christina Tiahahu. Perlawanan ini berlangsung karena Belanda memonopoli cengkeh dan memberlakukan kerja rodi. Hal ini tentu berdampak buruk bagi kesejahteraan ekonomi dan kehidupan masyarakat Maluku. Pattimura dan Tiahahu pun menyerang pihak Belanda hingga dapat menguasai Benteng Duurstede. Meski begitu, pada akhirnya perlawanan tidak mencapai puncak kemenangan, Pattimura dihukum gantung dan Tiahahu diasingkan ke Pulau Jawa.

Selanjutnya, Perang Padri (1821-1838) yang merupakan perang saudara antara Kaum Padri dan Kaum Adat yang dibantu oleh Belanda. Perang ini terjadi di Minangkabau. Kaum Padri merupakan kaum yang menganut agama Islam dan dipimpin oleh Tuangku Imam Bonjol. Mereka ingin menghapuskan kebiasaan-kebiasaan masyarakat yang meyimpang dari ajaran agama, seperti mabuk-mabukan dan sabung ayam. Sedangkan, Kaum Adat merupakan kaum yang masih ingin berpegang teguh pada kebiasaan-kebiasaan tersebut. Belanda memanfaatkan hal ini untuk melakukan adu domba. Tetapi, Tuanku Imam Bonjol akhirnya dapat mempersatukan kembali Kaum Padri dan Kaum Adat. Perlawanan Minangkabau pun terjadi, meskipun akhirnya kalah dari Belanda.

Selanjutnya, Perang Banjar (1859-1905) yang dipimpin oleh Pangeran Antasari. Perang ini disebabkan karena adanya pemberlakuan monopoli, kerja rodi, dan ke-ikut campur-an Belanda terhadap urusan-urusan Kesultanan Banjar. Pangeran Antasari pun menyerang pos-pos Belanda dengan membawa pasukan yang telah ia siapkan. Pasukan tersebut merupakan penggabungan antara para tokoh pemerintahan, pasukan militer, serta tokoh agama. Karena strategi pemilihan pasukan yang ia lakukan ini lah, is dijuluki sebagai Panembahan Amiruddin Khalifatul Mukminin, yang artinya pemimpin pemerintahan, panglima perang, dan pemuka agama tertinggi

Selanjutnya, Perang Jawa (1925-1930) yang dipimpin oleh Pangeran Diponegoro. Perlawanan Pangeran Diponegoro terhadap Belanda dilatar belakangi oleh pemasangan patok-patok jalan di atas makam para leluhur. Hal ini memicu kemarahan Pangeran Diponegoro karena dianggap tidak sopan dan keterlaluan. Perlawanan Pangeran Diponegoro meluas ke seluruh daerah di Pulau Jawa, sehingga disebut dengan Perang Jawa. Meski perlawanan ini lagi-lagi tidak dapat mencapai puncak kemenangan, tetapi Belanda mengalami kerugian yang sangat besar karena strategi perang Pangeran Diponegoro yang handal.`,
    keyFigures: ['Benteng Duurstede', 'Benteng Fort de Kock', 'Benteng Tabanio', 'Tongkat Pusaka Kiai Rondhan'],
    relatedEvents: ['Perlawanan Pattimura di Maluku (1817) yang merupakan perlawanan awal dari bangsa Indonesia.', 'Perang Padri di Sumatera Barat yang merupakan upaya adu domba oleh Belanda.', 'Persatuan rakyat Banjar dalam melawan Belanda membuat Pangeran Antasari dijuluki sebagai Panembahan Amiruddin Khalifatul Mukminin.', 'Perang Jawa (1825-1830) yang menjadi salah satu perlawanan terbesar dan membawa kerugian kepada Belanda.'],
    imageId: 'diponegoro-war',
    suggestionQuestions: [
      'Apa yang memicu perlawanan Pattimura di Maluku?',
      'Mengapa Perang Padri dimulai sebagai konflik internal?',
      'Bagaimana strategi Pangeran Diponegoro dalam Perang Jawa?'
    ],
  },
  
{
    id: 'national-awakening',
    year: '1908',
    era: 'kemerdekaan',
    title: 'Kebangkitan Nasional: Budi Utomo & Sumpah Pemuda',
    slug: 'national-awakening',
    description: 'Lahirnya kesadaran berbangsa. Dari Budi Utomo (1908) hingga Sumpah Pemuda (1928) yang mempersatukan Nusantara.',
    fullDescription: `Abad ke-20 menandai kebangkitan kesadaran nasional Indonesia. Pada 20 Mei 1908, Budi Utomo didirikan sebagai organisasi modern pertama, menandai awal pergerakan nasional. Terbentuknya organisasi ini berasal dari gagasan dr. Wahidin Soedirohusodo yang mendorong para pelajar STOVIA untuk mengangkat derajat bangsa. Budi Utomo kemudian dipimpin oleh R. Soetomo. 

Adanya organisasi Budi Utomo ini menjadi pemantik awal semangat perjuangan bangsa Indonesia. Mulai bermunculan organisasi lain, seperti Sarekat Islam yang dipimpin oleh Rekso Roemekso dan dikembangkan oleh H.O.S Tjokroaminoto. Ada pula Indische Partij yang merupakan organisasi politik pertama berideologi nasionalisme. Berbeda dengan Budi Utomo yang dikhususkan bagi para pelajar STOVIA dan Sarekat Islam yang dikhususkan bagi para pemeluk agama Islam, Indische Partij menerima setiap jiwa yang ingin berjuang bersama dari kalangan manapun. 

Puncaknya adalah peristiwa Sumpah Pemuda pada 28 Oktober 1928, di mana para pemuda dari berbagai daerah bersumpah: Satu Nusa, Satu Bangsa, Satu Bahasa - Indonesia. Moment ini mempersatukan ratusan suku dan bahasa di Nusantara menjadi satu bangsa Indonesia. Pada saat itu pula, lagu kebangsaan Indonesia Raya pertama kali disajikan oleh W.R Supratman.`,
    keyFigures: ['Museum Kebangkitan Nasional', 'Rasa Nasionalisme Bangsa Indonesia', 'Biola W.R Supratman', 'Gedung Museum Sumpah Pemuda'],
    relatedEvents: ['Nasionalisme', 'Patriotisme', 'Musyawarah dan Kekeluargaan', 'Persatuan dan Cinta Tanah Air'],
    imageId: 'sumpah-pemuda',
    suggestionQuestions: [
      'Apa perbedaan Budi Utomo, Sarekat Islam, dan Indische Partij?',
      'Mengapa Sumpah Pemuda begitu penting bagi persatuan Indonesia?',
      'Bagaimana lagu Indonesia Raya pertama kali dibawakan?'
    ],
  },
  
{
    id: 'japanese-occupation',
    year: '1942 - 1945',
    era: 'kemerdekaan',
    title: 'Pendudukan Jepang: Masa Kelam Menuju Kemerdekaan',
    slug: 'japanese-occupation',
    description: 'Tiga setengah tahun pendudukan brutal, namun memberi Indonesia kesempatan mempersiapkan kemerdekaan.',
    fullDescription: `Pendudukan Jepang (1942-1945) menggantikan kolonialisme Belanda yang menyerah tanpa syarat pada Perjanjian Kalijati. Pada walnya, kedatangan Jepang disambut dengan gembira oleh Rakyat Indonesia karena dianggap telah mengusir para penjajah. Jepang memperdengarkan lagu Indonesia Raya dan mengibarkan bendera Merah Putih saat awal kedatangan. Namun, lambat laun rakyat Indonesia menyadari bahwa Jepang tidak berbeda dari Belanda yang ingin menguasai Indonesia. 

Rakyat Indonesia mengalami kerja paksa (romusha), kelaparan, dan penindasan. Namun, di balik penderitaan tersebut, terdapat pula dampak positif yang didapatkan oleh rakyat Indonesia. Jepang memberikan pelatihan militer, membuka kesempatan untuk pendidikan politik, dan yang terpenting: melemahkan citra "tidak terkalahkan" Eropa di mata bangsa Asia. Hal ini mempercepat jalan menuju proklamasi kemerdekaan Indonesia.`,
    keyFigures: ['Bunker Jepang', 'Gua Jepang', 'Benteng Jepang', 'Bandara Frans Kaisiepo'],
    relatedEvents: ['Kemerdekaan', 'Nasionalisme', 'Hak untuk Menentukan Nasib Sendiri'],
    imageId: 'japanese-occupation',
    suggestionQuestions: [
      'Mengapa awalnya rakyat Indonesia menyambut kedatangan Jepang?',
      'Apa itu romusha dan bagaimana dampaknya bagi rakyat?',
      'Bagaimana Jepang mempersiapkan Indonesia menuju kemerdekaan?'
    ],
  },
  
{
    id: 'proclamation',
    year: '17 Agustus 1945',
    era: 'kemerdekaan',
    title: 'Proklamasi Kemerdekaan Indonesia',
    slug: 'proclamation',
    description: 'Soekarno-Hatta memproklamasikan kemerdekaan Indonesia. Akhir penjajahan 350 tahun, awal era baru bangsa.',
    fullDescription: `Pada 17 Agustus 1945, di Jalan Pegangsaan Timur 56 Jakarta, Soekarno-Hatta memproklamasikan kemerdekaan Indonesia. Naskah proklamasi yang singkat namun bersejarah dibacakan Soekarno, didengar oleh ratusan pemuda dan rakyat yang berkumpul. Moment ini mengakhiri 350 tahun penjajahan dan menandai lahirnya Republik Indonesia sebagai negara merdeka dan berdaulat. 

Bendera Merah Putih yang telah dijahit oleh Fatmawati dikibarkan dengan bantuan Latief dan Suhud. Pengibarakn bendera Merah Putih diikuti dengan menyanyikan lagu Indonesia Raya. Persitiwa Proklamasi ini diabadikan dalam foto oleh Frans Mendur dan Alex Mendur yang berprofesi sebagai wartawan. Namun, fato-foto tersebut dirampas oleh tentara Jepang.`,
    keyFigures: ['Tugu Proklamasi', 'Museum Perumusan Naskah Proklamasi', 'Bendera Merah Putih'],
    relatedEvents: ['Nasionalisme', 'Persatuan dan Kesatuan', 'Kemandirian dan Keberanian', 'Patriotisme'],
    imageId: 'proclamation-1945',
    suggestionQuestions: [
      'Mengapa Proklamasi dibacakan di Jalan Pegangsaan Timur 56?',
      'Siapa saja tokoh yang berperan dalam perumusan naskah Proklamasi?',
      'Apa makna simbolis dari Bendera Merah Putih yang dijahit Fatmawati?'
    ],
  },

  
// ERA 4: INDONESIA MODERN (1945-1949)
  {
    id: 'independence-struggle',
    year: '1945 - 1949',
    era: 'modern',
    title: 'Revolusi Kemerdekaan: Mempertahankan yang Telah Diproklamasikan',
    slug: 'independence-struggle',
    description: 'Pertempuran Surabaya, Serangan Umum 1 Maret, Agresi Militer. Indonesia berjuang mempertahankan kemerdekaan.',
    fullDescription: `Setelah proklamasi, Indonesia harus mempertahankan kemerdekaannya dari upaya Belanda untuk kembali berkuasa. Pertempuran Surabaya (10 November 1945) melawan Inggris yang ingin menguasai Surabaya. Walaupun pada akhirnya Surabaya secara keseluruhan tetap jatuh ke tangan Bangsa Inggris, dengan adanya kejadian Pertempuran Surabaya tersebut mengubah cara pandang atau perspektif Bangsa Inggris dan juga Belanda terhadap Indonesia.

Selanjutnya, Peristiwa Bandung Lautan Api terjadi karena para pejuang pihak Republik Indonesia tidak rela jika Kota Bandung dimanfaatkan oleh pihak Sekutu serta NICA. Keputusan ini sendiri diambil untuk membumihanguskan Bandung melalui musyawarah Madjelis Persatoean Perdjoangan Priangan (MP3) di hadapan semua kekuatan perjuangan pihak RI. Pada hari yang sama, pembakaran kota tersebut dilakukan.

Konflik tersebut terus berlanjut hinggan peristiwa Serangan Umum 1 Maret 1949 di Yogyakarta dan perjuangan diplomasi Bung Hatta dan Sutan Sjahrir di PBB. Sampai pada akhirnya pada 27 Desember 1949, Belanda mengakui kedaulatan Indonesia melalui Konferensi Meja Bundar. Penyerahan Kedaulatan tersebut dilaksankan di Amsterdam dan Jakarta.`,
    keyFigures: ['Tugu Pahlawan', 'Museum 10 November', 'Monumen Nasional'],
    relatedEvents: ['Gigih dan Pantang Menyerah', 'Rela Berkorban', 'Persatuan dan Kesatuan'],
    imageId: 'independence-war',
    suggestionQuestions: [
      'Mengapa Pertempuran Surabaya diperingati sebagai Hari Pahlawan?',
      'Apa alasan di balik peristiwa Bandung Lautan Api?',
      'Bagaimana diplomasi berperan dalam pengakuan kedaulatan Indonesia?'
    ],
  },
  
{
    id: 'nation-building',
    year: '1950 - 1966',
    era: 'modern',
    title: 'Membangun Bangsa: Demokrasi Liberal & Terpimpin',
    slug: 'nation-building',
    description: 'Era Soekarno: Demokrasi Liberal, Demokrasi Terpimpin, hingga Peristiwa G30S PKI. ',
    fullDescription: `Pada Demokrasi Liberal, diberlakukan Undang-Undang Republik Indonesia Serikat serta UUDS 1950 yang menganut sistem parlementer. Situasi politik pun dinilai belum stabil bahkan keamanan negara juga cukup terancam lantaran masih banyak terjadi pemberontakan dan kehidupan rakyat tidak sejahtera. Terhitung sejak 17 Agustus 1950 sampai 5 Juli 1959, Soekarno tetap menggunakan Undang-Undang Dasar Sementara selama memerintah Indonesia. Dewan Konstituante saat itu sempat diperintah untuk menyusun UU baru sesuai amanat UUDS 1950. Akan tetapi prosesnya tidak kunjung dibuat sampai akhirnya Soekarno merilis Dekrit Presiden 5 Juli 1959 yang menyatakan pembubaran konstitusi.

Periode 1959-1966 disebut sebagai demokrasi terpimpin sesuai dengan hasil Dekrit Presiden 1959, yang menyatakan bahwa semua sistem pemerintahan dikendalikan presiden sepenuhnya. Dengan dimulainya demokrasi terpimpin, Soekarno mulai menata kembali parlemen baru dan membubarkan parlemen lama. Kemudian satuan tentara juga dilibatkan dalam perpolitikan negeri sebagai kelompok fungsional, bersamaan dengan masuknya PKI untuk menyeimbangkan. Meski menurut Soekarno adanya campur tangan PKI bisa jadi penyeimbang, nyatanya pilihan itu banyak ditentang. Sayangnya, kehadiran PKI tersebut justru menimbulkan konflik yang berujung pada puncak peristiwa G30S PKI pada 30 September 1965.

Kedekatan Soekarno dengan para PKI membuat rakyat tidak senang, Bahkan hal tersebut membuat reputasinya menurun dan sudah tidak dipercayai lagi. Terlebih rakyat juga khawatir jika pemimpin negara terlalu dekat dengan PKI akan menimbulkan munculnya paham komunisme. Atas dasar itu, Soekarno menyerahkan jabatannya. Pada 23 Februari 1967 di Istana Negara, kekuasaan pemerintah resmi diserahkan ke pemegang Supersemar Jenderal Soeharto.`,
    keyFigures: ['Stadion Glora Bung Karno', 'Masjid Istiqlal', 'Patung Pancoran', 'Monumen Pancasila Sakti di Lubang Buaya'],
    relatedEvents: ['Nasionalisme', 'Kemandirian', 'Anti Kolonialisme'],
    imageId: 'asian-african-conference',
    suggestionQuestions: [
      'Apa perbedaan Demokrasi Liberal dan Demokrasi Terpimpin?',
      'Mengapa Dekrit Presiden 5 Juli 1959 dikeluarkan?',
      'Bagaimana peristiwa G30S PKI mempengaruhi peralihan kekuasaan?'
    ],
  },
  
{
    id: 'new-order-development',
    year: '1966 - 1998',
    era: 'modern',
    title: 'Orde Baru: Pembangunan Ekonomi & Stabilitas Politik',
    slug: 'new-order-development',
    description: 'Era Soeharto: Swasembada pangan, industrialisasi, pertumbuhan ekonomi. Namun juga otoriterisme dan korupsi.',
    fullDescription: `Salah satu keberhasilan utama Orde Baru adalah tercapainya swasembada beras pada tahun 1984. Pemerintah menjalankan program intensifikasi pertanian seperti Bimas, Inmas, penggunaan pupuk, bibit unggul, dan irigasi. Pemerintahan juga mendorong industrialisasi untuk mengurangi ketergantungan pada sektor pertanian. Tak hanya itu, Indonesia juga mengalami pertumbuhan ekonomi yang relatif stabil, khususnya pada tahun 1970–1990-an. Pendapatan negara meningkat berkat ekspor minyak dan gas serta investasi asing.

Namun dibalik itu semua, pemerintahan Soeharto bersifat otoriter. Kekuasaan terpusat pada presiden, kebebasan berpendapat dibatasi, dan partai politik dikendalikan. Era Soeharto juga ditandai dengan maraknya praktik korupsi, kolusi, dan nepotisme (KKN). Banyak proyek negara dikuasai oleh keluarga dan kroni Soeharto.`,
    keyFigures: ['Jalan Tol Jagorawi', 'Bendungan Gajah Mungkur', 'Bandara Sukarno-Hatta', 'Stasiun Gambir'],
    relatedEvents: ['Persatuan dan Nasionalisme', 'Kebebasan Berpendapat', 'Mempertahankan dan Menerapkan Asas Pancasila'],
    imageId: 'new-order-development',
    suggestionQuestions: [
      'Bagaimana Indonesia mencapai swasembada beras pada tahun 1984?',
      'Apa yang dimaksud dengan KKN di era Orde Baru?',
      'Apa saja dampak positif dan negatif pemerintahan Soeharto?'
    ],
  },
  
{
    id: 'reformation-era',
    year: '1998 - Sekarang',
    era: 'modern',
    title: 'Era Reformasi: Demokrasi, Kebebasan, dan Tantangan Baru',
    slug: 'reformation-era',
    description: 'Kejatuhan Soeharto membawa demokrasi, desentralisasi, kebebasan pers. Indonesia berkembang menjadi demokrasi terbesar ketiga dunia.',
    fullDescription: `Kejatuhan Presiden Soeharto pada Mei 1998 menandai awal Masa Reformasi di Indonesia, yang membawa perubahan besar dalam sistem politik dan pemerintahan. Pada era ini, Indonesia beralih dari pemerintahan yang otoriter menuju demokrasi, ditandai dengan pelaksanaan pemilihan umum yang lebih bebas, jujur, dan adil, termasuk pemilihan presiden dan kepala daerah secara langsung. Kekuasaan tidak lagi terpusat di pemerintah pusat, melainkan mulai dibagi melalui kebijakan desentralisasi dan otonomi daerah, sehingga daerah memiliki kewenangan lebih luas dalam mengatur urusan pemerintahan dan pembangunan masing-masing.
Selain itu, Masa Reformasi juga ditandai dengan meningkatnya kebebasan pers dan kebebasan berpendapat. Media massa tidak lagi berada di bawah kontrol ketat pemerintah, sehingga dapat berperan sebagai sarana informasi, kritik, dan pengawasan terhadap kekuasaan. Perubahan-perubahan tersebut mendorong transparansi dan akuntabilitas pemerintahan. Dengan sistem demokrasi yang terus berkembang dan partisipasi politik masyarakat yang tinggi, Indonesia kemudian diakui sebagai demokrasi terbesar ketiga di dunia, meskipun masih menghadapi berbagai tantangan dalam pelaksanaannya.`,
    keyFigures: ['Monumen Trisakti', 'MRT, LRT, dan Kereta Cepat', 'Tol Palimanan-Kanci'],
    relatedEvents: ['Demokrasi', 'Kebebasan Berpendapat', 'Transparansi', 'Penghormatan HAM'],
    imageId: 'reformation-1998',
    suggestionQuestions: [
      'Apa yang memicu kejatuhan Soeharto pada tahun 1998?',
      'Bagaimana desentralisasi mengubah tata kelola Indonesia?',
      'Mengapa kebebasan pers penting dalam era Reformasi?'
    ],
  },
  
{
    id: 'digital-indonesia',
    year: '2010 - Sekarang',
    era: 'modern',
    title: 'Indonesia Digital: Startup Unicorn & Ekonomi Kreatif',
    slug: 'digital-indonesia',
    description: 'Gojek, Tokopedia, Traveloka. Indonesia melahirkan startup unicorn dan menjadi kekuatan ekonomi digital terbesar di Asia Tenggara.',
    fullDescription: `Indonesia memasuki era digital dengan pesat. Startup seperti Gojek, Tokopedia, Traveloka, dan Bukalapak mencapai status unicorn (valuasi di atas 1 miliar USD), mengubah lanskap ekonomi. Indonesia kini memiliki ekonomi digital terbesar di Asia Tenggara. Generasi muda Indonesia menjadi content creator, digital entrepreneur, dan inovator teknologi. E-commerce, fintech, edtech berkembang pesat. Indonesia juga menjadi salah satu pengguna media sosial terbesar di dunia, dengan kreativitas konten yang luar biasa.`,
    keyFigures: ['Aplikasi Ojek Online', 'Aplikasi Perbelanjaan Online', 'Artificial Intelligence'],
    relatedEvents: ['Integritas', 'Etika dan Empati', 'Bertanggung-jawab', 'Membela Kebenaran'],
    imageId: 'digital-indonesia',
    suggestionQuestions: [
      'Apa itu startup unicorn dan mengapa Indonesia punya banyak?',
      'Bagaimana ekonomi digital mengubah kehidupan masyarakat Indonesia?',
      'Apa peran generasi muda dalam perkembangan teknologi Indonesia?'
    ],
  },
  
{
    id: 'ikn-nusantara',
    year: '2024 - Masa Depan',
    era: 'modern',
    title: 'IKN Nusantara: Forest City untuk Masa Depan',
    slug: 'ikn-nusantara',
    description: 'Membangun ibu kota baru di Kalimantan dengan konsep Forest City: hijau, berkelanjutan, dan berbasis teknologi smart city.',
    fullDescription: `Ibu Kota Nusantara (IKN) di Kalimantan Timur adalah proyek visioner Indonesia untuk abad ke-21. Dengan konsep "Forest City", IKN dirancang untuk menjadi kota yang harmonis dengan alam, mengintegrasikan kearifan lokal suku Dayak dengan teknologi smart city terkini. IKN akan menjadi pusat pemerintahan yang hijau, berkelanjutan, dan ramah lingkungan - sebuah model baru bagi kota-kota masa depan di dunia. Ini adalah simbol transformasi Indonesia menuju negara maju yang tetap menjaga kelestarian alam.`,
    keyFigures: ['Konsep Forest City', 'Smart City Technology', 'Kearifan Lokal Dayak', 'Pembangunan Berkelanjutan'],
    relatedEvents: ['Ekonomi Maju', 'Ketahanan Nasional', 'Keadilan Sosial', 'Gotong Royong'],
    suggestionQuestions: [
      'Mengapa Indonesia memindahkan ibu kota ke Kalimantan?',
      'Apa itu konsep Forest City yang diterapkan di IKN?',
      'Bagaimana IKN mengintegrasikan kearifan lokal Dayak dengan teknologi modern?'
    ],
    imageId: 'ikn-nusantara',
  },


].map(event => ({
  ...event,
  era: event.era as TimelineEra,
  colorClass: eraColors[event.era as TimelineEra],
}));

export const timelineData = timelineEvents;


export const regionsData: Region[] = [
    {
        id: 'sumatera',
        name: 'Sumatera',
        description: 'Jelajahi kekayaan alam dan budaya Melayu yang kental di pulau paling barat di Indonesia.',
        imageId: 'sumatera-region',
        coordinates: [0.5897, 101.3431],
        details: {
            history: `Sumatera adalah rumah bagi kerajaan maritim besar seperti Sriwijaya yang menguasai perdagangan di Selat Malaka selama berabad-abad.

Pulau ini juga menjadi salah satu gerbang utama masuknya Islam ke Nusantara.`,
            folklore: `Legenda Malin Kundang, anak durhaka yang dikutuk menjadi batu, adalah salah satu cerita rakyat paling terkenal dari Sumatera Barat, mengajarkan pentingnya menghormati orang tua.`,
            figures: [
                { name: 'Tuanku Imam Bonjol', description: 'Ulama, pemimpin, dan pejuang yang berperang melawan Belanda dalam Perang Padri.', imageId: 'imam-bonjol' },
                { name: 'Sutan Sjahrir', description: 'Seorang intelektual, politikus, dan perdana menteri pertama Indonesia.', imageId: 'sutan-sjahrir' },
                { name: 'Chairil Anwar', description: 'Penyair terkemuka Indonesia, pelopor Angkatan \'45 dalam sastra Indonesia.', imageId: 'chairil-anwar' },
            ],
            cuisine: ['Rendang', 'Pempek', 'Gulai Ikan Patin', 'Bika Ambon'],
            cuisineImageId: 'rendang',
            clothing: ['Ulos (Batak)', 'Songket (Palembang)'],
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
        },
        suggestionQuestions: [
            'Bagaimana Kerajaan Sriwijaya mempengaruhi perkembangan Sumatera?',
            'Apa makna filosofis dari legenda Malin Kundang?',
            'Bagaimana peran Tuanku Imam Bonjol dalam Perang Padri?'
        ]
    },
    {
        id: 'jawa',
        name: 'Jawa',
        description: 'Selami jantung peradaban kuno, pusat pemerintahan, dan dinamika budaya modern Indonesia.',
        imageId: 'jawa-region',
        coordinates: [-7.7956, 110.3695],
        details: {
            history: `Pulau Jawa menjadi pusat dari kerajaan-kerajaan agraris besar seperti Mataram Kuno, Majapahit, hingga Mataram Islam. Peninggalan berupa candi-candi megah menjadi saksi bisu kejayaan masa lalu.`,
            folklore: `Kisah Roro Jonggrang yang menceritakan asal-usul Candi Prambanan adalah dongeng populer tentang cinta, pengkhianatan, dan kekuatan gaib.`,
            figures: [
                { name: 'Gajah Mada', description: 'Mahapatih Majapahit yang terkenal dengan Sumpah Palapa untuk menyatukan Nusantara.', imageId: 'gajah-mada' },
                { name: 'Pangeran Diponegoro', description: 'Pahlawan nasional yang memimpin Perang Jawa melawan penjajah Belanda.', imageId: 'diponegoro' },
                { name: 'R.A. Kartini', description: 'Pahlawan nasional dan pelopor emansipasi wanita di Indonesia.', imageId: 'kartini' },
            ],
            cuisine: ['Gudeg', 'Rawon', 'Sate Madura', 'Nasi Liwet'],
            cuisineImageId: 'gudeg',
            clothing: ['Batik', 'Kebaya'],
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
        },
        suggestionQuestions: [
            'Apa yang membuat Candi Borobudur menjadi keajaiban arsitektur dunia?',
            'Bagaimana Sumpah Palapa Gajah Mada membentuk visi persatuan Nusantara?',
            'Apa peran R.A. Kartini dalam perjuangan emansipasi wanita Indonesia?'
        ]
    },
    {
        id: 'kalimantan',
        name: 'Kalimantan',
        description: 'Temukan keajaiban hutan hujan tropis, keanekaragaman hayati, dan kearifan lokal suku Dayak.',
        imageId: 'kalimantan-region',
        coordinates: [-0.02, 113.9213],
        details: {
            history: `Kalimantan memiliki sejarah kerajaan Hindu seperti Kutai Kartanegara, kerajaan tertua di Indonesia. Hutan lebatnya menyimpan banyak misteri dan menjadi jalur perdagangan penting di masa lalu.`,
            folklore: `Legenda Batu Menangis dari Kalimantan Barat menceritakan tentang seorang gadis cantik yang durhaka pada ibunya dan dikutuk menjadi batu yang terus mengeluarkan air mata.`,
            figures: [
                { name: 'Pangeran Antasari', description: 'Pahlawan Nasional Indonesia dari Kesultanan Banjar yang memimpin perlawanan terhadap Belanda.', imageId: 'antasari' },
                { name: 'Tjilik Riwut', description: 'Pahlawan Nasional, gubernur pertama Kalimantan Tengah, dan tokoh adat Dayak.', imageId: 'tjilik-riwut' },
            ],
            cuisine: ['Soto Banjar', 'Ayam Cincane', 'Bubur Pedas Sambas'],
            cuisineImageId: 'soto-banjar',
            clothing: ['Baju adat Dayak'],
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
        },
        suggestionQuestions: [
            'Mengapa Kerajaan Kutai disebut sebagai kerajaan tertua di Indonesia?',
            'Bagaimana kearifan lokal suku Dayak dalam menjaga kelestarian hutan?',
            'Apa makna simbolis dari upacara adat Erau bagi Kesultanan Kutai?'
        ]
    },
    {
        id: 'sulawesi',
        name: 'Sulawesi',
        description: 'Jelajahi pulau dengan bentuk unik, dari surga bawah laut hingga ritual pemakaman yang menakjubkan.',
        imageId: 'sulawesi-region',
        coordinates: [-1.42, 120.46],
        details: {
            history: `Sulawesi dikenal sebagai rumah bagi para pelaut ulung Bugis-Makassar dari Kerajaan Gowa-Tallo. Mereka mengarungi samudra dengan kapal Phinisi yang legendaris.`,
            folklore: `La Galigo adalah sebuah wiracarita mitologis dari peradaban Bugis kuno, salah satu karya sastra terpanjang di dunia yang menceritakan asal-usul manusia.`,
            figures: [
                { name: 'Sultan Hasanuddin', description: 'Raja Gowa ke-16 yang dijuluki "Ayam Jantan dari Timur" oleh Belanda karena keberaniannya.', imageId: 'hasanuddin' },
                { name: 'Emmy Saelan', description: 'Pahlawan wanita dari Sulawesi Selatan yang berjuang dalam perang kemerdekaan.', imageId: 'emmy-saelan' },
            ],
            cuisine: ['Coto Makassar', 'Pallubasa', 'Sop Konro'],
            cuisineImageId: 'coto-makassar',
            clothing: ['Baju Bodo'],
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
        },
        suggestionQuestions: [
            'Bagaimana pelaut Bugis-Makassar menjelajahi samudra dengan kapal Phinisi?',
            'Apa makna filosofis dari upacara Rambu Solo bagi masyarakat Toraja?',
            'Mengapa Sultan Hasanuddin dijuluki "Ayam Jantan dari Timur"?'
        ]
    },
    {
        id: 'papua',
        name: 'Papua',
        description: 'Nikmati petualangan di tanah paling timur Indonesia, rumah bagi puncak salju abadi dan tradisi kuno.',
        imageId: 'papua-region',
        coordinates: [-4.2249, 138.084],
        details: {
            history: `Papua memiliki sejarah panjang sebagai wilayah yang dihuni oleh ratusan suku dengan budaya yang sangat beragam. Kontak dengan dunia luar secara intensif baru terjadi dalam beberapa abad terakhir.`,
            folklore: `Kisah buaya ajaib yang menolong seorang anak dari suku Asmat adalah salah satu cerita yang menggambarkan hubungan erat antara manusia dan alam di Papua.`,
            figures: [
                { name: 'Frans Kaisiepo', description: 'Pahlawan Nasional yang berperan dalam penyatuan Papua dengan Indonesia.', imageId: 'frans-kaisiepo' },
                { name: 'Silas Papare', description: 'Seorang pejuang kemerdekaan yang mendirikan Partai Kemerdekaan Indonesia Irian.', imageId: 'silas-papare' },
            ],
            cuisine: ['Papeda', 'Ikan Bakar Manokwari', 'Sate Ulat Sagu'],
            cuisineImageId: 'papeda',
            clothing: ['Koteka', 'Rok Rumbai'],
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
        },
        suggestionQuestions: [
            'Bagaimana tradisi Bakar Batu merefleksikan kearifan lokal Papua?',
            'Mengapa Noken diakui UNESCO sebagai warisan budaya takbenda?',
            'Apa peran Frans Kaisiepo dalam penyatuan Papua dengan Indonesia?'
        ]
    },
    {
        id: 'bali-nusa-tenggara',
        name: 'Bali & Nusa Tenggara',
        description: 'Temukan pesona gugusan pulau eksotis, dari spiritualitas Bali hingga kadal purba di Komodo.',
        imageId: 'bali-nt-region',
        coordinates: [-8.65, 115.2167],
        details: {
            history: `Bali memiliki sejarah kerajaan yang kuat dengan budaya Hindu yang unik. Sementara itu, Nusa Tenggara menjadi jalur perdagangan penting dan rumah bagi berbagai suku.`,
            folklore: `Cerita Calon Arang dari Bali mengisahkan tentang pertarungan antara sihir baik dan jahat, menjadi dasar dari banyak pertunjukan seni di Bali.`,
            figures: [
                { name: 'I Gusti Ngurah Rai', description: 'Pahlawan Nasional yang memimpin pasukan Ciung Wanara dalam Puputan Margarana.', imageId: 'ngurah-rai' },
                { name: 'Walter Spies', description: 'Seniman Jerman yang sangat berpengaruh dalam perkembangan seni modern Bali.', imageId: 'walter-spies' },
            ],
            cuisine: ['Ayam Betutu', 'Sate Lilit', 'Ayam Taliwang (Lombok)'],
            cuisineImageId: 'ayam-betutu',
            clothing: ['Payas Agung (Bali)'],
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
        },
        suggestionQuestions: [
            'Bagaimana sistem irigasi Subak mencerminkan filosofi Tri Hita Karana?',
            'Apa makna spiritual dari upacara Ngaben dalam kepercayaan Hindu Bali?',
            'Bagaimana I Gusti Ngurah Rai memimpin perlawanan dalam Puputan Margarana?'
        ]
    },
    {
        id: 'maluku',
        name: 'Maluku',
        description: 'Kunjungi "Kepulauan Rempah" yang legendaris, pusat sejarah maritim dan surga pantai tersembunyi.',
        imageId: 'maluku-region',
        coordinates: [-3.655, 128.19],
        details: {
            history: `Selama berabad-abad, Maluku menjadi satu-satunya sumber rempah-rempah seperti cengkih dan pala, menjadikannya rebutan bangsa-bangsa Eropa dan pusat perdagangan dunia.`,
            folklore: `Legenda Batu Badaong (Batu Berdaun) di Ternate menceritakan tentang batu keramat yang menjadi pusat kekuatan spiritual kesultanan.`,
            figures: [
                { name: 'Kapitan Pattimura', description: 'Pahlawan Nasional yang memimpin pemberontakan melawan VOC Belanda di Maluku.', imageId: 'pattimura' },
                { name: 'Sultan Baabullah', description: 'Sultan Ternate yang berhasil mengusir Portugis dari Maluku dan membawa kesultanan ke puncak kejayaan.', imageId: 'baabullah' },
            ],
            cuisine: ['Ikan Kuah Pala Banda', 'Gohu Ikan', 'Nasi Lapola'],
            cuisineImageId: 'ikan-kuah-pala',
            clothing: ['Baju Cele'],
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
        },
        suggestionQuestions: [
            'Mengapa Maluku menjadi rebutan bangsa-bangsa Eropa di masa lalu?',
            'Bagaimana Kapitan Pattimura memimpin perlawanan melawan VOC?',
            'Apa peran cengkih dan pala dalam sejarah perdagangan dunia?'
        ]
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
    fullDescription: `Tarian ini menampilkan aksi atraksi menari menggunakan piring. Para penari akan mengayunkan piring yang berada di telapak tangan mereka selaras dengan music iringan serta gerakan yang cepat dan teratur tanpa melepaskan atau membiarkan satu piring pun terjatuh. Gerakan tari piring diambil dari gerakan silat Minangkabau atau yang biasa disebut silek.

Tari Piring kerap digunakan sebagai tari untuk menyambut tamu-tamu terhormat dalam beberapa acara dan digunakan sebagai ajang promosi pariwisata serta kebudayaan yang ada di Indonesia.`,

    history: `Secara tradisional tari piring berasal dari Solok, Sumatera Barat yang  diperkirakan sudah ada sejak zaman abad ke-12. Dahulu masyarakat Minangkabau masih memiliki kepercayaan kepada dewa-dewa. Awal mulanya tari piring digunakan sebagai tari pemujaan masyarakat kepada Dewi Padi setiap musim panen tiba, masyarakat melakukan hal tersebut untuk sebagai ucapan terima kasih atas berhasilnya panen mereka.`,

    meaning: 'Bentuk ucapan terima kasih serta gambaran rasa syukur masyarakat yang mendalam kepada dewa-dewa yang sudah menyuburkan dan membuat hasil panen mereka menjadi tidak gagal.',
    suggestionQuestions: [
      'Bagaimana para penari menjaga keseimbangan piring saat menari?',
      'Apa hubungan gerakan Tari Piring dengan silek Minangkabau?',
      'Kapan waktu yang tepat untuk menampilkan Tari Piring?'
    ],
  },
  {
    id: 'tari-kecak',
    name: 'Tari Kecak',

    region: 'Bali',

    category: 'Tarian',

    imageId: 'tari-kecak',

    shortDescription: 'Drama tari spektakuler yang menceritakan kisah Ramayana dengan iringan paduan suara "cak-cak".',
    fullDescription: `Tari Kecak adalah pertunjukan seni khas Bali yang diciptakan pada tahun 1930-an. Puluhan hingga ratusan penari laki-laki duduk melingkar sambil meneriakkan irama "cak, cak, cak" secara berulang. Tari ini tidak diiringi alat musik gamelan seperti tarian Bali lainnya, melainkan hanya dengan paduan suara vokal penarinya. Tarian ini juga mementaskan adegan dari epos Ramayana.

Gerakan tari kecak memiliki ciri khas tersendiri yang membedakannya dari tarian tradisional lainnya. Penari laki-laki duduk bersila membentuk lingkaran dan mengangkat tangan sambil menggoyangkan tubuh sesuai irama vokal "cak". Gerakan ini menggambarkan energi, kekompakan, dan spiritualitas yang tinggi. Sementara itu, para penari yang memerankan tokoh-tokoh dalam Ramayana—seperti Rama, Sita, Hanoman, dan Rahwana—melakukan gerakan tari Bali klasik yang elegan dan penuh makna.`,

    history: `Terinspirasi dari tradisi Sanghyang, yang kemudian digabungkan dengan bagian dari kisah Ramayana oleh I Wayan Limbak dan seorang pelukis Jerman, Walter Spies. Sementara itu, asal tarian ini tercipta dari teriakan atau seruan kata yang muncul dari bibirnya yang berbunyi dan bernama "cak cak cak" ketika dimainkannya atau dipertunjukkan.`,

    meaning: 'Adanya kepercayaan pada kekuatan Tuhan yang dicerminkan pada tindakan Rama saat meminta pertolongan kepada Dewata. Tarian Kecak juga mencerminkan perilaku Rama kepada permaisuri kesayangannya yaitu Shinta, dan Burung Garuda yang rela untuk mengorbankan sayapnya demi Shinta. ',
    suggestionQuestions: [
      'Mengapa Tari Kecak tidak menggunakan alat musik gamelan?',
      'Siapa tokoh-tokoh dalam cerita Ramayana yang ditampilkan dalam Tari Kecak?',
      'Apa peran Walter Spies dalam pengembangan Tari Kecak?'
    ],
  },
  {
    id: 'tari-saman',

    name: 'Tari Saman',

    region: 'Aceh',

    category: 'Tarian',

    imageId: 'tari-saman',

    shortDescription: 'Tarian seribu tangan dari Suku Gayo dengan gerakan tepukan yang sinkron dan cepat.',

    fullDescription: `Tari Saman merupakan tarian yang berasal dari suku Gayo dan biasanya ditampilkan dalam suatu perayaan penting di suatu peristiwa adat. Syair pada tariannya juga mempergunakan Bahasa-bahasa Gayo. Keunikannya terletak pada kekompakan gerakan tangan para penari yang sangat cepat dan harmonis, diiringi syair-syair berbahasa Gayo.

Berbeda dengan Tari Ratoh Jaroe yang ditampilkan oleh sekelompok perempuan, Tari Saman disajikan oleh sekelompok laki-laki yang berjumlah ganjil. Tari Saman tidak menggunakan iringan musik sama sekali, mereka hanya mengandalkan suara dan tepukan tangan dari para penarinya.`,

    history: `Diciptakan oleh Syekh Saman, seorang ulama dari Gayo, sebagai media penyebaran agama Islam hingga akhirnya diakui sebagai Warisan Budaya Takbenda oleh UNESCO.`,

    meaning: 'Menggambarkan pria yang berpendidikan dan bersikap sopan santun. Mengandung nilai keagamaan, kepahlawanan, kebersamaan.',
    suggestionQuestions: [
      'Mengapa Tari Saman disebut sebagai tarian seribu tangan?',
      'Apa makna syair berbahasa Gayo dalam Tari Saman?',
      'Bagaimana proses latihan untuk mencapai kekompakan dalam Tari Saman?'
    ],
  },
  {
    id: 'tari-gantar',

    name: 'Tari Gantar',

    region: 'Kalimantan Timur',

    category: 'Tarian',

    imageId: 'tari-gantar',

    shortDescription: 'Tarian suku Dayak yang menggambarkan kegiatan menanam padi dengan gerakan yang dinamis menggunakan tongkat bambu.',

    fullDescription: `Tari Gantar merupakan jenis tarian pergaulan antara muda mudi yang berasal dari Suku Dayak Benuaq dan Dayak Tunjung di Kabupaten Kutai Barat, Kalimantan Timur. Tarian ini menggambarkan aktivitas menanam padi di ladang, dari mulai membuka lahan, menugal (membuat lubang tanam), hingga penanaman benih. Para penari menggunakan tongkat bambu (gantar) sebagai alat bantu menari.`,

    history: `Berdasarkan mitos atau cerita rakyat, tari gantar berasal dari negeri Dewa Nayu dari langit Onteng Doi atau negerinya para dewa. Tarian ini biasanya dibawakan pada saat musim tanam tiba untuk memohon hasil panen yang melimpah.`,

    meaning: 'Melambangkan rasa syukur kepada Sang Pencipta, kegotong-royongan masyarakat agraris, dan harapan kemakmuran dari hasil panen.',
    suggestionQuestions: [
      'Apa fungsi tongkat bambu (gantar) dalam tarian ini?',
      'Bagaimana Tari Gantar menggambarkan aktivitas bertani?',
      'Kapan waktu yang tepat untuk menampilkan Tari Gantar?'
    ],
  },
  {
    id: 'tenun',

    name: 'Tenun',

    region: 'Nusa Tenggara Timur',

    category: 'Kerajinan',

    imageId: 'tenun',
    shortDescription: 'Kain tradisional yang dibuat dengan teknik menenun benang secara manual, menghasilkan motif khas daerah.',

    fullDescription: `Kain tenun ikat adalah kain yang dibuat dengan cara memasukan benang pakan secara horizontal pada benang-benang lungsin yang biasanya telah diwarnai dan diikat terlebih dahulu. Kain tenun ikat termasuk kekayaan NTT yang teknik pembuatannya telah diwariskan turun-temurun. Kain ini memiliki banyak fungsi, seperti sebagai busana, mahar, penunjuk status sosial, alat transaksi, bentuk penghargaan pada tamu, serta penghormatan pada acara kematian.

Bagi masyarakat Nusa Tenggara Timur, bisa menenun menjadi salah satu pertanda bahwa seorang perempuan telah siap untuk menikah. Maka tidak heran, jika banyak perempuan di provinsi ini yang memiliki keterampilan menenun.`,

    history: `Kain ini diduga telah ada sejak abad ke-3 Masehi, saat kerajaan hadir di NTT. Kehadiran kain ini, dipercaya beriringan dengan perkembangan seni dan budaya. Menurut penelitian, nenek moyang Nusa Tenggara Timur yang berasal dari ras Astromelanesoid, Mongoloid, Negroid, dan Eropoid, telah mendiami pulau tersebut sejak 3.500 tahun yang lalu.`,
    meaning: 'Mencerminkan identitas, sejarah, dan spiritualitas, melambangkan perjalanan hidup, hubungan dengan leluhur, serta nilai keberanian, kesuburan, dan keseimbangan. ',
    suggestionQuestions: [
      'Bagaimana proses pembuatan kain tenun ikat tradisional?',
      'Apa saja fungsi kain tenun dalam masyarakat NTT?',
      'Mengapa kemampuan menenun dianggap penting bagi perempuan NTT?'
    ],
  },
  {
    id: 'wayang',

    name: 'Wayang Kulit',

    region: 'Jawa & Bali',

    category: 'Kerajinan',

    imageId: 'wayang',

    shortDescription: 'Seni pertunjukan teater bayangan yang menggunakan boneka kulit, diiringi musik gamelan.',

    fullDescription: `Wayang Kulit adalah bentuk teater tradisional yang dimainkan oleh seorang dalang. Dalang menggerakkan boneka kulit di belakang layar putih yang disinari lampu, menciptakan bayangan yang hidup sambil menuturkan suatu kisah legendaris. Boneka kulit tersebut biasanya terbuat dari kulit hewan (sapi atau kerbau), kayu, atau rumput (wayang suket).
Fungsi wayang kulit Jawa masa kini sudah sedikit mulai bergeser ke arah hiburan. Kondisi itu berbeda dengan pertunjukan wayang Bali. Pertunjukan wayang Bali masih mempertahankan fungsi mengenai kepentingan religi dan upacara adat.`,

    history: `Sejarah wayang kulit sangat terkait dengan agama Hindu dan Buddha, yang masuk ke Indonesia pada abad ke-1 Masehi. Pertunjukan wayang kulit awalnya digunakan sebagai sarana penyampaian ajaran agama dan cerita epik seperti Mahabharata dan Ramayana. Namun, seiring waktu, wayang kulit juga memasukkan elemen-elemen lokal dan mitologi pribumi, menciptakan paduan seni yang unik.`,

    meaning: 'Wayang kulit mengajarkan nilai-nilai moral dan etika kepada penonton melalui cerita-cerita yang dimainkan. Ini sering kali berfokus pada konsep kebaikan, keadilan, dan pengorbanan.',
    suggestionQuestions: [
      'Bagaimana dalang mengendalikan wayang dan bercerita sekaligus?',
      'Apa perbedaan wayang kulit Jawa dan Bali?',
      'Mengapa wayang kulit diakui UNESCO sebagai warisan budaya?'
    ],
  },
  {
    id: 'ngaben',

    name: 'Ngaben',

    region: 'Bali',

    category: 'Upacara',

    imageId: 'ngaben',

    shortDescription: 'Upacara kremasi jenazah umat Hindu di Bali yang megah dan penuh sukacita.',

    fullDescription: `Berdasarkan etimologi, kata "ngaben" sendiri konon berasal dari kata "ngabu" yang bisa diartikan sebagai "menjadi abu". Hal ini tentunya sesuai dengan prinsip dasar Upacara Ngaben, di mana mayat seseorang akan dibakar sampai tidak tersisa apapun dari badannya dan akan menjadi abu.

Upacara ngaben merupakan suatu ritual yang dilaksanakan untuk mengembalikan roh leluhur ke tempat asalnya. Tujuan dari upacara ngaben adalah mempercepat ragha sarira agar dapat kembali ke asalnya,yaitu panca maha buthadi alam ini dan bagi atma dapat cepat menuju alam pitra.`,

    history: `Tradisi ini berakar dari ajaran Hindu Dharma yang telah berakulturasi dengan kepercayaan lokal Bali selama berabad-abad.`,

    meaning: 'Upacara Ngaben termasuk adat istiadat peninggalan sejarah Hindu. Upacara tersebut memiliki tujuan untuk mengembalikan unsur-unsur jasmani kepada asalnya, yaitu Panca Maha Bhuta yang ada di Bhuana Agung.',
    suggestionQuestions: [
      'Mengapa upacara Ngaben dianggap sebagai perayaan sukacita?',
      'Apa makna filosofis dari pembakaran jenazah dalam Ngaben?',
      'Bagaimana tahapan-tahapan upacara Ngaben?'
    ],
  },
  {
    id: 'rendang',

    name: 'Rendang',

    region: 'Sumatera Barat',

    category: 'Kuliner',

    imageId: 'rendang',

    shortDescription: 'Hidangan daging kaya rempah yang dimasak berjam-jam hingga kering dan sering disebut makanan terlezat di dunia.',

    fullDescription: `Rendang adalah hidangan lauk pauk yang berasal dari Minangkabau dengan bahan dasar daging (ayam, bebek, telur, rusa, sapi, kerbau, dan lainnya) yang melalui proses memasak dengan suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan.
Proses memasak rendang berlangsung lama, biasanya sekitar empat jam, hingga menyisakan potongan daging dengan tekstur yang empuk serta bumbu kehitaman yang mengering—proses ini dikenal sebagai merendang atau slow cooking.`,
    history: `Hidangan ini terlahir akibat perilaku sedari lampau suku Minangkabau yang gemar merantau ke sana kemari sehingga butuh banyak perbekalan, terutama hidangan yang awet, tahan lama, dan bercita rasa sesuai lidah asli orang Minang. Awalnya menggunakan daging rusa. Namun, karena rusa mulai sulit didapat, bahan dasarnya beralih menjadi daging sapi atau kerbau.`,

    meaning: 'Empat bahan utamanya (daging, santan, cabai, rempah) melambangkan empat pilar masyarakat Minang: ninik mamak (pemimpin adat), cerdik pandai, alim ulama, dan kaum ibu.',
    suggestionQuestions: [
      'Mengapa rendang bisa tahan lama tanpa pengawet?',
      'Apa filosofi di balik empat bahan utama rendang?',
      'Bagaimana proses memasak rendang yang memakan waktu berjam-jam?'
    ],
  },
  {
    id: 'gamelan',

    name: 'Gamelan',

    region: 'Jawa & Bali',

    category: 'Musik',

    imageId: 'gamelan',

    shortDescription: 'Ansambel musik tradisional yang terdiri dari berbagai instrumen perkusi metal seperti metalofon, gambang, dan gendang.',

    fullDescription: `Gamelan adalah jantung dari musik tradisional di Jawa dan Bali. Ansambel ini menciptakan alunan musik yang meditatif dan kompleks, sering kali digunakan untuk mengiringi tarian, pertunjukan wayang, atau upacara keagamaan. Setiap set gamelan dianggap memiliki rohnya sendiri.
Gamelan Jawa umumnya memiliki instrumen dengan ukuran lebih besar dibandingkan gamelan Bali. Ini menjadikan gamelan Jawa menghasilkan suara yang lebih dalam dan tenang. Sementara itu, gamelan Bali cenderung dibuat dalam ukuran lebih kecil sehingga bunyinya terdengar lebih nyaring dan lincah.`,

    history: `Menurut keyakinan orang Jawa, gamelan diciptakan oleh dewa Sang Hyang Era Saka. Alat musik pertama yang diciptakan adalah gong yang digunakan untuk memanggil para dewa. Lalu, alat musik lain pun diciptakan sehingga menjadi gamelan. Gamelan sangat populer pada zaman Majapahit sehingga berkembang dan menyebar ke daerah di luar Jawa seperti Bali dan Sunda.`,

    meaning: 'Mencerminkan nilai-nilai harmoni, keselarasan, dan keseimbangan dalam kehidupan masyarakat Jawa dan Bali.',
    suggestionQuestions: [
      'Apa perbedaan suara gamelan Jawa dan gamelan Bali?',
      'Mengapa setiap set gamelan dianggap memiliki roh sendiri?',
      'Instrumen apa saja yang termasuk dalam ensemble gamelan?'
    ],
  },
  {
    id: 'tari-pendet',

    name: 'Tari Pendet',

    region: 'Bali',

    category: 'Tarian',

    imageId: 'tari-pendet',

    shortDescription: 'Tarian penyambutan dari Bali yang menampilkan penari membawa bokor berisi bunga.',

    fullDescription: `Tari Pendet pada awalnya merupakan tari pemujaan yang banyak diperagakan di pura, tempat ibadah umat Hindu. Pendet merupakan pernyataan dari sebuah persembahan dalam bentuk tarian upacara. Tidak seperti halnya tarian-tarian pertunjukan yang memerlukan pelatihan intensif, Pendet dapat ditarikan oleh semua orang, pemangkus pria dan wanita, dewasa maupun gadis.`,

    history: `Dari semua jenis tarian dari daerah Bali, tari pendet adalah salah satu tarian yang paling tua. Dimana tarian ini sudah ada sejak tahun 1950. Awal mula tarian ini muncul adalah sebagai tarian sembahan yang dilakukan ketika sembahyang di pura-pura. Tarian ini ditujukan sebagai bentuk ucapan selamat datang atas turunnya dewa di Bumi. Tari pendet adalah hasil dari gubahan maestro seni tari dari Bali yang bernama I Wayan Rindi.`,

    meaning: 'Tarian ini melambangkan penyambutan atas turunnya dewata ke alam dunia, penghormatan kepada tamu, dan rasa syukur atas kedatangan para dewa.',
    suggestionQuestions: [
      'Apa fungsi bokor berisi bunga dalam Tari Pendet?',
      'Mengapa Tari Pendet bisa ditarikan oleh semua orang tanpa pelatihan khusus?',
      'Siapa I Wayan Rindi dan bagaimana perannya dalam Tari Pendet?'
    ],
  },
  
  {
    id: 'tari-tor-tor',

    name: 'Tari Tor-Tor',

    region: 'Sumatera Utara',

    category: 'Tarian',
    imageId: 'tari-tor-tor',

    shortDescription: 'Tarian sakral suku Batak yang diiringi gondang sabangunan dan dilakukan dalam upacara adat.',

    fullDescription: `Tari Tor-Tor adalah salah satu tarian tradisional dari suku Batak, yang meliputi Batak Toba, Mandailing, Karo, dan sub etnis lainnya di Sumatera Utara. Nama "Tor-Tor" diambil dari bunyi yang dihasilkan oleh hentakan kaki para penari di lantai papan, yang menciptakan ritme khas yang mengiringi tarian ini. Seringkali ditarikan sambil memakai kain tenun Ulos untuk menyampaikan doa, harapan, dan ekspresi perasaan dalam situasi tertentu, bukan sekadar hiburan.

Saat menarikan tarian ini, gerakan tangan tidak boleh melewati bahu, karena dipercaya hal tersebut dapat mengundang kesialan.`,

    history: `Pada masa lalu, Tari Tor-Tor digunakan dalam berbagai upacara adat, seperti pesta pernikahan, upacara kematian, atau ritual penghormatan kepada roh leluhur. Tarian ini dianggap sebagai medium untuk berkomunikasi dengan para leluhur atau roh-roh suci yang dipercaya hadir selama pertunjukan berlangsung.`,

    meaning: 'Secara spiritual, tarian ini dianggap sebagai bentuk penghormatan kepada leluhur dan ungkapan rasa syukur kepada Tuhan Yang Maha Esa. Dalam konteks sosial, Tari Tor-Tor juga merupakan simbol persatuan dan kebersamaan.',
    suggestionQuestions: [
      'Mengapa bunyi hentakan kaki disebut "tor-tor"?',
      'Apa makna penggunaan kain Ulos dalam Tari Tor-Tor?',
      'Mengapa gerakan tangan tidak boleh melewati bahu?'
    ],
  },
  {
    id: 'tari-jaipong',

    name: 'Tari Jaipong',

    region: 'Jawa Barat',

    category: 'Tarian',

    imageId: 'tari-jaipong',

    shortDescription: 'Tarian modern dari Sunda yang menggabungkan gerakan tradisional dengan irama yang energik.',

    fullDescription: `Tari Jaipong adalah seni tari tradisional Sunda yang dikenal dengan gerakan dinamis, energik, dan semangat, mengombinasikan tari pergaulan rakyat dengan unsur pencak silat dan diiringi musik gamelan degung khas yang cepat. Tarian ini sering dipentaskan secara tunggal, berpasangan, atau berkelompok sebagai hiburan rakyat dan ikon budaya Sunda.

Tari Jaipong juga menjadi sarana komunikasi budaya yang mampu mempererat hubungan sosial di masyarakat. Tarian ini sering ditampilkan dalam berbagai acara adat, perayaan, dan festival, sehingga turut memperkuat identitas budaya dan kebanggaan masyarakat terhadap warisan leluhur mereka.`,

    history: `Tari Jaipong pertama kali diperkenalkan pada tahun 1970-an oleh seorang seniman bernama Gugum Gumbira. Gugum terinspirasi oleh berbagai jenis kesenian tradisional Sunda, seperti pencak silat, ketuk tilu, dan ronggeng, yang kemudian ia padukan menjadi sebuah tarian baru. Tarian ini awalnya dikenal dengan nama "Ketuk Jaipong" sebelum akhirnya dikenal luas sebagai Tari Jaipong.`,

    meaning: 'Secara umum, tarian ini melambangkan semangat, keceriaan, dan keharmonisan hidup masyarakat Sunda. Gerakan dalam Tari Jaipong menggambarkan keanggunan perempuan Sunda, sekaligus menunjukkan keberanian dan kekuatan karakter mereka. Unsur pencak silat yang diintegrasikan ke dalam tarian ini mencerminkan semangat juang dan ketangguhan.',
    suggestionQuestions: [
      'Siapa Gugum Gumbira dan bagaimana ia menciptakan Tari Jaipong?',
      'Apa perbedaan Tari Jaipong dengan tarian Sunda lainnya?',
      'Bagaimana unsur pencak silat diintegrasikan dalam Tari Jaipong?'
    ],
  },
  {
    id: 'fahombo',

    name: 'Fahombo (Lompat Batu)',

    region: 'Nias',

    category: 'Upacara',

    imageId: 'fahombo',

    shortDescription: 'Tradisi lompat batu setinggi 2 meter sebagai tes kedewasaan dan keberanian pemuda Nias.',

    fullDescription: `Fahombo atau lompat batu adalah tradisi unik masyarakat Nias di Sumatera Utara. Pemuda harus melompati batu setinggi sekitar 2 meter dan lebar 90 cm sebagai syarat kedewasaan. Tradisi ini dahulu merupakan latihan perang, karena desa-desa di Nias sering dikelilingi pagar batu tinggi untuk pertahanan.

Anak laki-laki di Nias mulai berlatih untuk melompati batu sejak umur tujuh tahun. Mereka akan terus melompati tali yang dijadikan pengganti dari batu dengan ketinggian yang disesuaikan dengan umur dan kemampuan sang anak, dan akhir dari latihan tersebut sang anak akan melompati batu yang sesungguhnya.`,

    history: `Awalnya, tradisi lompat batu berasal dari kebiasaan berperang antar desa suku-suku di pulau Nias. Masyarakat Nias memiliki karakter keras dan kuat diwarisi dari budaya pejuang perang. Dahulu, suku-suku di Pulau Nias sering berperang karena terprovokasi oleh rasa dendam, pembatasan tanah, atau masalah perbudakan.`,

    meaning: 'Simbol kekuatan dan keberanian lompat batu mencerminkan kekuatan fisik dan keberanian. Para peserta memperlihatkan ketangguhan dan keahlian, yang merupakan gambaran dari karakter yang dihargai dalam masyarakat Nias.',
    suggestionQuestions: [
      'Berapa tinggi batu yang harus dilompati dalam Fahombo?',
      'Bagaimana proses latihan pemuda Nias untuk Fahombo?',
      'Apa hubungan Fahombo dengan tradisi perang di Nias?'
    ],
  },
  {
    id: 'keris',
    name: 'Keris',

    region: 'Jawa',

    category: 'Kerajinan',

    imageId: 'keris',

    shortDescription: 'Senjata tikam tradisional dengan bilah berlekuk yang memiliki nilai spiritual dan magis.',

    fullDescription: `Keris merupakan senjata tajam golongan belati dari suku Jawa yang memiliki ragam fungsi budaya yang dikenal di kawasan Nusantara bagian barat dan tengah. Bentuknya khas dan mudah dibedakan dari senjata tajam lainnya karena tidak simetris di bagian pangkal yang melebar, sering kali bilahnya berkelok-kelok, dan banyak di antaranya memiliki pamor (damascene), yaitu terlihat serat-serat lapisan logat pada helai bilah.

Keris bagi orang Jawa adalah senjata pemungkas/terakhir setelah pedang, tombak, dan panah. Sejatinya keris bukanlah senjata utama dalam peperangan tetapi juga senjata yang disukai untuk dibawa pergi ke mana pun.`,

    history: `Keris telah ada sejak zaman Majapahit dan menjadi pusaka turun-temurun di keluarga bangsawan Jawa. Pada masa lalu keris berfungsi sebagai senjata dalam duel atau peperangan, sekaligus sebagai benda pelengkap sesajian. Keris diakui UNESCO sebagai Warisan Budaya Takbenda pada tahun 2005.`,

    meaning: 'Keris dianggap memiliki kekuatan magis. Oleh karena itu, masyarakat percaya bahwa keris dapat membawa keberuntungan sehingga terkadang dijadikan sebagai jimat hingga saat ini. Selain itu, keris juga dipercaya dapat menambah keberanian dan rasa percaya diri bagi pemiliknya.',
    suggestionQuestions: [
      'Apa itu pamor dan bagaimana cara membuatnya?',
      'Mengapa bentuk bilah keris sering berkelok-kelok?',
      'Bagaimana keris menjadi pusaka turun-temurun di keluarga Jawa?'
    ],
  },
  {
    id: 'kolintang',

    name: 'Kolintang',

    region: 'Sulawesi Utara',

    category: 'Musik',

    imageId: 'kolintang',

    shortDescription: 'Alat musik perkusi kayu khas Minahasa yang dimainkan dengan cara dipukul menggunakan stik.',

    fullDescription: `Kolintang adalah alat musik pukul tradisional Minahasa dari Sulawesi Utara, Indonesia, yang terdiri dari bilah-bilah kayu yang disusun berderet dan dipasang di atas sebuah bak kayu. Kolintang biasanya dimainkan secara ansambel. Kolintang dalam masyarakat Minahasa digunakan untuk mengiringi upacara adat, tari, menyanyi, dan bermusik. 

Kayu yang dipakai untuk membuat kolintang adalah kayu lokal yang ringan tetapi kuat seperti kayu telur, kayu wenuang, kayu cempaka, kayu waru, dan sejenisnya yang mempunyai konstruksi serat paralel.`,

    history: `Dalam suatu desa di Minahasa terdapat seorang gadis yang sangat cantik dan pandai bernyanyi bernama Lintang. Suatu hari Lintang dilamar oleh Makasiga seorang pemuda dan pengukir kayu. Lintang menerima lamaran Makasiga dengan satu syarat yaitu Makasiga harus menemukan alat musik yang bunyinya lebih merdu dari seruling emas. Makasiga dengan keahlian mengukir kayu berhasil menemukan alat musik tersebut yaitu cikal bakal dari kolintang.`,

    meaning: 'Mencerminkan semangat kebersamaan, kegembiraan, serta identitas  masyarakat Minahasa.',
    suggestionQuestions: [
      'Apa asal-usul nama "Kolintang" dari legenda Lintang?',
      'Jenis kayu apa saja yang digunakan untuk membuat Kolintang?',
      'Bagaimana cara memainkan Kolintang dalam ansambel?'
    ],
  },
  {
    id: 'ukiran-asmat',

    name: 'Ukiran Asmat',

    region: 'Papua',

    category: 'Kerajinan',

    imageId: 'ukiran-asmat',

    shortDescription: 'Seni ukir kayu yang rumit dan simbolis dari suku Asmat, menggambarkan leluhur dan makhluk mitologi.',

    fullDescription: `Ukiran Asmat adalah seni tradisi yang berbentuk seni ukir, berasal dari suku Asmat dan memiliki nilai budaya yang sangat tinggi, Seni ukir Asmat sangat erat sekali hubungannya dengan suku Asmat. Orang Asmat percaya, benda berupa kerajinan ukiran merupakan penghubung antara kehidupan di dunia dengan kehidupan di dunia arwah, utamanya nenek moyangnya.
Ukiran Asmat mayoritasnya dibuat oleh laki-laki. Bermacam-macam ukiran dibuat secara bersama-sama mulai dari bentuk dayung, perisai, tifa, dan banyak lagi yang lainnya. Kemudian, ukiran-ukirannya diberi nama sesuai dengan nama orang yang baru meninggal, sebagai pengingat-ngingat orang yang sudah meninggal tersebut.`,

    history: `Sejarah Ukiran Asmat berakar kuat pada kepercayaan spiritual suku Asmat sebagai media penghubung dengan dunia arwah dan leluhur, di mana setiap pahatan memiliki roh untuk mengenang yang telah meninggal dan sering digunakan dalam ritual adat seperti pesta adat dan upacara balas dendam.`,

    meaning: 'Setiap ukiran menyimpan jiwa leluhur dan berfungsi sebagai jembatan antara dunia nyata dengan dunia roh.',
    suggestionQuestions: [
      'Mengapa ukiran Asmat diberi nama orang yang baru meninggal?',
      'Apa makna spiritual ukiran Asmat bagi suku Asmat?',
      'Jenis ukiran apa saja yang dibuat oleh suku Asmat?'
    ],
  },
  {
    id: 'songket',

    name: 'Songket',

    region: 'Sumatera Selatan',

    category: 'Kerajinan',

    imageId: 'songket',

    shortDescription: 'Kain tenun mewah yang ditenun dengan benang emas atau perak, menciptakan motif yang berkilauan.',

    fullDescription: `Songket termasuk dalam keluarga tenunan brokat dan dibuat dengan tangan menggunakan benang emas dan perak. Benang logam yang tertenun pada kain akan menghasilkan efek kemilau yang cemerlang. Bahan dasar yang biasa digunakan untuk membuat Songket adalah sutra, katun, dan kombinasi antara katun dan sutra. Kain ini biasanya digunakan dalam upacara pernikahan dan acara resmi kerajaan.`,

    history: `Kain songket berasal dari Palembang dan menyebar ke wilayah yang dikuasai Sriwijaya, seperti Sumatra, Kepulauan Riau, Kalimantan, Semenanjung Malaya, Thailand, Kamboja, dan sebagian Jawa.

Menurut tradisi Kelantan, teknik ini berasal dari Chaiya, Thailand, yang merupakan bagian dari Sriwijaya, dan berkembang ke selatan hingga sampai ke Kelantan dan Terengganu pada abad ke-16.`,

    meaning: 'Melambangkan kemewahan, status sosial tinggi, dan keagungan. Setiap motif memiliki makna khusus seperti harapan, keberkahan, dan kemakmuran.',
    suggestionQuestions: [
      'Bagaimana cara menenun benang emas dan perak dalam Songket?',
      'Apa perbedaan songket Palembang dengan songket daerah lain?',
      'Kapan waktu yang tepat menggunakan kain songket?'
    ],
  },
  {
    id: 'sasando',

    name: 'Sasando',

    region: 'Nusa Tenggara Timur',

    category: 'Musik',

    imageId: 'sasando',

    shortDescription: 'Alat musik petik khas Pulau Rote dengan resonator dari daun lontar berbentuk setengah lingkaran.',

    fullDescription: `Sasando adalah alat musik dawai yang unik dari Pulau Rote, NTT. Terbuat dari bambu dengan senar-senar yang dipetik, dan dikelilingi oleh daun lontar sebagai resonator. Suaranya yang lembut dan merdu menciptakan nuansa magis.

Sasando biasanya dimainkan dengan kedua tangan dari arah yang berlawanan. Tangan kanan digunakan untuk memainkan akord dan tangan kiri digunakan untuk memainkan bass atau melodi.`,

    history: `Berasal dari cerita legenda orang Rote, terdapat beberapa versi yang mengisahkan awal mula lahirnya sasando. Salah satunya adalah dalam sebuah cerita disebutkan seorang pemuda yang terdampar di Pulau Ndana saat sedang melaut sekitar tahun 1950-an. Pemuda tersebut Bernama Sangguana, ia dibawa oleh penduduk setempat menghadap raja di istana sekitar. Karena memiliki bakat di bidang seni, Sangguana berhasil membuat sang putri anak dari raja terpikat.
Akhirnya ia diminta untuk menciptakan  sebuah alat musik yang belum pernah ada. Suatu malam, Sangguana pun bermimpi sedang memainkan suatu alat musik yang indah dengan bentuk unik dan suara khas. Berkat mimpi tersebut, Sangguana pun membuat alat musik yang diberi nama Sandu (artinya bergetar). Akhirnya, alat musik itu diberikan kepada sang putri sebagai jawaban dari permintaan sang Raja.`,

    meaning: 'Melambangkan kedekatan masyarakat Rote dengan alam, khususnya pohon lontar yang menjadi sumber kehidupan mereka.',
    suggestionQuestions: [
      'Apa fungsi daun lontar dalam alat musik Sasando?',
      'Bagaimana cara memainkan Sasando dengan kedua tangan?',
      'Siapa Sangguana dalam legenda terciptanya Sasando?'
    ],
  },
  {
    id: 'tabuik',

    name: 'Tabuik',

    region: 'Sumatera Barat',

    category: 'Upacara',

    imageId: 'tabuik',

    shortDescription: 'Upacara peringatan hari Asyura di Pariaman dengan mengarak replika buraq yang megah.',

    fullDescription: `Kata "tabuik" berasal dari bahasa Arab yaitu at-tabut. Tabut sendiri dapat diartikan sebagai peti atau keranda dalam bahasa Arab (Ibrani). Tabuik adalah perayaan tradisional Islam di Pariaman, Sumatera Barat, yang memperingati gugurnya Hasan dan Husein, cucu Nabi Muhammad. 

Upacara Tabuik dilakukan dengan beberapa tahap, seperti upacara membuat daraga, upacara mengambil tanah, upacara menebang batang pisang, peristiwa maatam, upacara mengarak sorban, upacara Tabuik naik pangkat, pesta Hoyak Tabuik dan Tabuik dibuang ke laut.`,

    history: `Upacara Tabuik berawal dari masuknya tradisi yang dibawa oleh bangsa Cipei, yaitu sisa pasukan Inggris (Gurkha), dari Bengkulu ke Pariaman setelah Perjanjian Traktat London tahun 1824 antara Inggris dan Belanda. Tradisi ini merupakan bentuk peringatan atas wafatnya Husein bin Ali, cucu Nabi Muhammad SAW, yang gugur dalam peristiwa Karbala pada tahun 681 Masehi dan sangat dihormati oleh kaum Syiah.
Menurut kisah yang berkembang, setelah wafatnya Husein bin Ali, para malaikat membawa jasadnya ke langit dengan sebuah arak-arakan suci. Seorang dari bangsa Cipei disebut ikut menyaksikan peristiwa tersebut dan diperintahkan untuk kembali ke bumi serta menirukan arak-arakan yang dilihatnya. Dari sinilah kemudian muncul tradisi membuat dan mengarak tabuik, yang selanjutnya berkembang menjadi Upacara Tabuik di Pariaman dan dilaksanakan secara turun-temurun hingga kini.`,

    meaning: 'Melambangkan penghormatan kepada keluarga Nabi, perjuangan melawan kezaliman, dan pengorbanan untuk kebenaran.',
    suggestionQuestions: [
      'Apa hubungan Upacara Tabuik dengan peristiwa Karbala?',
      'Bagaimana tahapan-tahapan dalam Upacara Tabuik?',
      'Mengapa Tabuik akhirnya dibuang ke laut?'
    ],
  },
  {
    id: 'sekaten',

    name: 'Sekaten',

    region: 'Jawa Tengah',

    category: 'Upacara',

    imageId: 'sekaten',

    shortDescription: 'Perayaan besar di Yogyakarta dan Solo untuk memperingati Maulid Nabi Muhammad SAW.',

    fullDescription: `Sekaten merupakan rangkaian kegiatan tahunan sebagai peringatan Maulid Nabi Muhammad yang diadakan oleh dua keraton di Jawa yakni Keraton Surakarta dan Ngayogyakarta Hadiningrat. Rangkaian perayaan secara resmi berlangsung dari tanggal 5 dan berakhir pada tanggal 12 Mulud penanggalan Jawa.
Beberapa acara penting perayaan ini adalah dimainkannya gamelan pusaka di halaman Masjid Agung masing-masing keraton, pembacaan riwayat hidup Nabi Islam Muhammad dan rangkaian pengajian di serambi Masjid Agung dan, puncaknya adalah dengan diadakannya perayaan Grebeg Maulud sebagai bentuk syukur pihak istana dengan keluarnya sejumlah gunungan untuk diperebutkan oleh masyarakat.`,

    history: `Sejarah sekaten sendiri tidak lepas dari upaya penyebaran agama Islam oleh Sunan kalijaga yang saat itu sudah dilakukan pada masa Kerajaan Demak. Kala itu, mayoritas kepercayaan masyarakat adalah Hindu dan Budha. Demi mencapai tujuannya, Sunan Kalijaga menarik perhatian warga dengan mengiring lagu ciptaannya bersama alat musik gamelan.

Cara tersebut berhasil mengumpulkan warga, dan hal tersebut dimanfaatkan untuk menyebarkan agama Islam dan membimbing warga untuk mengucapkan kalimat syahadat. Maka dari itu, Sunan Kalijaga diberi julukan "Kyai Sekati" yang diperoleh dari makna sekaten dan berasal dari kata syahadatain..`,

    meaning: 'Melambangkan syiar Islam yang damai, keberkahan, dan kedekatan raja dengan rakyatnya.',
    suggestionQuestions: [
      'Bagaimana Sunan Kalijaga menyebarkan Islam melalui gamelan?',
      'Apa itu gunungan dalam Grebeg Maulud?',
      'Mengapa gamelan pusaka dimainkan di halaman Masjid Agung?'
    ],
  },
  
  {
    id: 'kasada',

    name: 'Kasada',

    region: 'Jawa Timur',

    category: 'Upacara',

    imageId: 'kasada',

    shortDescription: 'Upacara adat suku Tengger yang melemparkan sesajen ke kawah Gunung Bromo.',

    fullDescription: `Upacara Kasada merupakan sebuah ritual yang dilakukan sebagai bentuk ungkapan syukur dan harapan agar dijauhkan dari malapetaka. Upacara ini dilakukan dengan melarung hasil bumi ke dalam kawah Gunung Bromo. 

Ribuan orang mendaki gunung untuk melemparkan hasil bumi dan ternak ke kawah sebagai ungkapan syukur dan permohonan keselamatan. Upacara ini dipimpin oleh dukun Tengger. Dalam perkembangannya, upacara ini menjadi salah satu hari raya umat Hindu Tengger.`,

    history: `Upacara Yadnya Kasada berakar dari legenda Jaka Seger dan Rara Anteng yang dipercaya sebagai leluhur suku Tengger. Nama Tengger sendiri berasal dari gabungan nama keduanya. Rara Anteng diceritakan sebagai putri Raja Brawijaya V dari Kerajaan Majapahit yang melarikan diri ke Pegunungan Tengger setelah runtuhnya Majapahit dan kemudian diangkat sebagai anak oleh Resi Dadap Putih. Sementara itu, Jaka Seger berasal dari Kediri dan bertemu dengan Rara Anteng di Pegunungan Tengger hingga mereka membentuk keluarga yang menjadi cikal bakal masyarakat Tengger.
Setelah lama tidak memiliki keturunan, pasangan ini bermeditasi di kawah Gunung Bromo atas saran Empu Baradah dan akhirnya dikaruniai 25 anak. Namun, sebagai konsekuensi janji kepada para dewa, mereka harus mengorbankan anak bungsu, Raden Kesuma, yang akhirnya diambil oleh letusan Gunung Bromo. Dari peristiwa tersebut, muncul pesan gaib agar setiap bulan Kasada masyarakat mempersembahkan hasil bumi ke kawah Gunung Bromo. Tradisi inilah yang kemudian dikenal sebagai Upacara Yadnya Kasada, di mana suku Tengger melabuhkan sesajen berupa hasil pertanian dan ternak ke kawah Gunung Bromo.`,

    meaning: 'Melambangkan rasa syukur, keseimbangan dengan alam, dan penghormatan kepada leluhur serta kekuatan alam.',
    suggestionQuestions: [
      'Siapa Jaka Seger dan Rara Anteng dalam legenda Tengger?',
      'Mengapa sesajen harus dilemparkan ke kawah Gunung Bromo?',
      'Kapan waktu pelaksanaan Upacara Kasada?'
    ],
  },
  {
    id: 'gudeg',

    name: 'Gudeg',

    region: 'Jawa Tengah',

    category: 'Kuliner',

    imageId: 'gudeg',

    shortDescription: 'Makanan khas Yogyakarta yang terbuat dari nangka muda dimasak dengan santan dan gula kelapa.',

    fullDescription: `Gudeg adalah hidangan khas Daerah Istimewa Yogyakarta dan Jawa Tengah, yang terbuat dari nangka muda (gori) yang dimasak dengan santan. Cita rasa dominan pada masakan ini adalah manis.
Pembuatan gudeg memerlukan waktu hingga berjam-jam. Warna cokelat dari gudeg biasanya dihasilkan oleh daun jati yang dimasak secar bersamaan. Biasanya, gudeg dimakan dengan nasi dan disajikan dengan kuah santan kental (areh), ayam kampung, Bebek, telur, tempe, tahu, dan sambal goreng krecek.`,
    history: `Gudeg konon sudah ada sejak zaman Kerajaan Mataram Islam. Ini bermula dari pembabatan Alas Mentaok untuk pembangunan Keraton, di mana hutan tersebut ternyata ditumbuhi banyak pohon nangka dan juga pohon kelapa.
Jumlah buah nangka dan kelapa yang sangat banyak menyebabkan para perintis Mataram berinovasi dan mengolahnya menjadi gudeg. Setelah itu, masyarakat mengenal gudeg sebagai menu utama yang sering ditemui dalam kehidupan sehari-hari.`,

    meaning: 'Melambangkan kesabaran, ketelatenan, dan kehangatan khas masyarakat Yogyakarta.',
    suggestionQuestions: [
      'Mengapa gudeg harus dimasak berjam-jam?',
      'Apa fungsi daun jati dalam memasak gudeg?',
      'Apa saja pelengkap gudeg yang biasa disajikan?'
    ],
  },
  {
    id: 'pempek',

    name: 'Pempek',

    region: 'Sumatera Selatan',

    category: 'Kuliner',

    imageId: 'pempek',

    shortDescription: 'Makanan khas Palembang berbahan dasar ikan dan sagu, disajikan dengan kuah cuka pedas (cuko).',

    fullDescription: `Pempek adalah makanan khas Palembang, Sumatera Selatan. Pempek terbuat dari daging tenggiri atau gabus yang digiling lembut, dicampur tepung kanji atau tepung sagu, serta dengan bahan-bahan lain seperti telur, bawang putih halus, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuko yang terasa asam, manis, dan pedas.
Ada pula pempek panggang yang seperti namanya, yakni pempek yang dimasak dengan cara dipanggang. Pempek jenis ini biasanya disajikan dengan isian ebi atau sambal, memberikan cita rasa yang khas dan berbeda dari pempek pada umumnya. Tekstur bagian luarnya yang sedikit garing berpadu dengan rasa gurih dan aroma bakaran yang menggoda selera.`,

    history: `Pempek mempunyai sejarah yang unik dan tidak dapat dilepaskan dari masuknya para perantau Tionghoa ke Palembang semasa pemerintahan Kesultanan Palembang Darussalam ketika dipimpin oleh Sultan Mahmud Badaruddin II pada abad ke-16 Masehi. Berdasarkan cerita masyarakat, pempek dijual keliling kota oleh seseorang asal Tionghoa yang sering dipanggil Apek di kisaran tahun 1617 M.`,

    meaning: 'Mencerminkan akulturasi budaya Melayu, Tionghoa, dan maritim di Palembang.',
    suggestionQuestions: [
      'Apa asal-usul nama "pempek" atau "empek-empek"?',
      'Bagaimana cara membuat cuko yang asam, manis, dan pedas?',
      'Apa perbedaan berbagai jenis pempek (lenjer, kapal selam, adaan)?'
    ],
  },
  {
    id: 'papeda',

    name: 'Papeda',

    region: 'Papua & Maluku',

    category: 'Kuliner',

    imageId: 'papeda',

    shortDescription: 'Makanan pokok berbahan sagu dengan tekstur lengket seperti lem, disajikan dengan ikan kuah kuning.',

    fullDescription: `Papeda adalah makanan berupa bubur sagu yang berasal dari Kepulauan Maluku dan pesisir barat Papua. Hidangan ini biasanya disajikan dengan ikan tongkol atau bubara yang dibumbui dengan kunyit. Papeda berwarna putih dan bertekstur lengket menyerupai lem dengan rasa yang tawar. Papeda merupakan makanan yang kaya serat, rendah kolesterol, dan sangat bergizi.`,

    history: `Pohon sagu yang menjadi bahan utama pembuatan papeda tumbuh subur di wilayah-wilayah ini. Di daerah Papua, sagu telah menjadi sumber pangan utama selama berabad-abad sebelum adanya beras. Sehingga, tradisi mengolah sagu menjadi papeda telah diturunkan dari generasi ke generasi.`,

    meaning: 'Melambangkan kesederhanaan, ketahanan hidup, dan kedekatan dengan alam.',
    suggestionQuestions: [
      'Bagaimana cara mengolah sagu menjadi papeda?',
      'Mengapa papeda bertekstur lengket seperti lem?',
      'Apa saja lauk yang biasa disajikan dengan papeda?'
    ],
  },
  // Additional Traditions - Tarian (3)
  {
    id: 'tari-reog-ponorogo',

    name: 'Tari Reog Ponorogo',

    region: 'Jawa Timur',

    category: 'Tarian',

    imageId: 'tari-reog',

    shortDescription: 'Tarian heroik dengan topeng singa berkepala merak raksasa yang berat, menampilkan kekuatan fisik dan spiritual.',
    fullDescription: `Reog merupakan tarian tradisional dari Ponorogo, Jawa Timur dalam arena terbuka yang berfungsi sebagai hiburan rakyat, mengandung unsur magis, penari utama adalah orang berkepala singa dengan hiasan bulu merak, dengan berat topeng mencapai 50–60 kg. Ditambah beberapa penari bertopeng dan berkuda lumping dan Reog asli dari Indonesia.

Reog modern biasanya dipentaskan dalam beberapa acara seperti pernikahan, khitanan, dan hari-hari besar Nasional. Seni Reog Ponorogo terdiri dari beberapa rangkaian 2 sampai 3 tarian pembukaan. Reog obyog Sering pentas di pelataran atau jalan tanpa mengikuti pakem tertentu. Biasanya mengisi acara hajatan, bersih desa, hingga pementasan semata untuk menghibur. Sedangkan Reog Festival sudah mengalami modifikasi dan ditampilkan sesuai pakem dalam acara tahunan Festival Reog yang diadakan Pemerintah Kota Ponorogo sejak 1997.`,

    history: `Reog Ponorogo muncul pada abad ke-15 sebagai bentuk protes terhadap pemerintahan Raja Kelono Sewandono dan kerajaan Majapahit. Tarian ini diwarisi secara turun-temurun dan menjadi identitas budaya Ponorogo.`,

    meaning: 'Melambangkan keberanian, kekuatan, perlawanan terhadap kezaliman, dan kesatuan masyarakat dalam menghadapi kesulitan.',
    suggestionQuestions: [
      'Bagaimana penari bisa menopang topeng Reog yang beratnya mencapai 50-60 kg?',
      'Apa hubungan antara Reog Ponorogo dengan legenda Raja Kelono Sewandono?',
      'Mengapa Reog Ponorogo menjadi simbol perlawanan terhadap kezaliman?'
    ]
  },
  {
    id: 'tari-serimpi',

    name: 'Tari Serimpi',

    region: 'Jawa Tengah',

    category: 'Tarian',

    imageId: 'tari-serimpi',

    shortDescription: 'Tarian keraton yang lembut dan anggun, dibawakan oleh empat penari wanita yang melambangkan empat unsur alam.',

    fullDescription: `Tari Serimpi adalah tarian klasik keraton Jawa yang berasal dari Kasunanan Surakarta dan Kesultanan Yogyakarta. Tarian ini dibawakan oleh empat penari putri dengan gerakan yang sangat halus, teratur, dan penuh kedisiplinan. Gerakan tangan, kaki, dan kepala diatur sedemikian rupa mencerminkan kehalusan budi dan keanggunan.

Tarian ini merupakan tarian yang cukup sakral. Sebab, tari serimpi hanya boleh dipentaskan di sekitar keraton saja. Apabila kita melihat dari sejarah atau asal-usulnya. Tarian ini pernah digunakan sebagai bentuk perlawanan terhadap para penjajah di zaman dulu.`,

    history: `Awal mulanya, Tari Serimpi muncul di masa kerajaan Mataram ketika Sultan Agung berkuasa di tahun 1613 sampai 1646. Kemudian pada tahun 1755 Kerajaan Mataram mengalami perpecahan dan menjadi Kesultanan Surakarta dan Kesultanan Yogyakarta. Tari ini pun terkena dampaknya. Dampak yang diperoleh yaitu adanya perbedaan antara gerakan tari serimpi Jogja dan tari serimpi Surakarta.`,

    meaning: 'Empat penari melambangkan empat elemen alam (api, air, tanah, udara) yang harus seimbang dan harmonis, mencerminkan filosofi kehidupan Jawa.',
    suggestionQuestions: [
      'Apa perbedaan Tari Serimpi Surakarta dan Yogyakarta setelah perpecahan Mataram?',
      'Mengapa Tari Serimpi dianggap sakral dan hanya boleh dipentaskan di keraton?',
      'Bagaimana filosofi empat elemen alam tercermin dalam gerakan Tari Serimpi?'
    ]
  },
  {
    id: 'batik',

    name: 'Batik',

    region: 'Jawa',

    category: 'Kerajinan',

    imageId: 'batik',

    shortDescription: 'Seni melukis kain menggunakan lilin (malam) untuk menciptakan corak yang kaya makna filosofis.',

    fullDescription: `Batik adalah kain Budaya Jawa Indonesia bergambar yang pembuatannya secara khusus dengan menuliskan atau menerakan malam pada kain itu, kemudian pengolahannya diproses dengan cara tertentu yang memiliki kekhasan. 

Sebagai keseluruhan teknik, teknologi, serta pengembangan motif dan budaya yang terkait, oleh UNESCO telah ditetapkan sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi (Masterpieces of the Oral and Intangible Heritage of Humanity) sejak 2 Oktober 2009. Sejak saat itu, 2 Oktober ditetapkan sebagai Hari Batik Nasional.`,

    history: `Teknik mem-batik ditemukan di Mesir yang menunjukkan bahwa teknik ini telah dikenal semenjak abad ke-4 SM, dengan diketemukannya kain pembungkus mumi yang juga dilapisi malam untuk membentuk pola. `,

    meaning: 'Setiap motif batik memiliki filosofi mendalam, mulai dari doa, harapan, hingga status sosial pemakainya.',
    suggestionQuestions: [
      'Mengapa UNESCO menetapkan batik sebagai Warisan Kemanusiaan pada 2 Oktober 2009?',
      'Apa perbedaan filosofi antara batik motif Parang, Kawung, dan Truntum?',
      'Bagaimana proses pembuatan batik tulis yang memakan waktu berbulan-bulan?'
    ]
  },
  // Additional Traditions - Kerajinan (3)
  {
    id: 'anyaman-purun',

    name: 'Anyaman Purun',

    region: 'Kalimantan Selatan',

    category: 'Kerajinan',

    imageId: 'anyaman-purun',

    shortDescription: 'Kerajinan tangan dari tumbuhan purun yang dibuat menjadi tikar, tas, dan berbagai produk dengan motif khas Banjar.',

    fullDescription: `Anyaman Purun adalah kerajinan tangan tradisional yang berasal dari tumbuhan purun, banyak ditemukan di lahan gambut Kalimantan dan Sumatera. Proses pembuatan anyaman ini dilakukan secara manual dengan teknik anyaman yang khas, menghasilkan berbagai produk seperti tikar, tas, dan keranjang. Anyaman Purun bukan hanya sekadar kerajinan, tetapi juga merupakan bagian dari warisan budaya dan kearifan lokal masyarakat yang hidup di sekitar lahan gambut. Penggunaan bahan alami dan proses pembuatan yang ramah lingkungan menjadikan Anyaman Purun sebagai contoh kerajinan yang berkelanjutan.
Keunikan Anyaman Purun terletak pada bahan bakunya yang unik dan ramah lingkungan, serta motif anyaman yang khas dan beragam. Kekuatan dan daya tahan produk Anyaman Purun juga menjadi daya tarik tersendiri, menjadikannya pilihan yang tepat untuk berbagai kebutuhan sehari-hari. Anyaman Purun bukan hanya sekadar produk kerajinan, tetapi juga sarana untuk melestarikan budaya dan tradisi masyarakat lokal, serta meningkatkan perekonomian mereka. Produk-produk Anyaman Purun seringkali menjadi oleh-oleh khas daerah penghasil purun, menjadi daya tarik bagi wisatawan yang ingin membawa pulang kenangan indah dari perjalanan mereka.`,

    history: `Kerajinan anyaman purun telah ada sejak berabad-abad lalu sebagai bagian dari kehidupan sehari-hari masyarakat Banjar yang tinggal di daerah rawa. Menurut catatan, tikar purun sudah dibuat oleh masyarakat Pedamaran sejak masa kolonial Belanda atau tepatnya sekitar tahun 1870. Keterampilan ini diwariskan turun-temurun dari generasi ke generasi.`,

    meaning: 'Mencerminkan kreativitas, kearifan lokal dalam memanfaatkan sumber daya alam, dan nilai ekonomi dari lingkungan rawa yang dianggap kurang produktif.',
    suggestionQuestions: [
      'Bagaimana cara pengrajin memproses tumbuhan purun menjadi anyaman yang kuat dan tahan lama?',
      'Apa keunikan motif anyaman purun khas Kalimantan Selatan?',
      'Mengapa anyaman purun dianggap sebagai kerajinan yang berkelanjutan dan ramah lingkungan?'
    ]
  },
  {
    id: 'ukiran-toraja',

    name: 'Ukiran Toraja',

    region: 'Sulawesi Selatan',

    category: 'Kerajinan',

    imageId: 'ukiran-toraja',

    shortDescription: 'Seni ukir khas Toraja dengan motif geometris dan simbolis yang menghiasi rumah adat Tongkonan.',

    fullDescription: `Ukiran Toraja adalah seni pahat kayu yang memiliki makna filosofis dan spiritual mendalam. Ukiran ini menghiasi dinding dan atap rumah adat Tongkonan dengan motif seperti Pa Tedong (kerbau), Pa Barre Allo (matahari), dan berbagai simbol kehidupan. Setiap motif memiliki arti khusus dalam kepercayaan Aluk Todolo. Ukiran ini dicetak menggunakan alat ukir khusus di atas sebuah papan kayu, tiang rumah adat, jendela, atau pintu.`,

    history: `Seni ukir dalam suku Toraja sudah ada sejak nenek moyang Tana Toraja berlabuh di kawasan Toraja setelah menempuh perjalanan panjang dari Teluk Tonkin Vietnam Utara pada abad ke-17. Maka dari itu, ragam hias tradsional seperti ukiran digunakan sebagai sumber informasi tentang budaya masyarakat Toraja.`,

    meaning: 'Setiap motif memiliki makna spiritual, seperti kerbau melambangkan kemakmuran, ayam berarti kepemimpinan, dan matahari melambangkan kekuatan dan kehidupan.',
    suggestionQuestions: [
      'Apa makna simbolis dari motif Pa Tedong (kerbau) dalam ukiran Toraja?',
      'Bagaimana ukiran Toraja mencerminkan kepercayaan Aluk Todolo?',
      'Mengapa rumah adat Tongkonan selalu dihiasi dengan ukiran yang rumit?'
    ]
  },
  {
    id: 'gerabah-kasongan',

    name: 'Gerabah Kasongan',

    region: 'Yogyakarta',

    category: 'Kerajinan',

    imageId: 'gerabah-kasongan',

    shortDescription: 'Keramik dan gerabah artistik hasil karya pengrajin Kasongan yang terkenal hingga mancanegara.',

    fullDescription: `Gerabah Kasongan adalah kerajinan tangan tradisional berupa gerabah (perkakas dari tanah liat) yang berasal dari Desa Kasongan, Kabupaten Bantul, Yogyakarta. Desa ini terkenal sebagai sentra kerajinan gerabah dan menjadi salah satu daya tarik wisata di Yogyakarta. Pada tahun 2013, Gerabah Kasongan ditetapkan sebagai Warisan Budaya Takbenda oleh Pemerintah. 

Awalnya hanya membuat perabotan rumah tangga sederhana, kini Kasongan terkenal dengan produk keramik artistik dengan berbagai bentuk seperti guci, vas bunga, patung, hingga lampu hias dengan kualitas tinggi.`,

    history: `Menurut catatan, seorang petani di Desa Kasongan menemukan endapan tanah liat yang memiliki kualitas sangat baik untuk bahan pembuatan gerabah. Berkat penemuan ini, penduduk setempat mulai memanfaatkannya untuk membuat berbagai peralatan rumah tangga dari tanah liat.

Industri gerabah di Kasongan dimulai sejak tahun 1970-an, dipopulerkan oleh Sapto Hudoyo yang mengembangkan desain-desain inovatif. Kini Kasongan menjadi sentra kerajinan gerabah terbesar di Indonesia.`,

    meaning: 'Melambangkan transformasi bahan sederhana menjadi karya seni bernilai tinggi, serta semangat kewirausahaan dan kreativitas masyarakat.',
    suggestionQuestions: [
      'Siapa tokoh Sapto Hudoyo yang mempopulerkan gerabah Kasongan sejak tahun 1970-an?',
      'Bagaimana proses pembuatan gerabah dari tanah liat hingga menjadi karya seni bernilai tinggi?',
      'Apa yang membuat gerabah Kasongan berbeda dengan keramik dari daerah lain?'
    ]
  },
  // Additional Traditions - Upacara (3)
   {
    id: 'angklung',

    name: 'Angklung',

    region: 'Jawa Barat',

    category: 'Musik',

    imageId: 'angklung',

    shortDescription: 'Alat musik bambu yang dimainkan dengan cara digoyangkan, menghasilkan bunyi yang merdu.',

    fullDescription: `Angklung adalah alat musik multitonal yang terbuat dari bambu. Setiap angklung menghasilkan satu nada, sehingga diperlukan kerja sama tim untuk memainkan melodi. Instrumen ini telah diakui UNESCO sebagai Warisan Budaya Takbenda Manusia. Setiap satu angklung bisa menghasilkan satu nada atau akord dan beberapa pemain harus berkolaborasi jika ingin memainkan melodi. 

Bambu hitam yang dipakai untuk membuat angklung dipanen selama dua minggu dalam setahun, saat jangkrik "bernyanyi". Bambu itu juga harus dipotong paling tidak tiga ruas di atas tanah demi memastikan akarnya bisa terus merambat.`,

    history: `Tercatat, sejarah penggunaan angklung di Jawa Barat sendiri dimulai pada masa Kerajaan Sunda, yakni pada sekitar abad ke-12 hingga ke-16. Permainan angklung pada era itu dilakukan demi pemujaan terhadap Nyai Sri Pohaci sebagai lambang dari Dewi Sri, yakni Dewi Kesuburan atau Dewi Padi.`,

    meaning: 'Mengajarkan nilai gotong royong, kerjasama, dan harmoni dalam keberagaman.',
    suggestionQuestions: [
      'Mengapa UNESCO mengakui angklung sebagai Warisan Budaya Takbenda Manusia?',
      'Bagaimana angklung mengajarkan nilai gotong royong dalam permainannya?',
      'Mengapa bambu untuk angklung hanya dipanen saat jangkrik bernyanyi?'
    ]
  },
  {
    id: 'rambu-solo',

    name: 'Rambu Solo',

    region: 'Toraja',

    category: 'Upacara',

    imageId: 'rambu-solo',

    shortDescription: 'Upacara pemakaman megah di Toraja yang bisa berlangsung berhari-hari dengan penyembelihan ratusan kerbau.',

    fullDescription: `Rambu Solo adalah upacara pemakaman tradisional Toraja yang sangat kompleks dan meriah. Upacara ini bisa berlangsung beberapa hari hingga berminggu-minggu, melibatkan ratusan tamu, penyembelihan puluhan hingga ratusan kerbau dan babi, serta prosesi jenazah yang diarak ke liang batu di tebing.

Upacara ini merupakan sebuah transaksi ekonomi raksasa yang melibatkan dan memberi keuntungan bagi banyak pihak. Bahkan dalam beberapa tahun terakhir upacara kematian itu mulai disisipi dengan aktivitas ekonomi. Perekonomian rambu solo' menjadi sumber pendapatan bagi berbagai profesi sosial.`,

    history: `Upacara rambu solo sudah dilaksanakan dimulai kira-kira abat ke-9 masehi dan dilaksanakan turun-temurun sampai saat ini.Tradisi Rambu Solo merupakan bagian dari kepercayaan Aluk Todolo yang telah ada sejak ratusan tahun. Upacara ini diyakini sebagai jalan untuk mengantarkan roh ke Puya (alam baka).`,

    meaning: 'Menunjukkan penghormatan tertinggi kepada leluhur, status sosial keluarga, dan keyakinan bahwa kematian adalah awal perjalanan menuju kehidupan kekal.',
    suggestionQuestions: [
      'Mengapa upacara Rambu Solo bisa berlangsung berhari-hari bahkan berminggu-minggu?',
      'Apa makna dari penyembelihan ratusan kerbau dalam upacara Rambu Solo?',
      'Bagaimana jenazah diarak ke liang batu di tebing dalam tradisi pemakaman Toraja?'
    ]
  },
  {
    id: 'upacara-mappalili',

    name: 'Mappalili',

    region: 'Sulawesi Selatan',

    category: 'Upacara',

    imageId: 'mappalili',

    shortDescription: 'Ritual adat Bugis-Makassar untuk memulai musim tanam padi dengan memohon berkah dan hasil panen melimpah.',

    fullDescription: `Mappalili atau palili adalah upacara adat yang diadakan setiap satu kali setahun. Ketika telah memasuki musim tanam padi, masyarakat Labakkang yang berada di Kabupaten Pangkep, Sulawesi Selatan akan menjalani upacara tersebut.
Kegiatan yang dilakukan adalah mengajak masyarakat setempat untuk berkumpul di rumah adat atau biasa disebut Balla Lompoa (kalompoang). Setelah itu, tokoh masyarakat atau keturunan raja yang biasa disebut karaeng akan diarak turun ke sawah sebagai tanda bahwa musim tanam telah masuk dan sebagai bentuk doa agar kegiatan menanam padi diberikan keberkahan, serta berlangsung lancar sehingga masyarakat dapat menuai hasil panen yang banyak.`,

    history: `Tradisi Mappalili telah dilakukan sejak zaman Kerajaan Gowa-Tallo sebagai bagian dari kepercayaan pra-Islam yang kemudian berakulturasi dengan nilai-nilai Islam. Dahulu kala, mappalili digelar selama tujuh hari tujuh malam. Akan tetapi, karena pertimbangan biaya dan waktu, dipersingkat menjadi dua hari dua malam tanpa mengurangi nilai dan maknanya.`,

    meaning: 'Melambangkan rasa syukur kepada Tuhan, penghormatan kepada alam, dan harapan akan kemakmuran masyarakat petani.',
    suggestionQuestions: [
      'Mengapa upacara Mappalili hanya dilakukan satu kali setahun saat musim tanam padi?',
      'Siapa yang berhak memimpin upacara Mappalili di masyarakat Bugis-Makassar?',
      'Bagaimana upacara Mappalili berakulturasi dengan nilai-nilai Islam?'
    ]
  },
  // Additional Traditions - Kuliner (3)
  {
    id: 'soto-banjar',

    name: 'Soto Banjar',

    region: 'Kalimantan Selatan',

    category: 'Kuliner',

    imageId: 'soto-banjar',

    shortDescription: 'Soto khas Banjarmasin dengan kuah kuning gurih, ayam kampung, dan perkedel kentang yang unik.',

    fullDescription: `Soto Banjar adalah kuliner soto khas dari Kalimantan Selatan dengan bahan utama ketupat dan daging ayam. Soto ini memiliki aroma harum dari berbagai rempah, seperti kayu manis, biji pala, dan cengkih. Soto ini berisi daging ayam yang sudah disuwir, perkedel kentang, rebusan telur, dan potongan ketupat. Terdapat bihun atau mi soun sebagai pelengkap. 

Ciri khas dari Soto Banjar yang berbeda dari jenis soto lain adalah kehadiran perkedel kentang dan telur rebus dalam satu mangkuk soto.`,

    history: `Soto Banjar diperkirakan muncul setelah tahun 1563, seiring kedatangan pedagang Tiongkok ke Banjarmasin, yang pada akhir abad ke-16 dikenal sebagai daerah kerajaan penghasil lada dan bagian dari Jalur Rempah Nusantara. Kuliner "jao to" (penyebutan soto saat itu) mulai masuk ke Banjarmasin pada masa tersebut.`,

    meaning: 'Mencerminkan kekayaan rempah Nusantara dan akulturasi budaya di tanah Banjar yang terkenal dengan jalur perdagangan rempah.',
    suggestionQuestions: [
      'Apa yang membuat Soto Banjar berbeda dari soto daerah lain di Indonesia?',
      'Mengapa perkedel kentang menjadi ciri khas unik Soto Banjar?',
      'Bagaimana pengaruh pedagang Tiongkok terhadap munculnya Soto Banjar?'
    ]
  },
  {
    id: 'ayam-taliwang',

    name: 'Ayam Taliwang',

    region: 'Lombok',

    category: 'Kuliner',

    imageId: 'ayam-taliwang',

    shortDescription: 'Ayam bakar khas Lombok dengan bumbu pedas dari cabai, terasi, dan tomat yang membakar lidah.',

    fullDescription: `Ayam Taliwang adalah menu ayam bakar yang terbuat dari ayam kampung muda dengan bumbu cabai merah kering, bawang merah, bawang putih, tomat, terasi goreng, kencur, gula merah, garam dan bumbu lainnya. Ayam Taliwang biasanya disajikan bersama nasi putih hangat, plecing kangkung, taburan bawang goreng dan kacang goreng. Rasa pedas dan gurihnya sangat khas dan berbeda dari ayam bakar daerah lain.`,
    history: `Nama Ayam Taliwang berasal dari Kerajaan Taliwang yang terletak di Pulau Sumbawa. Sejarah kuliner ini bermula sekitar tahun 1630 Masehi, ketika terjadi perang antara Kerajaan Selaparang di Lombok dan Kerajaan Karangasem di Bali. Dalam peristiwa tersebut, pasukan Kerajaan Taliwang datang ke Lombok untuk membantu Kerajaan Selaparang.
Melalui kehadiran juru masak Kerajaan Taliwang, masyarakat Sasak mengenal olahan ayam pelalah bercita rasa pedas yang kemudian menjadi cikal bakal Ayam Taliwang. Hidangan ini bahkan disukai oleh Raja Karangasem, sehingga berperan sebagai sarana diplomasi yang membawa perdamaian antar kerajaan. Sejak saat itu, Ayam Taliwang semakin populer dan akhirnya dikenal sebagai kuliner khas Lombok.`,

    meaning: 'Melambangkan semangat dan kekuatan masyarakat Lombok yang dikenal berani dan tegas, seperti rasa pedasnya yang berani.',
    suggestionQuestions: [
      'Bagaimana Ayam Taliwang berperan sebagai sarana diplomasi perdamaian antar kerajaan?',
      'Apa yang membuat rasa pedas Ayam Taliwang berbeda dari ayam bakar daerah lain?',
      'Mengapa nama Ayam Taliwang diambil dari Kerajaan Taliwang di Sumbawa?'
    ]
  },
  {
    id: 'mie-aceh',

    name: 'Mie Aceh',

    region: 'Aceh',

    category: 'Kuliner',

    imageId: 'mie-aceh',

    shortDescription: 'Mie kuning tebal dengan kuah kari pedas khas Aceh, disajikan dengan daging atau seafood.',

    fullDescription: `Mie Aceh adalah satu dari kuliner khas yang berasal dari Nanggroe Aceh Darussalam. Ciri khas dari kuliner yang satu ini ialah mie yang disiram kuah kari kental yang bercita rasa rempah-rempah, ditambah aneka lauk didalamnya. 

Jika kuliner mie pada umumnya menggunakan daging sapi, ayam maupun aneka hewan laut, mie Aceh memadukan semua lauk tersebut. Hidangan khas Aceh ini, menggunakan campuran daging sapi, ayam, kambing, bahkan olahan aneka seafood seperti cumi hingga kepiting.`,

    history: `Mie Aceh lahir dari perpaduan berbagai pengaruh budaya asing akibat ramainya pelabuhan Kerajaan Aceh pada masa lalu. Pedagang asing yang datang tidak hanya menyebarkan agama Islam, tetapi juga membawa cita rasa baru dalam masakan. Kaldu kental Mie Aceh dipengaruhi masakan India, sementara mie berasal dari budaya Tiongkok. Penggunaan daging kambing dan sapi mencerminkan nilai-nilai Islam, sedangkan tambahan seafood dipengaruhi kondisi geografis Aceh yang dikelilingi laut. Perpaduan unsur budaya tersebut melahirkan Mie Aceh sebagai kuliner khas Banda Aceh.
Salah satu pelopor Mie Aceh yang melegenda adalah Rumah Makan Mie Razali, yang telah berjualan sejak tahun 1967. Meski awalnya tidak menggunakan nama "Mie Aceh", racikan mie dengan bumbu rempah khas Aceh ini dikenal luas oleh masyarakat. Seiring berkembangnya jalur perdagangan, Mie Aceh semakin populer hingga menyebar ke Pulau Jawa dan Semenanjung Malaysia. Kini, Mie Aceh dapat dengan mudah ditemukan di berbagai daerah, terutama di rumah makan khas Melayu dan Aceh.`,

    meaning: 'Mencerminkan posisi Aceh sebagai pintu gerbang perdagangan Nusantara yang menerima berbagai pengaruh budaya dan mengolahnya menjadi identitas kuliner unik.',
    suggestionQuestions: [
      'Bagaimana Mie Aceh mencerminkan perpaduan budaya India, Tiongkok, dan Islam?',
      'Mengapa Mie Aceh menggunakan campuran beragam lauk dari daging hingga seafood?',
      'Apa peran Rumah Makan Mie Razali dalam mempopulerkan Mie Aceh sejak 1967?'
    ]
  },
  // Additional Traditions - Musik (3)
  {
    id: 'tifa',

    name: 'Tifa',

    region: 'Papua & Maluku',

    category: 'Musik',

    imageId: 'tifa',

    shortDescription: 'Alat musik perkusi tradisional Papua dan Maluku berbentuk tabung dengan satu sisi ditutup kulit hewan.',

    fullDescription: `Tifa merupakan alat musik khas Indonesia bagian Timur, khususnya berasal dari Maluku dan Papua. Alat musik ini memiliki bentuk yang menyerupai gendang serta terbuat dari kayu yang di lubangi pada bagian tengahnya. Setelah dilubangi, kemudian ditutupi dengan kulit hewan (biasanya kulit rusa). Dengan begitu, ketika alat musik ini dimainkan dengan cara dipukul bisa menghasilkan suara yang bagus dan indah.

Bentuk dari alat musik tifa biasanya dibuat dengan ukir-ukiran khas daerahnya. Badan kerangkanya juga terbuat dari kayu yang dilapisi oleh rotan sebagai pengikatnya dengan bentuk yang berbeda-beda berdasarkan daerah asalnya.`,
    history: `Asal-usul tifa berasal dari mitos masyarakat pedalaman Papua tentang dua bersaudara, Fraimun dan Saran Bayar, yang meninggalkan desa mereka yang tenggelam dan menetap di Wamp Ender, Biak Utara. Suatu malam saat berburu, mereka mendengar suara aneh dari pohon opsur di hutan. Keesokan harinya, mereka menemukan berbagai hewan yang tinggal di pohon tersebut, lalu menebangnya dan melubangi bagian tengah kayu hingga berbentuk seperti pipa untuk menghasilkan bunyi.
Awalnya, sang adik berniat menutup salah satu sisi kayu dengan kulit paha kakaknya, namun karena dianggap menyakitkan, mereka memilih menggunakan kulit soa-soa. Dengan memanggil hewan tersebut menggunakan bahasa Biak, soa-soa datang dan kemudian dikuliti. Kulit inilah yang digunakan untuk menutup salah satu ujung kayu berlubang, sehingga terciptalah alat musik tifa seperti yang dikenal masyarakat Papua hingga sekarang.`,

    meaning: 'Melambangkan semangat, keberanian, dan identitas budaya masyarakat Papua dan Maluku. Irama tifa juga menjadi penanda berbagai momen penting dalam kehidupan adat.',
    suggestionQuestions: [
      'Apa cerita mitos di balik terciptanya alat musik tifa menurut masyarakat Papua?',
      'Mengapa kulit soa-soa dipilih untuk menutup salah satu ujung tifa?',
      'Bagaimana ukiran pada badan tifa mencerminkan budaya daerah asalnya?'
    ]
  },
  {
    id: 'saluang',

    name: 'Saluang',

    region: 'Sumatera Barat',

    category: 'Musik',

    imageId: 'saluang',
    shortDescription: 'Alat musik tiup tradisional Minangkabau dari bambu yang menghasilkan suara merdu dan melankolis.',

    fullDescription: `Saluang adalah alat musik tiup (aerophone) tradisional Minangkabau yang terbuat dari bambu tipis (talang). Panjangnya sekitar 40-60 cm dengan empat lubang nada. Biasanya saluang dimainkan dengan iringan satu atau lebih penyanyi, bersamaan dengan perangkat alat-alat musik tradisional lainnya. 

Saluang menghasilkan suara yang merdu dan melankolis, sering dimainkan untuk mengiringi dendang (nyanyian) Minangkabau atau sebagai musik pengiring Tari Piring.`,

    history: `Saluang lahir dari sistem teknologi tradisional Minangkabau zaman dahulu. Saat itu, masyarakat menghidupkan api di tungku untuk memasak dengan menggunakan talang dengan cara ditiup. Ketika ditiup, talang tersebut mengeluarkan bunyi 'luang, luang'.`,

    meaning: 'Melambangkan kesederhanaan, kerinduan, dan ungkapan perasaan mendalam masyarakat Minang. Musik saluang sering kali mengisahkan tentang kehidupan merantau.',
    suggestionQuestions: [
      'Bagaimana asal-usul nama saluang yang berasal dari bunyi "luang, luang"?',
      'Mengapa musik saluang sering dikaitkan dengan tema merantau dalam budaya Minang?',
      'Apa perbedaan saluang dengan alat musik tiup bambu dari daerah lain?'
    ]
  },
  {
    id: 'gong-gede',

    name: 'Gong Gede',

    region: 'Bali',

    category: 'Musik',

    imageId: 'gong-gede',

    shortDescription: 'Ensembel gamelan Bali kuno yang terdiri dari instrumen perunggu besar, digunakan dalam upacara keagamaan.',

    fullDescription: `Gong Gede adalah salah satu jenis gamelan tradisional Bali yang dikenal sebagai gamelan dengan gong-gong besar. Nama "gong gede" sendiri secara harfiah berarti gong yang besar, merujuk pada ukuran instrumen-instrumen gonga dan instrumen lainnya dalam ansambel ini yang umumnya berukuran besar dan menghasilkan suara penuh serta resonan. 

Berbeda dari gaya gamelan Bali modern, gong gede memiliki karakter musik yang tenang, agung, dan statis, dengan tempo yang relatif lambat dan struktur yang mengikuti siklus panjang yang ditandai oleh pukulan gong besar. Musik ini dirancang untuk suasana sakral dan ritual.`,

    history: `Gambelan Gong Gede adalah warisan leluhur yang mula-mula dibuat di banjar Sulahan pada abad ke-XIX Masehi (1850) atas kehendak masyarakat banjar Sulahan. Namun barungan Gong Gede tersebut dirasa belum lengkap, sehingga pada tahun 1927 beberapa instrumen dilengkapi oleh I Dewa Agung Aji Kembangan. Seiring dengan berjalannya waktu, keberadaan Gong Gede di Desa Sulahan ini bisa lengkap menjadi satu kesatuan barungan gambelan Gong Gede.`,

    meaning: 'Melambangkan keagungan, kesucian, dan hubungan antara manusia dengan Tuhan serta alam semesta dalam kepercayaan Hindu Bali.',
    suggestionQuestions: [
      'Apa perbedaan karakteristik musik Gong Gede dengan gamelan Bali modern?',
      'Mengapa Gong Gede hanya digunakan untuk upacara sakral dan ritual keagamaan?',
      'Bagaimana proses pelengkapan instrumen Gong Gede oleh I Dewa Agung Aji Kembangan pada 1927?'
    ]
  },


];
