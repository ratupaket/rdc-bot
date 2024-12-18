let handler = async (m, { conn }) => {
	let from = m.chat
		conn.exam = conn.exam ? conn.exam : {}
		if (from in conn.exam) {
			conn.sendMessage(m.chat, { text: 'Silahkan selesaikan permainan terlebih dahulu'}, { quoted: conn.exam[from][0]})
			return false
		}
		let data = [
	{ "soal": "Kerajaan Islam pertama di Indonesia adalah ….",
		"jawaban": "Kerajaan Samudera Pasai.",
		"a": "Kerajaan Majapahit.",
		"b": "Kerajaan Samudera Pasai.",
		"c": "Kerajaan Kutai.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Kerajaan Islam pertama di pulau Jawa adalah Kerajaan Demak, yang didirikan oleh ….",
		"jawaban": "Raden Patah.",
		"a": "Raden Patah.",
		"b": "Balaputradewa.",
		"c": "Hayam Wuruk.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Upaya meningkatkan hasil pertanian dengan mengganti tanaman yang tidak produktif dengan tanaman yang produktif disebut ....",
		"jawaban": "Rehabilitasi pertanian.",
		"a": "Rehabilitasi pertanian.",
		"b": "Intensifikasi pertanian.",
		"c": "Ekstensifikasi pertanian.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Contoh penderitaan bangsa Indonesia pada masa penjajahan Belanda adalah ....",
		"jawaban": "Kerja rodi membangun jalan pos yang menghubungkan Anyer - Panarukan.",
		"a": "Kerja rodi membangun jalan pos yang menghubungkan Anyer - Panarukan.",
		"b": "Kerja romusha membangun jalan dan benteng – benteng pertahanan.",
		"c": "Para pemuda dibentuk barisan – barisan untuk membantu melawan Sekutu.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Perjuangan melawan Jepang di Blitar Selatan dipimpin oleh ....",
		"jawaban": "FX. Supriyadi.",
		"a": "Haji Madriyas.",
		"b": "FX. Supriyadi.",
		"c": "Kiai Haji Zainal Mustafa.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Menjelang proklamasi kemerdekaan para tokoh bangsa bekerja sesuai dengan tugasnya masing – masing. Penyusunan naskah proklamasi dilaksanakan di rumah kediaman Laksamana Maeda Tadashi Jl. Imam Bonjol 1 Jakarta. Penyusun naskah proklamasi dilakukan oleh...",
		"jawaban": "Ir. Sukarno, Moh. Hatta, Mr. Ahmad Subarjo.",
		"a": "Ibu Fatmawati, B.M Diah, Sayuti Melik.",
		"b": "Sukarni, Wikana, Darwis.",
		"c": "Ir. Sukarno, Moh. Hatta, Mr. Ahmad Subarjo.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Wilayah negara Indonesia terdiri dari beribu – ribu pulau, sehingga mendapat sebutan sebagai negara ....",
		"jawaban": "Kepulauan",
		"a": "Maritim.",
		"b": "Zamrud Katulistiwa.",
		"c": "Kepulauan",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Menteri Luar negeri Indonesia yang ikut menandatangani Deklarasi Bangkok adalah ....",
		"jawaban": "Adam Malik.",
		"a": "Adam Malik.",
		"b": "Tun Abdul Razak.",
		"c": "S. Rajaratnam.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Benua yang terluas di bumi adalah ....",
		"jawaban": "Asia.",
		"a": "Asia.",
		"b": "Afrika.",
		"c": "Amerika",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Gunung tertinggi di benua Afrika adalah...",
		"jawaban": "Gunung Kilimanjaro.",
		"a": "Gunung Mount Everest.",
		"b": "Gunung Kinabalu.",
		"c": "Gunung Kilimanjaro.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Salah satu penyebab bencana banjir di Indonesia adalah",
		"jawaban": "Membuang sampah sembarangan.",
		"a": "Ladang berpindah.",
		"b": "Pembuatan sumur – sumur resapan ( biopori ).",
		"c": "Membuang sampah sembarangan.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Pada saat terjadi bencana banjir, tindakan paling tepat yang dapat kita lakukan adalah....",
		"jawaban": "Menyiapkan perahu karet untuk tindakan penyelamatan.",
		"a": "Mengadakan penghijauan di hulu sungai.",
		"b": "Melaksanakan program kali bersih ( prokasih ).",
		"c": "Menyiapkan perahu karet untuk tindakan penyelamatan.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Bantuan kepada korban pasca bencana dilakukan dengan ....",
		"jawaban": "Mengadakan rehabilitasi lingkungan sekitar.",
		"a": "Mengadakan rehabilitasi lingkungan sekitar.",
		"b": "Mendirikan dapur umum.",
		"c": "Mencari bantuan untuk korban bencana.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Salah satu budaya asing yang dapat kita tiru dalam era globalisasi adalah ....",
		"jawaban": "Sikap kerja keras.",
		"a": "Budaya mencontek.",
		"b": "Kebiasaan mengulur – ulur waktu.",
		"c": "Sikap kerja keras.",
		"tingkat": "Sekolah Dasar",
		"type": "Text",
		"link": ""
	},
	{ "soal": "Salah satu manfaat melakukan kegiatan ekspor bagi suatu negara adalah....",
		"jawaban": "Menambah devisa negara.",
		"a": "Mengubah struktur ekonomi dalam negeri.",
		"b": "Mendapatkan barang buatan luar negeri dengan harga murah.",
		"c": "Menambah devisa negara.",
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
handler.command = /^soalips$/i
handler.help = ['soalips']
handler.group = true

export default handler