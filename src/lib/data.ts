import type { Region, TimelineEvent, Tradition, TimelineEra } from './types';

const eraColors: Record<TimelineEra, string> = {
  kerajaan: 'bg-yellow-900/10 border-yellow-700',
  kolonial: 'bg-gray-700/10 border-gray-500',
  kemerdekaan: 'bg-red-900/10 border-red-700',
  modern: 'bg-blue-800/10 border-blue-600',
};

export const timelineData: (TimelineEvent & { colorClass: string })[] = [
  {
    year: 300,
    era: 'kerajaan',
    title: 'Kerajaan Kutai - Prasasti Yupa',
    description: 'Kerajaan Hindu tertua di Nusantara, ditandai dengan penemuan tujuh prasasti Yupa di Kalimantan Timur yang menjadi bukti awal tulisan di Indonesia.',
    imageId: 'kutai-yupa',
  },
  {
    year: 732,
    era: 'kerajaan',
    title: 'Kerajaan Sriwijaya - Pusat Maritim Terbesar',
    description: 'Sebagai pusat maritim dan perdagangan terbesar di Asia Tenggara, Sriwijaya menguasai jalur laut dan menjadi pusat pembelajaran agama Buddha.',
    imageId: 'sriwijaya-ship',
  },
  {
    year: 1293,
    era: 'kerajaan',
    title: 'Kerajaan Majapahit Berdiri',
    description: 'Didirikan oleh Raden Wijaya, Majapahit tumbuh menjadi salah satu kerajaan terbesar dalam sejarah Indonesia, menyatukan sebagian besar Nusantara.',
    imageId: 'majapahit-temple',
  },
  {
    year: 1350,
    era: 'kerajaan',
    title: 'Sumpah Palapa Gajah Mada',
    description: 'Mahapatih Gajah Mada bersumpah untuk tidak menikmati kesenangan duniawi sebelum berhasil menyatukan seluruh Nusantara di bawah naungan Majapahit.',
    imageId: 'gajah-mada',
  },
  {
    year: 1596,
    era: 'kolonial',
    title: 'Kedatangan Belanda Pertama Kali',
    description: 'Ekspedisi Belanda yang dipimpin oleh Cornelis de Houtman tiba di Banten, menandai awal dari era kolonialisme VOC di Nusantara.',
    imageId: 'dutch-arrival',
  },
  {
    year: 1825,
    era: 'kolonial',
    title: 'Perang Diponegoro',
    description: 'Salah satu perang terbesar melawan penjajahan Belanda di Jawa, dipimpin oleh Pangeran Diponegoro sebagai bentuk perlawanan terhadap campur tangan Eropa.',
    imageId: 'diponegoro-war',
  },
  {
    year: 1908,
    era: 'kolonial',
    title: 'Budi Utomo - Kebangkitan Nasional',
    description: 'Organisasi modern pertama di Indonesia yang didirikan oleh para pelajar STOVIA, memicu gelombang kesadaran nasional dan perjuangan kemerdekaan.',
    imageId: 'budi-utomo',
  },
  {
    year: 1928,
    era: 'kolonial',
    title: 'Sumpah Pemuda',
    description: 'Sebuah momen ikrar para pemuda dari berbagai suku di Indonesia untuk bersatu dalam satu tanah air, satu bangsa, dan satu bahasa.',
    imageId: 'sumpah-pemuda',
  },
  {
    year: 1945,
    era: 'kemerdekaan',
    title: 'Proklamasi Kemerdekaan',
    description: 'Soekarno dan Mohammad Hatta memproklamasikan kemerdekaan Indonesia, mengakhiri masa penjajahan dan memulai era baru sebagai negara berdaulat.',
    imageId: 'proclamation',
  },
  {
    year: 1966,
    era: 'kemerdekaan',
    title: 'Orde Baru Dimulai',
    description: 'Era pemerintahan di bawah kepemimpinan Presiden Soeharto yang berfokus pada pembangunan ekonomi dan stabilitas politik.',
    imageId: 'orde-baru',
  },
  {
    year: 1998,
    era: 'kemerdekaan',
    title: 'Reformasi',
    description: 'Gerakan besar yang dipimpin oleh mahasiswa berhasil mengakhiri era Orde Baru, membuka jalan bagi demokrasi dan kebebasan berekspresi di Indonesia.',
    imageId: 'reformasi',
  },
  {
    year: 2004,
    era: 'modern',
    title: 'Pemilu Langsung Pertama',
    description: 'Indonesia menyelenggarakan pemilihan presiden dan wakil presiden secara langsung untuk pertama kalinya, sebuah tonggak penting dalam demokrasi.',
    imageId: 'first-election',
  },
  {
    year: 2019,
    era: 'modern',
    title: 'Situs Warisan Dunia UNESCO Bertambah',
    description: 'Situs Tambang Batubara Ombilin Sawahlunto diakui sebagai Warisan Dunia UNESCO, menegaskan kekayaan sejarah dan budaya Indonesia di mata dunia.',
    imageId: 'borobudur-unesco',
  },
  {
    year: 2024,
    era: 'modern',
    title: 'IKN Nusantara Mulai Dibangun',
    description: 'Pembangunan Ibu Kota Nusantara (IKN) di Kalimantan Timur dimulai, sebuah proyek ambisius untuk menciptakan pusat pemerintahan baru yang modern dan berkelanjutan.',
    imageId: 'ikn-nusantara',
  },
].map(event => ({
  ...event,
  colorClass: eraColors[event.era],
}));


export const regionsData: Region[] = [
    {
        id: 'sumatera',
        name: 'Sumatera',
        description: 'Pulau di ujung barat Indonesia, kaya akan keindahan alam, dari hutan hujan tropis hingga danau vulkanik, serta warisan budaya Melayu yang kental.',
        imageId: 'sumatera-region'
    },
    {
        id: 'jawa',
        name: 'Jawa',
        description: 'Jantung Indonesia, pusat pemerintahan dan ekonomi. Pulau ini memiliki sejarah kerajaan kuno, candi-candi megah, dan budaya yang beragam.',
        imageId: 'jawa-region'
    },
    {
        id: 'kalimantan',
        name: 'Kalimantan',
        description: 'Bagian dari pulau Borneo, terkenal dengan hutan hujannya yang luas, keanekaragaman hayati yang luar biasa, dan budaya suku Dayak yang eksotis.',
        imageId: 'kalimantan-region'
    },
    {
        id: 'sulawesi',
        name: 'Sulawesi',
        description: 'Pulau dengan bentuk unik, menawarkan keindahan bawah laut kelas dunia di Bunaken dan Wakatobi, serta ritual pemakaman unik di Tana Toraja.',
        imageId: 'sulawesi-region'
    },
    {
        id: 'papua',
        name: 'Papua',
        description: 'Tanah paling timur Indonesia, rumah bagi puncak gunung bersalju, lembah-lembah subur, dan suku-suku asli dengan tradisi yang masih terjaga.',
        imageId: 'papua-region'
    },
    {
        id: 'bali-nusa-tenggara',
        name: 'Bali & Nusa Tenggara',
        description: 'Gugusan pulau yang mempesona, dari surga pariwisata Bali, keindahan alam Lombok, hingga pertemuan dengan komodo di Pulau Komodo.',
        imageId: 'bali-nt-region'
    },
    {
        id: 'maluku',
        name: 'Maluku',
        description: 'Dikenal sebagai "Kepulauan Rempah-Rempah", Maluku memiliki sejarah maritim yang kaya dan pantai-pantai tersembunyi yang menakjubkan.',
        imageId: 'maluku-region'
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
