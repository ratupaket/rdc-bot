let handler =  m => m.reply(`
*[ WEREWOLF GAME ]*

Permainan Sosial Yang Berlangsung Dalam Beberapa Putaran/Ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini

[ *PERAN* ]

*WARGA*
Warga biasa. Peran yang tidak mengetahui siapa lawan, siapa teman. Tugasmu adalah mencari tahu siapa Werewolf yang asli. Hanya dapat mengikuti voting

*WEREWOLF*
Serigala lapar yang setiap malam harus makan orang. Mengetahui siapa saja komplotan serigalanya (jika peran Werewolf lebih dari 1). Dapat memakan 1 warga desa setiap malam.
Saran, sebaiknya peran werewolf ini dibagikan ke minimal 2 orang dalam permainan..

*GUARDIAN*
Malaikat Pelindung. Dapat melindungi satu warga desa dari serangan serigala pada malam hari.

*SEER*
Penerawang. Setiap malam, kamu bisa menerawang satu warga desa untuk dibuka identitas aslinya. 

*SORCERER*
Penyihir jahat yang dapat menerawang antara Serigala dan Seer saja. Dia berkomplot dengan Werewolf untuk mencari tahu siapa Seer yang asli



[ *SIMULASI GAME WEREWOLF* ]

Di sini saya akan beri contoh pada permainan yang dimainkan 8 orang dengan 1 moderator, 2 werewolf, 1 guardian angel, 1 seer, dan 3 villager.

Cara membagikan role pemain ini adalah dengan membagikan kartu dengan cara terbalik. Pemain tidak boleh memperlihatkan kartu mereka kepada pemain lain. Hanya dia dan moderator saja yang boleh tau.

Ketika semua kartu sudah terbagi, moderator menyuruh semua pemain menutup matanya dan secara bergilir membuka mata untuk laporan peran apa yang dia dapat. Setelah laporan selesai permainan pun dimulai.

Permainan dimulai pada malam hari. Moderator meminta semua pemain untuk menutup mata, kemudian menyuruh werewolf untuk memilih siapa yang ingin dibunuh.

Malam telah tiba, semua warga tertidur.

Werewolf silahkan buka mata, pilih siapa yang ingin dibunuh.

Setelah rembukan para werewolf selesai dan sudah terpilih siapa yang ingin dibunuh, moderator akan menyuruh werewolf untuk tutup mata lagi.

Lalu menyuruh para pemeran penting lain untuk memainkan perannya seperti seer dan guardian angel.

Seer buka mata, pilih siapa yang ingin diterawang.

(Kemudian beri kode jari membentuk ‘W’ untuk werewolf dan isyarat tidak untuk bukan werewolf.)

Tutup mata kembali.

Guardian buka mata, pilih siapa yang ingin dilindungi.

(Ini yang akan terlindung, jika werewolf membunuhnya dia tidak akan mati malam itu.)

Guardian silahkan tutup mata kembali.

Setelah semua role yang memiliki kemampuan pada malam hari sudah menggunakan kekuatannya, bergantilah hari menjadi siang untuk berdiskusi siapa werewolfnya.

Matahari telah terbit, semua terbangun dari tidurnya.

Jika guardian tidak berhasil melindungi pemain yang dipilih werewolf pada malam hari untuk dibunuh, maka siangnya dia mati dan keluar dari permainan dengan memperlihatkan kartunya pada pemain lain.

Tadi malam guardian tidak berhasil melindungi warga, dan (nama pemain yang dibunuh) telah mati dibunuh oleh werewolf

Namun, jika guardian berhasil menjaga pemain yang ingin dibunuh maka pada siang hari desa tetap damai tanpa ada yang mati.

Hari yang damai, tidak ada yang terbunuh tadi malam.

Setelah itu, waktunya untuk semua pemain berembuk siapa yang akan digantung hari itu. Namun pada hari pertama jika belum ada yang bisa dicurigai sebagai werewolf, hukuman gantung bisa digugurkan. Ini hanya berlaku pada malam pertama.

Moderator akan memberikan waktu untuk berdiskusi. Jika sudah, mulailah vote yang ingin digantung dengan masing-masing pemain menunjuk 1 pemain lain yang ingin dia gantung.

Pemain yang mendapat vote paling banyak maka dia akan digantung dan keluar dari permainan, kemudian menunjukkan peran apa yang dia dapat.

Jika ada lebih dari 1 pemain dengan vote terbanyak maka selanjutnya mereka akan melakukan pembelaan. Setelah pembelaan selesai vote akan diulang, tapi pemain yang mendapat vote terbanyak tadi tidak boleh ikut vote lagi.

Setelah selesai dan didapat 1 orang yang digantung kemudian hari kembali menjadi malam. Alurnya sama seperti diawal, werewolf, seer, dan guardian beraksi dengan tugasnya masing-masing.

Diakhir permainan jika semua werewolf telah tergantung maka tim baik (seer, guardian, warga) menang. Namun jika jumlah werewolf sudah lebih banyak atau setara dengan tim baik, maka tim jahat menang.

Begitulah cara main werewolf real yang mengasyikkan. Pada dasarnya berapapun role yang dipakai cara yang diterapkan tetap sama, perhatikan saja apa fungsi dari masing-masing role, Kalian juga dapat menerapkan di game virtual.


Selamat bermain!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['wwguide']
handler.tags = ['game']
handler.command = /^wwguide$/i

export default handler