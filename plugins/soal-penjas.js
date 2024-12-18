let handler = async (m, { conn }) => {
	let from = m.chat
		conn.exam = conn.exam ? conn.exam : {}
		if (from in conn.exam) {
			conn.sendMessage(m.chat, { text: 'Silahkan selesaikan permainan terlebih dahulu'}, { quoted: conn.exam[from][0]})
			return false
		}
		let data = [
	{ "soal": "Gerak lokomotor yaitu ….",
		"jawaban": "gerak berpindah",
		"a": "gerak sedikit",
		"b": "gerak dasar",
		"c": "gerak berpindah",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Sebelum akan melakukan kegiatan olahraga, sebaiknya dapat melakukan ….",
		"jawaban": "Pemanasan",
		"a": "Lari kecil",
		"b": "Pemanasan",
		"c": "Mengkonsumsi makanan",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Dalam permainan volley, anggota badan yang paling sering untuk digunakan yaitu ....",
		"jawaban": "Tangan",
		"a": "Tangan",
		"b": "Seluruh badan",
		"c": "Kaki",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Gerakan yang dilakukan, tanpa atau hanya sedikit sekali bentuk bergerak pada daerah tumpuannya, adalah pengertian dari jenis gerak ....",
		"jawaban": "Nonlokomoto",
		"a": "Lokomotor",
		"b": "Manipulatif",
		"c": "Nonlokomoto",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Sikap awal dengan berjalan ke depan, yaitu ....",
		"jawaban": "berdiri",
		"a": "duduk",
		"b": "jongkok",
		"c": "berdiri",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Posisi badan, pada saat melakukan jalan cepat yaitu...",
		"jawaban": "tegak",
		"a": "miring",
		"b": "tegak",
		"c": "condong",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Lompat katak, untuk dapat melatih kekuatan dari otot.....",
		"jawaban": "kaki",
		"a": "pinggang",
		"b": "tangan",
		"c": "kaki",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Contoh dari gerak berpindah tempat, yaitu ....",
		"jawaban": "lari",
		"a": "Mengayun",
		"b": "Memutar",
		"c": "lari",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Saat sedang mengayun tangan, pandangan harus ke arah ....",
		"jawaban": "belakang",
		"a": "depan",
		"b": "samping",
		"c": "belakang",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Gerakan lari dan juga menolak, dapat melatih otot...",
		"jawaban": "kaki",
		"a": "kaki",
		"b": "lengan",
		"c": "leher",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Berikut yang termasuk dalam latihan keseimbangan, yaitu",
		"jawaban": "berjalan diatas garis",
		"a": "berjalan diatas garis",
		"b": "lompat tali",
		"c": "guling kedepan",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Posisi badan pada saat sikap awal gerakan kapal terbang, yaitu....",
		"jawaban": "tegak",
		"a": "tegak",
		"b": "lurus",
		"c": "condong",
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
handler.command = /^soalpenjas$/i
handler.help = ['soalpenjas']
handler.group = true

export default handler