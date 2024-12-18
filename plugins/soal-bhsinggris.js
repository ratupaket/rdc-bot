let handler = async (m, { conn }) => {
	let from = m.chat
		conn.exam = conn.exam ? conn.exam : {}
		if (from in conn.exam) {
			conn.sendMessage(m.chat, { text: 'Silahkan selesaikan permainan terlebih dahulu'}, { quoted: conn.exam[from][0]})
			return false
		}
		let data = [
	{ "soal": "is – this  – fingers – my The correct order is ….",
		"jawaban": "This is my fingers",
		"a": "Is this my fingers",
		"b": "This is fingers my",
		"c": "This is my fingers",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Nose, eye and ear are part of our….",
		"jawaban": "Head",
		"a": "Body",
		"b": "Leg",
		"c": "Head",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Mouth in Indonesian is ....",
		"jawaban": "Mulut",
		"a": "Gigi",
		"b": "Mulut",
		"c": "Lidah",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Whiteboard in Indonesian is ....",
		"jawaban": "Papan tulis putih",
		"a": "Kayu putih",
		"b": "Papan tulis hitam",
		"c": "Papan tulis putih",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "t – e – n – o – w – t – y – e – n The correct word is....",
		"jawaban": "Instruksi",
		"a": "Twenty two",
		"b": "Thirty one",
		"c": "Twenty one",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Forty nine in Indonesian is...",
		"jawaban": "Empat puluh sembilan",
		"a": "Empat puluh sembilan",
		"b": "Sembilan belas",
		"c": "Empat puluh delapan",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "What number is it after forty six ? .....",
		"jawaban": "Forty seven",
		"a": "Forty nine",
		"b": "Forty eight",
		"c": "Forty seven",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Kakak laki-laki in English is  ....",
		"jawaban": "Elder brother",
		"a": "Elder sister ",
		"b": "Elder brother",
		"c": "Little brother",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Ini adalah angka dua puluh tujuh The english sentence is ....",
		"jawaban": "This is number twenty seven",
		"a": "This is number seventeen",
		"b": "This is number twenty seven",
		"c": "This is number seventy",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Animal in Indonesian is ...",
		"jawaban": "Binatang",
		"a": "Buas",
		"b": "Peliharaan",
		"c": "Binatang",
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
handler.command = /^soalinggris$/i
handler.help = ['soalinggris']
handler.group = true

export default handler