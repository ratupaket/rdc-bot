let handler = async(m, { conn, command }) => {
let fakta = pickRandom(faktaa)
 conn.reply(m.chat, fakta, m)
}

handler.help = ['faktaunik']
handler.tags = ['quotes']
handler.command = /^(faktaunik)$/i

handler.group = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let faktaa = [
"Indonesia adalah Tempat ditemukannya ular terpanjang di dunia yaitu, Python Reticulates sepanjang 10 meter di Sulawesi",
"Suatu penyakit yang disebut “Exercise-Induced Anaphylaxis” harfiah menyebabkan orang menjadi ‘alergi’ untuk berolahraga",
"Pada Sept1909 malam hari, warga Jakarta beruntung menyaksikan Aurora Borealis di langit yg biasanya hanya di kutub ( Prof. Truls L Hansen)",
"Bromelain yang terkandung dalam Nanas bila dikonsumsi berlebihan bagi wanita hamil bisa memicu kontraksi dini bahkan keguguran",
"Secara resmi setiap tanggal 6 Oktober di Jepang merayakan Tom Cruise Day",
"Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m)",
"Burung umumnya tidak berkicau apabila mereka hinggap di tanah (Hummingbirdworld)",
"Orang sherpa di Nepal menganjurkan orang memakan bawang putih utk mencegah dan mengobati rasa tidak nyaman yg disebabkan ketinggian gunung",
"Teka-teki silang terbesar yang pernah diterbitkan memiliki 2631 pertanyaan mendatar dan 2922 pertanyaan menurun",
"Rafflesia Arnoldii yang tumbuh di Sumatera adalah bunga terbesar di dunia. Ketika bunganya mekar, diameternya mencapai 1 meter",
"Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit",
"Orang yang membayangkan suara baru yang belum pernah didengar, atau menggabungkan sebuah melodi matanya akan bergerak ke kir",
"Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian",
"Menara Eiffel dibangun oleh Alexandre Eiffel, dan sebagian besar biayanya ditanggung oleh dia",
"Rata-rata orang di dunia jatuh cinta sebanyak 7 kali dulu sebelum ditakdirkan menikah",
"Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam",
"Ken Edwards seorang pria asal Inggris memegang rekor Guinness untuk makan 36 kecoa dalam 1 menit",
"Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang",
"Lagu kebangsaan Yunani mempunyai 158 bait",
"Kata “depp” dalam bahasa Jerman artinya “idiot”",
"Bobby Tufts (4 tahun) adalah Wali Kota termuda di dunia saat ini (Wali Kota Dorset, Minnesota, AS)",
"Menghisap rokok sambil makan cokelat dapat membunuh racun yang terdapat pada rokok tersebut. [penelitian kedokteran di Universitas Lampung]",
"Di zaman penjajahan Belanda, hukuman orang yg berzina adlh ditangkap dan dicorengkan arang pd hidungnya. Inilah asal usul “Hidung Belang”",
"Kebanyakan orang lebih percaya terhadap kemampuan kepemimpinan seseorang jika orang itu memiliki badan yang lebih tinggi. [inilah .com]",
"Dalam setiap inci persegi permukaan smartphone terdapat skitar 25.107 kuman, artinya smartphone lebih kotor dr kloset. [Laporan dr Proporta]",
"Kebiasaan sibuk memotret dan mengunggah foto makanan di sosial media, beresiko seseorang menjadi gendut. [Dr. Valerie Taylor]",
"Anak yang gemar berolahraga lebih cerdas dibandingkan yang tidak. [penelitian di Michigan State University]",
"Kelurahan Air Jamban adalah nama kelurahan di kecamatan Mandau, kabupaten Bengkalis, provinsi Riau, Indonesia",
"Kata “Poli” berarti Banyak dan “Tics” berarti Makhluk Pengisap Darah. Jadi kata Politics (politik) berarti Banyak Makhluk Pengisap Darah",
"Musik dapat membuat otak bahagia dan kebanyakan mendengarkan musik dapat membuat perut cepat lapar",
"Mendengarkan musik irama lambat saat tidur terbukti mampu meningkatkan kemampuan memori otak. [penelitian di Universitas Tubingen Jerman]",
"Pulau Giliyang di Sumenep, Jawa Timur disebut sbg pulau “Awet Muda” karena pulau ini memiliki kandungan oksigen terbaik di dunia. [tempo co]",
"Morology / Morologi adalah studi tentang percakapan konyol.",
"Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]",
"Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu",
"Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]",
"Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]",
"Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail.",
"Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang",
"Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]",
"Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu",
"Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]",
"Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]",
"Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail]",
"Koin ¥ 1 (Yen Jepang) bisa mengapung di atas air",
"Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin",
"Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan kecemasan, bahkn dpt meningkatkan memori. [Dailymail]",
"Kata “Mouse” (tikus) berasal dari turunan Bahasa Sansekerta “Mus” yang berarti “pencuri”. 48. Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]",
"Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia",
"Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. [penelitian di Inggris]",
"Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka",
"Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]",
"Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan",
"Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30.  [studi baru dari St Tropez] Expand",
"Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang (detikHealth)",
"Nama “Gorila” berasal dari kata Yunani “Gorillai” yang berarti “perempuan berbulu”",
"IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan",
"Selama abad ke-13, kata “nice” sebenarnya berarti “stupid”, “senseless” dan “foolish”",
"49% dari pemilik Smartphone adalah jomblo. (Survei, “2012 Online User Behavior and Engagement Study”)",
"Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)",
"Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor",
"Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri",
"Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)",
"Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang",
"Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan",
"“Mwahahaha” dan “lolz” telah ditambahkan ke Kamus Inggris Oxford",
"Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya",
"Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut “Barbe á Papa” yang berarti “Jenggot Ayah”",
"Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah",
"Hangry adalah penggabungan kata dari “Hungry” dan “Angry”, di pakai ketika anda sedang lapar dan marah",
"Kentut dari bakteri membuat keju swiss memiliki lubang-lubang",
"Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)",
"Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)",
"Tanduk badak terbuat dari keratin",
"Jerapah memiliki lidah sepanjang 21 inchi",
"Sepeda pertama dibuat pada tahun 1817 dibuat tanpa pedal",
"Rechendorfer Yusuf adalah orang pertama yang berhasil menempatkan karet penghapus di atas sebuah pensil",
"Balon mainan yang pertama kali terbuat dari karet vulkansir",
"Satu ujung pensil dapat menulis 50.000 kata dalam bahasa Inggris",
"Terdapat hampir 900 jenis kelelawar di dunia",
"Tangan kanan orang hidup lebih lama dari tangan kiri",
"Banyak orang yang dibunuh oleh keledai",
"Seekor buaya tidak dapat mengeluarkan lidah",
"Semut tidak tidur",
"Beruang kutub bertangan kidal",
"Astronot tidak diperbolehkan untuk makan kacang-kacangan sebelum mereka pergi ke ruang angkasa karena buang angin/kentut dalam pakaian ruang angkasa mengakibatkan kerusakan",
"Dengan menaikkan kaki Anda perlahan dan berbaring ke belakang, Anda tidak dapat terperosok ke dalam pasir",
"Pemogokan cahaya di bumi sekitar 6.000 kali per menit",
"Lobster memiliki darah biru",
"Seorang pria mengatakan rata-rata 4.850 kata dalam 24 jam",
"Kuku ibu jari tumbuh lambat dan kuku jari tengah yang tercepat",
"Kecap sebelumnya dijual sebagai obat",
"Cokelat dapat membunuh anjing",
"Produk pertama yang memiliki barcode adalah Wrigley’s gum",
"Kanada dalam bahasa India berarti Desa Besar",
"Seseorang menghasilkan 100 pound sel darah merah dalam hidupnya",
"Pita karet terpanjang adalah di kulkas",
"Ada 293 cara untuk menukar dolar",
"“Dreamt” adalah satu-satunya kata yang berakhir dengan ‘mt’",
"Orang yang cerdas memiliki kadar seng dan tembaga di rambut mereka",
"69% orang Amerika menggunakan internet dan hanya 5,5% dari India",
"Plastik dibutuhkan 500 tahun untuk terurai",
"Amerika telah memiliki 30,30% bandara di dunia & India hanya 0,70%",
"Total wilayah permukaan bumi adalah 197 juta mil persegi",
"Cahaya matahari mencapai bumi membutuhkan waktu sekitar 8 jam 3 detik",
"Penduduk di dunia telah meningkat 3,1 miliar dalam 40 tahun terakhir",
"Sekitar 180 juta kartu Valentine tersebar per tahunnya",
"Orang yang berusia di atas 100 di AS meningkat dari 4.000 pada tahun 1960 menjadi 55.000 pada tahun 1995",
"Seekor kucing dapat berlari 20 km per jam",
"Seekor cheetah dapat berlari 76 km per jam",
"Katak yang terbesar di dunia adalah Goliath Frog",
"Tidak ada dua zebra yang belangnya serupa",
"Terdapat hampir 50 jenis kangguru",
"Joeys adalah nama yang diberikan kepada anak kanguru",
"Woodpecker dapat mematuk 20 kali dalam satu menit",
"Lidah seekor Chameleon adalah dua kali panjang tubuhnya sendiri",
"10% dari populasi dunia adalah tangan kiri",
"Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai “emas putih”",
"Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]",
"Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]",
"Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen",
"Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]",
"Perbandingan jumlah rayap dan manusia di dunia adalah 10 :",
"Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati",
"Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan",
"Kuda Nil kentut lewat mulut",
"Pohon kelapa membunuh 150 orang tiap tahun, lebih banyak daripada hiu",
"Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih",
"Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan",
"Kita bernafas kira-kira 23.000 kali setiap hari",
"Tahukah anda? Llanfairpwllgwyngyllgogerychwyrndrobwlll, adalah nama sebuah desa di Wales Utara, Inggris. Sulit dibaca bukan?",
"Ada sekitar 10ribu jenis apel di dunia Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor",
"Umur dari capung adalah 24 jam",
"Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai",
"Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendir",
"Kentut sapi termasuk penyebab utama global warming",
"Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan film agar kita bisa melihat semua gerakannya",
"Siput bisa tidur selama 3 tahun",
"Jika kita berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari",
"Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W",
"Tiap tahun, bulan menjauh 3.82 cm dari bumi",
"Riset membuktikan, memakan pisang bisa menambah daya ingat",
"Orang yang alergi bahan latex, biasanya alergi kiwi juga",
"Ilmu tentang perkembangan apel disebut Pomology",
"Kita bisa mematangkan Mangga dengan cepat dengan cara memasukkan ke dalam paperbag bersama dengan pisang matang",
"Antioksidans pada apel lebih besar 5x dari pisang",
"Hanya 1 dari 5 orang australia makan apel tiap hari",
"Kiwi memiliki nama lain Chinese Gooseberry",
"Mangga masih 1 family dengan tanaman Poison Ivy",
"Pelaut inggris mengonsumsi air jeruk nipis untuk menghindari mabuk laut",
"Pelaut inggris disebut juga Limeys karena suka minum air jeruk nipis",
"Nanas mengandung Bromelain yang berguna mencegah bir dingin berawan",
"Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotorUmur dari capung adalah 24 jam",
"1 pohon apel rata2 bisa menghasilkan 500buah apel",
"25% kandungan dalam apel adalah Udara. makanya apel bisa mengapung",
"Lebih dari 60juta Ton apel dihasilkan di dunia per periode tertentu",
"Kiwi ditetapkan sebagai buah kebangsaan di Cina",
"Pear akan berubah menjadi hitam sekali jika disimpan pada lingkungan yang kurang oksigen",
"Markisa pertama kali ditemukan di Brazil",
"Riset membuktikan bahwa makan apel bisa mengurangi risiko kena kanker",
"Biji apel merupakan racun ringan namun tidak berbahaya bagi manusia",
"Jeruk adalah buah yang paling umum di dunia",
"Beberapa negara di dunia melatih bangsa monyet untuk memetik kelapa",
"Ada lebih dari 400jenis kiwi di Cina",
"Bahasa gaul di australia “She’s Apple” bukan berarti “Dia (wanita) manis” tetapi berarti “Semuanya baik2 saja”",
"Nanas yang belum matang adalah racun",
"Kiwi memiliki nama asli Yang Tao (Sunny Peach)",
"Makan pisang ketika makan nasi dapat membantu ibu hamil terhindar dari Morning Sickness",
"Plum jepang sebenarnya berasal dari Cina",
"Plum bisa tumbuh di semua benua kecuali antartika",
"Memerlukan tenaga 50lembar daun untuk menghasilkan 1buah apel dalam 1pohon",
"Makan plum membantu meningkatkan penyerapan zat besi dalam tubuh",
"Anggur dapat meledak jika dimasukkan ke dalam microwave",
"Pisang mengandung vitamin B6 yang bisa mengontrol kadar gula dalam darah, dan membangkitkan mood",
"1nanas bukan 1buah, tetapi terdiri atas lebih dari 200anak buah (fruitlets)",
"Jeruk nipis tidak mengandung segala jenis lemak, natrium, dan kolestrol",
"Menanam semangka dalam kotak akan menghasilkan semangka kotak",
"Dilihat dari beratnya, semangka adalah buah yang paling diminati di USA",
"Pohon kelapa entah kenapa disebut “Tree of Life”",
"Bunga pohon markisa adalah Bunga kebangsaan negara Paraguay",
"Semangka adalah sepupunya Terong, Labu, dan Squash",
"Menanam 1biji buah jeruk bisa menghasilkan lebih dari 1 pohon",
"Bagian dalam kulit pisang bisa untuk menyemir sepatu kulit",
"Bagian dalam kulit pisang juga bisa digunakan untuk menghilangkan gatal bekas gigitan nyamuk dengan cara menggosokkannya",
"Di Kerala, India selatan, Bunga kelapa digunakan untuk upacara Pernikahan",
"Kulit Plum dipercaya memiliki efek Laxative",
"Pisang kaya akan vitamin B-Complex yang bisa menenangkan sistem saraf",
"Tidak ada yang se-rima dengan “orange” (jeruk)",
"Salah satu spesies markisa yang buahnya berwarna ungu bisa melakukan fertilisasi sendiri",
"Pisang bisa meningkatkan kadar Serotonin yang bisa melawan depresi",
"Semakin besar “Navel” pada Jeruk Navel, semakin manis buahnya",
"Markisa yang berkerut adalah markisa yang paling manis",
"Radiasi dari 1 batang rokok sama dgn radiasi 2000x X-ray",
"Sepatu boot awalnya dikhususkan untuk berperang",
"Sebelum Masehi bahasa inggrisnya adalah B.C (Before Christ). Setelah Masehi adalah A.D (Anno Domini)",
"Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam",
"Julius Caesar tewas dengan 23 tikaman",
"Nama mobil Nissan berasal dari bahasa jepang Ni : 2 dan San : 3. Nissan : 23",
"Jerapah dan tikus bisa bertahan hidup lebih lama tanpa air dari pada unta",
"Perut memproduksi lapisan lendir setiap dua minggu agar perut tidak mencerna organnya sendiri",
"98% dari perkosaan dan pembunuhan dilakukan oleh keluarga dekat atau teman korban",
"Semut dapat mengangkat beban 50 kali tubuhnya",
"Deklarasi Kemerdekaan Amerika ditulis diatas kertas marijuana",
"Titik diatas huruf i disebut ‘title’",
"Sebutir kismis yang dijatuhkan kedalam gelas berisi sampanye segar akan bergerak naik turun dalam gelas",
"Benjamin Franklin anak bungsu dari orangtua bungsu keturunan ke 5 dalam keluarga bungsu",
"Triskaidekaphobia adalah ketakutan pada 13. Paraskevidekatriaph obia adalah ketekukan pada hari jumat tanggal 13 (bisa terjadi antara 1-3 kali setahun). di Italia, 17 adalah angka sial di Jepang angka sial adalah 4",
"Lidah jerapah panjangnya sekitar 50 cm",
"Mulut menghasilkan 1 liter ludah setiap hari",
"Kita bernafas kira-kira 23.000 kali setiap hari",
"Kata ZIP (kode pos) adalah kepanjangan dari ‘Zoning Improvement Plan’",
"Coca-Cola mengandung Coca (yang merupakan zat aktif pada kokain) dari tahun 1885 sampai 1903",
"Rata-rata kita bicara 5000 kata tiap hari (walaupun 80% nya kita bicara pada diri sendiri)",
"Seandainya kuota air dalam tubuh kita berkurang 1%, kita langsung merasa haus",
"4 simbol raja pada kartu remi melambangkan 4 raja yang etrkenal di jaman masing-masing: Sekop = David/Raja Daud ; Keriting = Alexander the Great/Iskandar Agung ; Hati = Charlemagne/ Raja Prancis ; Wajik =Julius Caesar",
"Seumur hidup kita meminum air sebanyak kurang lebih 75.000 liter",
"Setiap orang, termasuk kembar identik, sidik jari dan tekstur lidahnya tidak ada yang sama",
"Titik merah pada 7-Up logo berasal dari penemunya yang bermata merah. Dia seorang albino",
"Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai",
"Tanda ’save’ pada Microsoft Office programs menunjukan gambar floppy disk dengan shutter terbalik",
"Albert Einstein dan Charles Darwin,keduanya menikah dengan sepupu pertama mereka (Elsa Löwenthal dan Emma Wedgewood)",
"Unta punya 3 kelopak mata",
"Sehelai rambut di kepala kita mempunyai masa tumbuh 2 sampai 6 tahun sebelum diganti dengan rambut baru",
"Seseorang masih akan sadar selama 8 detik setelah dipenggal",
"Otot yang bekerja paling cepat ditubuh kita adalah otot dikelopak mata yang membuat kita berkedip. kita bisa berkedip 5kali dalam sedetik",
"Coklat dapat membunuh anjing,karena langsung mempengaruhi jantung dan susunan syarafnya",
"Tanpa dicampur ludah di dalam mulut, kita tidak akan merasakan rasa makanan",
"Kuku jari tangan tumbuh 4kali lebih cepat daripada kuku kaki",
"13% orang di dunia adalah kidal",
"Hampir semua lipstik mengandung sisik ikan",
"Bayi yang baru lahir berat kepalanya 1/4 dari berat tubuhnya",
"Kita sebenarnya melihat dengan otak. mata hanya berupa kamera yang mengirim data ke otak. 1/4 bagian dari otak digunakan untuk mengatur kerja mata",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendiri",
"Tahun 1830an saus tomat biasa dijual sebagai obat",
"Tiga monyet bijak punya nama: Mizaru (See no evil), Mikazaru (Hear no evil), and Mazaru (Speak no evil)",
"India mempunyai Undang-undang hak untuk sapi",
"Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar",
"Nama negara Filipina berasal dari nama Raja Phillip",
"Saudi Arabia berasala dari nama Raja Saud",
"Anak-anak mempunyai 20 gigi awal. Orang dewasa punya 32",
"Karena langkanya logam, piala Oscars yang dibagikan pada perang dunia ke II terbuat dari kayu",
"Setiap Siklus 11 tahun, kutub magnet pada matahari bertukar tempat. Siklus ini dinamakan “Solarmax”",
"Ada 318,979,564, 000 kemungkinan kombinasi pembukaan pertama pada catur",
"Ada lebih dari 300 bakteri pembentuk karang gigi",
"Macan adalah anggota terbesar dalam keluarga kucing",
"Nomer “172? dapat ditemukan pada uang kertas 5 dollar amerika, pada gambar semak-semak dibawah Lincoln Memorial",
"Pohon kelapa membunuh 150 orang tiap tahun. Lebih banyak daripada hiu",
"Pada poster film ‘Pretty Woman’ Julia Robets terlalu pendek untuk bisa sejajar dengan Richard Gere. Maka digunakan model Shelley Michelle sebagai tubuh Julia",
"Daerah kutub kehilangan matahari selama 186 hari dalam setahun",
"Kode Telephone Internasional untuk Antartica adalah 672",
"Bom pertama sekutu dijatuhkan di Berlin pada perang dunia ke II. Membunuh satu-satunya gajah di Kebun Binatang Berlin",
"Rata-rata hujan jatuh dengan kecepatan 7 mil per jam",
"Butuh 10 tahun bagi Leonardo Da Vinci untuk melukis Mona Lisa. Lukisan itu tidak ditandai dan di beri tanggal. Leonardo dan Mona mempunya susunan tulang yang persis sama dan menurut sinar X, ada 3 versi lukisan dibawah lukisan itu",
"Nama dari kembar gemini adalah Castor dan Pullox",
"Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan filam agar kita bisa melihat semua gerakannya",
"Satu kilo dari berat badan kita mengandung 7000 kalori",
"Darah sama kental dengan air laut",
"Air laut di samudra Atlantik lebih asin dari pada di samudra Pasifik",
"Topeng tokoh Michael Myers di film horor ‘Helloween’ sebenernya topeng tokoh Captain Kirk (Star Trek) yang di cat putih, karena kurang dana",
"Nama asli butterfly (kupu-kupu) adalah flutterby",
"Bayi lahir setiap 7 detik",
"Satu dari 14 wanita Amerika berambut pirang asli. Prianya hanya satu dari 17",
"The Olympic adalah saudara dari kapal Titanic, dan melayani dengan selamat selama 25 tahun",
"Saat Titanic karam, 2228 orang ada di dalamnya. Hanya 706 yang selamat",
"Di Amerika, seseorang didiagnosa menderita AIDS tiap 10 menit. Di Afrika, seseorang meninggal karena AIDS tipa 10 menit",
"Sampai usia 6 bulan, bayi bisa menelan dan bernapas secara bersamaan. Orang dewasa tidak bisa",
"Alasan kenapa diiklan jam kebanyakan jarum menunjuk pukul 10.10, karena jam seperti sedang tersenyum",
"Tiap tahun bulan menjauh 3.82 cm dari bumi",
"Saat kita bertahan hidup dan tidak ada bahan makanan, sabuk kulit dan sepatu keds adalah makanan terbaik untuk dimakan karena mengandung cukup gizi untuk hidup sementara",
"Dalam satu tetes air mengandung 50 juta bakteri",
"Dengan menaikan kaki pelan2 dan berbaring tenang dengan punggung lurus, kita tidak akan tenggelam di pasir hisap",
"Satu dari 10 orang hidup di suatu pulau",
"Memakan seledri membuang kalori lebih banyak dari pada kalori yang terkandung dalam seledri itu sendiri",
"Lobster dapat hidup selama 100 tahun",
"Permen karet tidak dijual di Disney Land",
"Mangunyah permen karet saat mengupas bawang mencegah kita menangis",
"Rahang kucing gak bisa bergerak kekiri dan kanan",
"Nama Artic (kutub utara) berarti beruang dalam bahasa Yunani (Arktos), dan memang beruang kutub hanya ada di kutub utara",
"Jika kira berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari",
"Suara yang kita dengar dari dalam kerang bukan suara ombak laut, tapi suara aliran darah dalam kepala kita",
"Orang kebanyak yang menderita ketakutan pada ruang terbuka (kenophobia) daripada ketakukan pada ruang tertutup (claustrophobia) ",
"Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W",
"Adegan band yang terus bermain musik saat Titanic tenggelam adalah kisah nyata",
"Buku Guinness Book of Records memegang rekor sebagai buku yang paling banyak dicuri dari perpustakaan",
"35% dari orang yang ikut kontak jodoh lewat internet, sudah menikah",
"CocaCola dulu berwarna hijau",
"Secara fisik, babi tidak bisa melihat ke langit",
"Semua beruang kutub kidal",
"Kelelawar selalu belok kiri jika terbang keluar gua",
"Jim Henson pertama kali memakai kata “Muppet”. Kombinasi dari “marionette” dan “puppet”",
"Gajah satu-satunya hewan yang tidak bisa meloncat",
"The Michelin man (figur berbaju dan bertopi putih diiklan Michelin) bernama Mr. Bib. nama aslinya Bibendum pada iklan pertama tahun 1896",
"Kita tidak bisa menjilat siku kita sendiri",
"Kata “lethologica” menggambarkan saat dimana kita tidak bisa mengingat apa yang kita inginkan",
"Sekitar 14% pecandu yang menggunakan jarum suntik, positif HIV",
"Kalimat yang bisa dibaca sama dari depan dan belakang (racecar, kayak, tamat) disebut “palindrome” ",
"Siput bisa tidur selama 3 tahun",
"Diatas khatulistiwa melintas sekitar 200 satelit asing, termasuk satelit mata-mata",
"Orang di Cina lebih banyak yang berbahasa Inggris dari pada orang di Amerika",
"Karena pengaruh rotasi bumi, kalau kita melempar kearah barat, lemparan kita akan lebih jauh jatuhnya dari pada kearah timur",
"Satu dari 9000 orang menderita albino",
"Kursi listrik ditemukan oleh seorang dokter gigi",
"Kita berulang tahun bersama 9 juta orang dari seluruh dunia",
"Setiap manusia dalam hidupnya rata-rata habis untuk menunggu dilampu merah selama 2 minggu",
"Botol aqua dan tempat makan plastik baru bisa terurai dengan sempurna dalam tanah setelah 50.000 tahun",
"Kucing bisa membuat lebih dari 100 bunyi vokal, anjing hanya bisa sekitar 10",
"Gigi berang-berang tak pernah berhenti ",
"Kelelawar adalah satu-satunya mamalia yang bisa terbang",
"Jika boneka Barbie adalah manusia, ukurannya adalah 39-23-33 (99-58,5-84 cm). Tingginya sekitar 215 cm dan punya leher 2kali lebih panjang daripada manusia normal",
"Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan",
"Memakai Headphone selama 1 jam dapat mengembangbiakan bakteri dalam kuping 700 kali lebih cepat",
"Seekor Babon bernama ‘Jackie’ menjadi prajurit resmi dalam angkatan bersenjata Afrika Selatan pada Perang Dunia I",
"Bibliophile adalah sebutan untuk kolektor buku-buku langka. Bibliopole adalah penjual buku-buku langka",
"Jantung ikan paus biru berdenyut 9 kali dalam semenit",
"Arabic numerals bukan berasal dari Arab, tapi diciptakan di India",
"Kupu-kupu melihat dengan 12000 mata",
"Bulan February tahun 1865 adalah satu-satunya bulan dalam catatan sejarah yang tidak sempat mengalami bulan purnama",
"Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati",
"Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan",
"Di Bumi, satu tahun adalah 365 hari. Di planet Merkurius satu tahun adalah 2 hari",
"Umur dari capung adalah 24 jam",
"Pada Usia 3 bulan janin manusia mulai terbentuk sidik jari",
"Butuh waktu 6 bulan untuk kuku kaki tumbuh dari bawah paling bawah sampai ujung kuku",
"Daya ingat ikan hanya 3 detik",
"Bulan purnama 9 kali tebih terang daripada bulan setengah",
"Untuk setiap patung memorial orang diatas kuda, jika 2 kaki depan kuda mengangkat, maka orang tersebut tewas dalam pertempuran, jika satu kaki kuda yang terangkat, maka orang tersebut meninggal karena luka dalam pertempuran, jika 4 kakinya menginjak tanah, orang tersebut meninggal secara normal",
"Beruang dewasa dapat lari secepat kuda",
"Tulang kuda lebih banyak 18 buah dari tulang manusia",
"Ubur-ubur terdiri dari 95% air",
"Kulit Zebra adalah putih yang bergaris hitam",
"Kecuali manusia dan monyet, semua mamalia buta warna",
"Biji apel mengandung sianida",
"Tikus dan kuda tidak bisa muntah",
"Penguin adalah burung yang tidak bisa terbang tapi bisa berenang",
"Astronot dilarang mengkonsumsi kacang sebelum menjelajah ruang angkasa karena jika buang angin dalam baju khusus astronot dapat membahayakan mereka",
"Winston Churchill lahir di toilet wanita saat acara dansa",
"Sebelum ada pesawat jet, Jetlag disebut Boatlag",
"Kucing berkeringat melalui telapak kakinya (terutama saat mendengar gonggongan anjing)",
"Kucing tidak bisa merasakan rasa manis",
"Coklat meleled dalam mulut karena titik lelehnya adalah 35 derajat celcius",
"Dalam perang dahulu, orang yang buta warna dibutuhkan dalam tim pendeteksi kamuflase di militer",
"Sapi tidak punya gigi atas",
"Hedenophobic berarti takut akan kesenangan",
"Pendeta Mesir kuno mencabuti setiap helai rambut dan bulu dari badan mereka",
"Buaya tidak bisa menjulurkan lidah",
"Kentut sapi termasuk penyebab utama global warming",
"Semut selalu jatuh miring ke kanan jika diberi racun serangga",
"Kucing rumah benci bau lemon dan semua yang berbau sitrus",
"Donal Bebek dilarang beredar di Finlandia karena Donal tidak pakai celana",
"Nama asli Donal bebek adalah Donald Flauntleroy Duck",
"Indra perasa kupu-kupu ada dikakinya",
"Dry Ice tidak meleleh, tapi menguap",
"Mata burung unta lebig besar dari otaknya",
"Bintang laut tidak punya otak",
"Tiap manusia punya telinga yang berbeda",
"Telur segar tenggelam diair, telur yang kadaluarsa mengambang",
"80% dari seluruh binatang di dunia adalah serangga",
"Kacang adalah salah satu bahan untuk membuat dinamit",
"Ratu Elizabeth I menderita Anthophobia (takut akan mawar)",
"RSVP adalah Respondez s’il Vous Plait yang artinya ‘mohon jawaban’",
"Mata manusia yang sehat (tidak buta warna) dapat menbedakan 500 jenis warna abu-abu",
"Ikan mas yang bunting disebut ‘twit’",
"Eropa adalah benua tanpa padang pasir",
"Lalat meloncat mundur saat akan terbang",
"Sekeor kucing memiliki 32 otot pada tiap telinga",
"A honeybee can fly at fifteen miles per hour",
"Macan mempunyai kulit yang belang,bukan hanya bulu yang belang",
"A “jiffy” is the scientific name for 1/100th of a second",
"Hanya 3 malaikat, Gabriel, Michael dan Lucifer yang disebut dalam injil",
"Kambing mempunya pupil mata segi empat",
"Novel pertama yang menggunakan mesin tik adalah Tom Sawyer",
"Hamster sangat suka makan jangkrik",
"Pemantik ditemukan sebelum korek api",
"Rata-rata dalam setiap batang permen coklat terdapat serangga yang meleleh bersamanya",
"Tanduk badak terbuat dari rambutnya yang mengeras",
"Perang paling singkat dalam sejarah adalah perang Zanzibar and England tahun 1896. Zanzibar menyerah setelah 38 menit",
"Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor",
"Kulit beruang kutub sebenarnya hitam. Bulunya berwarna bening, dan tampak putih di salju",
"Elvis mempunyai saudara kembar bernama Garon, yang meninggal saat lahir, maka nama tengah Elvi adalah Aron, untuk menghormati saudaranya",
"Landak punya sidik jari yang mirip manusia",
"Kuda Nil kentut lewat mulut",
"Shakespeare yang menemukan kata “assassination” dan “bump”",
"Mahluk yang bisa tersipu-sipu hanya manusia",
"Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih",
"Wanita berkedip dua kali lebih banyak dari pria",
"Nama Jeep (jip) diampil dari singkatan “GP”, bahasa militer untuk General Purpose",
"Orang yang menggunakan tangan kanan, kira-kira, 9 tahun lebih panjang umur dari orang kidal",
"Jika semua emas dalam laut ditambang, setiap manusia didunia bisa mendapat emas 20 kg masing2",
"Jika lever manusia berhenti bekerja, manusia akan mati dalam 8 samapai 24 jam",
"Seorang “quidnunc” adalah sebutan untuk orang yang selalu ingin tahu gosip terbaru",
"Jika matahari tiba-tiba padam, butuh 8 menit bagi manusia untuk menyadarinya",
"Leonardo Da Vinci yang menemukan gunting, helikopter, dan banyak alat lainnya",
"Dalam 4000 tahun, tidak ada jenis binatang peliharaan baru",
"25% dari tulang manusia ada di kaki",
"David Sarnoff adalah orang yang menerima sinyal Titanic dan meyelamatkan ratusan nyawa. Dia akhirnya menjadi kepala jaringan radio, the National Broadcasting Company (NBC)",
"Kira-kira 100 orang tersedak ballpoint tiap tahun",
"Jika kita terkunci diruang yang kedap udara, kita aka lebih dulu mati keracunan co2 dari pada kekerangan o2",
"Jika kita kehilangan satu mata, kita akan kehilangan 1/5 dari pengelihatan kita dan kehilangan seluruh persepsi tentang kedalaman objek",
"Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan",
"Bawang putih yang kita gosok di tumit kaki akan meresap dapat dapat tercium dalam nafas kita",
"Dengan merentangkan kedua tangan sejauh mungkin, jarak dari kedua ujung tangan adalah sama dengan tinggi kita",
"Liburan selama sebelas hari berarti kita punya waktu hampir sejuta detik untuk menikmatinya",
"Dalam film Silence of The Lambs, tokoh Hannibal Lecter tidak pernah berkedip",
"Di jepang, warung kopi disebut ‘Kissaten’",
"Merebus telur burung unta butuh waktu 40 menit",
"Jaguar takut pada anjing",
"Gajah hanya tidur 2 jam dalam sehari",
"Johnny Deep takut pada badut",
"Ganymede adalah bulan planet Jupiter, merupakan bulan terbesar di tata surya kita, lebih besar dari planet Merkurius",
"Dalam golf, ‘Bo Derek’ adalah istilah untuk nilai 10",
"Koala punya dua jempol",
"Latte dalam bahasa Italia adalah susu",
"Llanfairpwllgwyngyl lgogerychwyrndro bwlll… adalah nama sebuah desa di Wales Utara, Inggris",
"Di Italia, Micky Mouse lebih dikenal dengan nama ‘ Topolino’",
"Susu sebenarnya lebih menyerupai makanan daripada minuman",
"Ada lebih dari 450 jenis susu di dunia. 240 berasal dari Prancis",
"Nyamuk lebih suka anak-anak daripada orang dewasa",
"Partikel debu didalam rumah sebagian besar berasal dari sel kulit mati",
"Rat-rata orang bergerak 40 kali dalam tidurnya",
"Dalam bahasa Inggris, ‘Naked’ artinya tanpa perlindungan. ‘Nude’ artinya telanjang",
"Broccoli dan kembang kol adalah sayuran yang berupa bunga",
"Anak baru lahir memiliki 350 tulang. Mereka menyatu atau menghilang sampai menjadi 206 pada usia 5 tahun",
"Tidak ada bukti yang pasti siapa yang membangun Taj Mahal",
"Dalam survey terhadap 200000 burung unta selama 80 tahun, tidak ada satupun yang mengubur kepalanya dalam tanah",
"Nail Amstrong melangkah pertama kali di bulan dengan kaki kiri",
"Shuttlecock untuk badminton harus punya 14 bulu",
"Mutiara bisa larut dalam cuka",
"Babi tidak dapat berkeringat karena tidak punya kelenjar keringat. Mereka berlumur lumpur untuk mendinginkan kulitnya",
"Venus dan Uranus adalah planet di tata surya kita yang berputar melawan jarum jam. Jadi matahari terbit dari barat di planet ini",
"Microwave ditemukan setelah seorang ilmuan yang berjalan melewati tabung radar mendapati permen coklatnya meleleh disakunya",
"Ikan hiu kebal terhadap kanker",
"Rusa Santa bernama: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, dan Blitzen",
"Beberapa jenis cacing pita akan memakan dirinya sendiri jika kelaparan",
"Kita bisa menghela sapi naik tangga, tapi tidak bisa menghela mereka turun tangga",
"Plakat yang ditinggalkan Apollo 11 di bulan berbunyi “Here men from the planet Earth first set foot upon the Moon July 1969, A.D. / WE CAME IN PEACE FOR ALL MANKIND",
"Alpabet Hawai terdiri dari 12 huruf saja",
"Nama paling populer di dunia adalah Muhammad",
"Bola mata kita beratnya sekitar 28 gram",
"Paru-paru kiri lebih kecil dari paru-paru kanan karena memberi tempat terhadap jantung",
"Pinguin hanya ada di kutub selatan, dan tidak bisa menyebrangi equator",
"Kebanyakan orang bisa mendengar lebih baik dengan kuping kanan",
"Vitamin pada buah biasanya terdapat pada kulitnya",
"Rata-rata klakson mobil berbunyi pada nada F",
"Pria lebih mampu membaca tulisan dengan ukuran huruf kecil daripada wanita"
]