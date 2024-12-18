let handler = async (m, { conn }) => {
	let from = m.chat
		conn.exam = conn.exam ? conn.exam : {}
		if (from in conn.exam) {
			conn.sendMessage(m.chat, { text: 'Silahkan selesaikan permainan terlebih dahulu'}, { quoted: conn.exam[from][0]})
			return false
		}
		let data = [
	{ "soal": "Berikut ini adalah mata pelajaran yang paling erat keterkaitannya dengan mata pelajaran pendidikan kewarganegaraan, kecuali ….",
		"jawaban": "Pendidikan keterampilan",
		"a": "IPS",
		"b": "Pendidikan agama",
		"c": "Pendidikan keterampilan",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Penduduk Indonesia golongan weddoid terdapat di daerah ….",
		"jawaban": "Enggano dan Mentawai",
		"a": "Enggano dan Mentawai",
		"b": "Papua dan Aru",
		"c": "Sunda Besar dan Madura",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Menurut Piaget, perkembangan dalam tahapan kesadaran mengenai aturan, dimana aturan dirasakan sebagai hal yang tidak bersifat memaksa adalah usia antara ....",
		"jawaban": "0 – 2 tahun",
		"a": "0 – 2 tahun",
		"b": "2 – 8 tahun",
		"c": "8 – 12 tahun",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Bahwa sesuatu hal dipandang baik dengan pertimbangan untuk memenuhi anggapan orang lain baik karena memang telah disepakati, merupakan ciri dari tahap perkembangan moral, yaitu ....",
		"jawaban": "Orientasi kesepakatan timbal balik",
		"a": "Orientasi hukuman dan kapatuhan",
		"b": "Orientasi instrumental nisbi",
		"c": "Orientasi kesepakatan timbal balik",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Pendidikan kewarganegaraan sebagai wahana utama serta esensi pendidikan demokrasi di Indonesia, yang dilaksanakan dengan fokus kecerdasan dan daya nalar warga negara baik dalam dimensi spiritual, rasional, emosional, maupun sosial adalah ....",
		"jawaban": "Civic intelligence",
		"a": "Civic responsibility",
		"b": "Civic intelligence",
		"c": "Civic participation",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Pernyataan di bawah ini merupakan kelebihan dari pendekatan pembelajaran terpadu dibandingkan dengan pendekatan pembelajaran yang bersifat konvensional, kecuali...",
		"jawaban": "Pembelajaran terpadu lebih menfokuskan pada ranah kognitif dan psikomotor",
		"a": "Pengalaman dan kegiatan belajar anak akan selalu relevan dengan tingkat perkembangan anak",
		"b": "Seluruh kegiatan beajar lebih bermakna bagi anak sehingga hasil belajar akan dapat bertahan lebih lama",
		"c": "Pembelajaran terpadu lebih menfokuskan pada ranah kognitif dan psikomotor",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Salah satu landasan hukum Bhinneka Tunggal Ika, adalah batang tubuh UUD 1945, yaitu.....",
		"jawaban": "Pasal 1 ayat 1",
		"a": "Pasal 1 ayat 1",
		"b": "Pasal 27",
		"c": "Pasal 30",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Paham bangsa timbul karena persamaan perangai dan tingkah laku dalam memperjuangkan persatuan dan nasib yang sama, merupakan nasionalisme menurut pandangan ....",
		"jawaban": "Otto Bauar",
		"a": "Joseph Ernest Renant",
		"b": "Otto Bauar",
		"c": "Louis Sneyder",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Lagu apuse berasal dari daerah ....",
		"jawaban": "Papua (Irian Jaya)",
		"a": "Papua (Irian Jaya)",
		"b": "Sulawesi Utara",
		"c": "Maluku",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Salah satu fungsi Komnas HAM dalam penyuluhan adalah...",
		"jawaban": "Pengamatan pelaksanaan HAM dan penyusunan laporan hasil pengamatan",
		"a": "Menyebarluaskan wawasan mengenai HAM kepada masyarakat Indonesia",
		"b": "Studi kepustakaan, studi lapangan, dan studi banding di negara lain mengenai HAM",
		"c": "Pengamatan pelaksanaan HAM dan penyusunan laporan hasil pengamatan",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Hukum adalah pikiran atau anggapan orang tentang adil dan tidak adil mengenai hubungan manusia, merupakan pandangan dari",
		"jawaban": "Prof Sudiran",
		"a": "Dr. Mr. Kisch",
		"b": "Prof Sudiran",
		"c": "Grotius",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Hak asasi manusia melekat pada diri setiap manusia, tanpa melihat latar belakang kehidupan dan status sosialnya, merupakan ciri khas dari HAM, yaitu....",
		"jawaban": "Hakiki",
		"a": "Kodrat",
		"b": "Hakiki",
		"c": "Universal",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	}
]
		let list = data
	let random = Math.floor(Math.random() * list.length);
		let json = list[random]
	
conn.exam[from] = [
			await conn.sendMessage(m.chat, { text: json.soal + '\nA. ' + json.a + '\nB. ' + json.b + '\nC. ' + json.c + '\n\n' + 'Waktumu 1 menit untuk menjawab' + '\nSoal tingkat ' + json.tingkat }, { quoted: m }),
			json.jawaban,
			setTimeout(() => {
				conn.sendMessage(m.chat, { text: 'Waktu habis'}, { quoted: conn.exam[from][0]})
				delete conn.exam[from]
			//db.data.users[msg.sender].ipa += 1,
			//db.data.users[msg.sender].ipasalah += 1
	}, 80000),
			json.a,
			json.b,
			json.c
		]
	}

handler.tags = ['soal']
handler.command = /^soalpkn$/i
handler.help = ['soalpkn']
handler.group = true

export default handler