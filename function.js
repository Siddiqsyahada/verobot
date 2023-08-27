function umurSaatIni(tanggalLahir, nama) {
  const currentDate = new Date();
  const birthDate = new Date(tanggalLahir);
  const umur = currentDate - birthDate;
  const years = Math.floor(umur / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(umur / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(umur / (1000 * 60 * 60 * 24));
  const hours = Math.floor(umur / (1000 * 60 * 60));
  const minutes = Math.floor(umur / (1000 * 60));
  const seconds = Math.floor(umur / 1000);

  const ambilTanggalLahir = tanggalLahir.split(" ").join(" ");
  m.reply(
    `Berikut adalah rincian umur ${nama} saat ini:\nTanggal Lahir: ${ambilTanggalLahir}\nTahun: ${years}\nBulan: ${months}\nHari: ${days}\nJam: ${hours}\nMenit: ${minutes}\nDetik: ${seconds}\n\nJadi umur ${nama} sekarang adalah ${years} tahun.`
  );
}

module.exports = {umurSaatIni}