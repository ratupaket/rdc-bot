let handler = async (m, { conn }) => {
	let from = m.chat
		conn.exam = conn.exam ? conn.exam : {}
		if (from in conn.exam) {
			conn.sendMessage(m.chat, { text: 'Silahkan selesaikan permainan terlebih dahulu'}, { quoted: conn.exam[from][0]})
			return false
		}
		let data = [
	{ "soal": "Cerita fiksi atau imajiner yang bukan kisah nyata dikenal sebagai karya ….",
		"jawaban": "fiksi",
		"a": "fiksi",
		"b": "gerak dasar",
		"c": "gerak berpindah",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Siapkan kertas cokelat, ukur kertas seukuran buku tulis. Kemudian gunting kertas berdasarkan ukuran. Instruksi di atas adalah tata cara untuk melakukan ….",
		"jawaban": "Menyampul buku",
		"a": "Membumbui ayam",
		"b": "Menggoreng ikan",
		"c": "Menyampul buku",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Ibu suka berbelanja di supermarket untuk membeli kebutuhan sehari-hari. Supermarket dapat disebut juga sebagai ....",
		"jawaban": "Toko bahan makanan",
		"a": "Pasar",
		"b": "Warung",
		"c": "Toko bahan makanan",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Manakah dari kalimat berikut ini yang bercerita tentang pengalaman? ....",
		"jawaban": "Minggu lalu saya mengunjungi Candi Prambanan",
		"a": "Minggu lalu saya mengunjungi Candi Prambanan",
		"b": "Adikku menangis karena tak dibelikan mainan baru",
		"c": "Bibi memasak sayuran asam dan tempe goreng",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Penjelasan tentang bagaimana melakukan sesuatu atau tata cara melakukan suatu tindakan disebut sebagai? ....",
		"jawaban": "Instruksi",
		"a": "Deskripsi",
		"b": "sebuah petunjuk",
		"c": "Instruksi",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Hal yang tak kalah penting dalam paragraf adalah...",
		"jawaban": "Ide utama",
		"a": "Ide utama",
		"b": "Hukum",
		"c": "Topiknya",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Seorang anak lelaki yang arogan akan dijauhi oleh teman-temannya. Arogan memiliki arti yang sama dengan .....",
		"jawaban": "besar kepala",
		"a": "mulut besar",
		"b": "murah hati",
		"c": "besar kepala",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Ayat dan kata-kata indah dan menggugah yang sesuai tercantum dalam ....",
		"jawaban": "puisi",
		"a": "cerita",
		"b": "puisi",
		"c": "larik",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Tim penyelamat datang tepat waktu ke tempat banjir. Persamaan dari tempat adalah? ....",
		"jawaban": "lokal",
		"a": "insiden",
		"b": "lokal",
		"c": "waktu",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Di bawah ini manakah yang tidak termasuk kosakata yang berkaitan dengan pertumbuhan dan perkembangan makhluk hidup?...",
		"jawaban": "Mati",
		"a": "Bergerak",
		"b": "Bernapas",
		"c": "Mati",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Orang yang dapat memberikan informasi mengenai suatu kejadian disebut sebagai",
		"jawaban": "narasumber",
		"a": "pewawancara",
		"b": "wartawan",
		"c": "narasumber",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Berikut ini manakah kata tanya yang digunakan untuk wawancara, kecuali....",
		"jawaban": "kemudian",
		"a": "apa",
		"b": "kemudian",
		"c": "siapa",
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
handler.command = /^soalindonesia$/i
handler.help = ['soalindonesia']
handler.group = true

export default handler