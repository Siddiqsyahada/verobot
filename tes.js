const fs = require("fs");

fs.readFile("chatbotData.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error membaca chatbotData.json:", err);
    return;
  }

  try {
    const dataObj = JSON.parse(data);

    const editTerakhir = dataObj["senin"]["edit"][0]; // Ambil tanggal edit terakhir
    const sekarang = new Date();
    const batasHari = 8; // Batas waktu dalam hari

    const tanggalEdit = new Date(editTerakhir);
    tanggalEdit.setDate(tanggalEdit.getDate() + batasHari);

    if (sekarang > tanggalEdit) {
      console.log("Data sudah lebih dari 8 hari.");
      // Tambahkan aksi atau tindakan sesuai kebutuhan Anda di sini
    } else {
      console.log("Data belum lebih dari 8 hari.");
    }
  } catch (error) {
    console.error("Error parsing JSON dari chatbotData.json:", error);
  }
});
