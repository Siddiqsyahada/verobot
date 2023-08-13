const fs = require("fs");

function tambahkanTugas(command, m) {
  const dataArray = command.split(" ");
  const mapel = dataArray[2];
  const tugasnya = dataArray.slice(3).join(" ");
  const hariMapelBindo = ["senin", "rabu"];
  const hariMapelMtk = ["rabu", "jumat"];
  let hariTugasnya = "";

  if (mapel === "sejarah" || mapel === "sosiologi" || mapel === "kimia") {
    hariTugasnya = "senin";
    tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
    setTimeout(() => {
  terakhirEdit(hariTugasnya);
}, 2000); // 2000 milidetik sama dengan 2 detik
  } else if (
    mapel === "biologi" ||
    mapel === "informatika" ||
    mapel === "geografi" ||
    mapel === "pjok"
  ) {
    hariTugasnya = "selasa";
    tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
    setTimeout(() => {
  terakhirEdit(hariTugasnya);
}, 2000); // 2000 milidetik sama dengan 2 detik
  } else if (mapel === "bam" || mapel === "pai" || mapel === "senbud") {
    hariTugasnya = "rabu";
    tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
    setTimeout(() => {
  terakhirEdit(hariTugasnya);
}, 2000); // 2000 milidetik sama dengan 2 detik
  } else if (
    mapel === "bk" ||
    mapel === "b.inggris" ||
    mapel === "fisika" ||
    mapel === "paq"
  ) {
    hariTugasnya = "kamis";
    tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
    setTimeout(() => {
  terakhirEdit(hariTugasnya);
}, 2000); // 2000 milidetik sama dengan 2 detik
  } else if (mapel === "ekonomi" || mapel === "ppkn") {
    hariTugasnya = "jumat";
    tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
    setTimeout(() => {
  terakhirEdit(hariTugasnya);
}, 2000); // 2000 milidetik sama dengan 2 detik
  } else if (mapel === "b.indo") {
    tambahkanStringKeData(tugasnya, mapel, hariMapelBindo);
    setTimeout(() => {
  terakhirEdit(hariTugasnya);
}, 2000); // 2000 milidetik sama dengan 2 detik
  } else if (mapel === "mtk") {
    tambahkanStringKeData(tugasnya, mapel, hariMapelMtk);
    setTimeout(() => {
  terakhirEdit(hariTugasnya);
}, 2000); 
  } else {
    m.reply(
      `tidak ditemukan mapel ${mapel} dalam data, mohon masukkan nama mapel yang valid`
    );
  }

  function tambahkanStringKeData(dataTugas, mapelnya, hariTugas) {
    fs.readFile("chatbotData.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error membaca chatbotData.json:", err);
        return;
      }

      try {
        const dataObj = JSON.parse(data);

        if (Array.isArray(hariTugas)) {
          dataObj[hariTugas[0]][mapelnya].push(dataTugas);
          dataObj[hariTugas[1]][mapelnya].push(dataTugas);
        } else {
          dataObj[hariTugas][mapelnya].push(dataTugas);
        }
        // Tulis kembali data ke data.json
        fs.writeFile(
          "chatbotData.json",
          JSON.stringify(dataObj, null, 2),
          (err) => {
            if (err) {
              console.error("Error menulis ke chatbotData.json:", err);
            } else {
              m.reply(
                `Data tugas yaitu ${tugasnya} untuk mapel ${mapel} berhasil ditambahkan`
              );
            }
          }
        );
      } catch (error) {
        console.error("Error parsing JSON dari chatbotData.json:", error);
      }
    });
  }
}

// remove tugas dari hari

function removeTugasHari(command, nomorPengirim) {
  if (
    nomorPengirim.toString() !== "62895602585445" &&
    nomorPengirim.toString() !== "6283199300410" &&
    nomorPengirim.toString() !== "6289621698190"
  ) {
    m.reply("maaf anda tidak memiliki wewenang untuk menghapus tugas");
  } else {
    const commandArray = command.split(" ");
    const harinya = commandArray[3];

    if (
      harinya !== "senin" &&
      harinya !== "selasa" &&
      harinya !== "rabu" &&
      harinya !== "kamis" &&
      harinya !== "jumat" &&
      harinya !== "sabtu" &&
      harinya !== "minggu" 
    ) {
      m.reply(
        `tidak ditemukan hari ${harinya} dalam data, mohon masukkan nama hari yang valid`
      );
    } else {
      hapusDataJSON(harinya);
    }

    function hapusDataJSON(hari) {
      fs.readFile("chatbotData.json", "utf8", (err, data) => {
        if (err) {
          console.error("Error membaca file JSON:", err);
          return;
        }

        try {
          let objekData = JSON.parse(data);

          Object.keys(objekData[hari]).forEach((key) => {
            objekData[hari][key] = [];
          });
          // Tulis kembali objekData yang telah dimodifikasi ke file JSON
          fs.writeFile(
            "chatbotData.json",
            JSON.stringify(objekData, null, 2),
            (err) => {
              if (err) {
                console.error("Error menulis ke file JSON:", err);
              } else {
                m.reply("Data tugas berhasil dihapus dari hari " + hari);
              }
            }
          );
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      });
    }
  }
}

// function hapus mapel
function removeTugasMapel(command, nomorPengirim) {
  if (
    nomorPengirim.toString() !== "62895602585445" &&
    nomorPengirim.toString() !== "6283199300410" &&
    nomorPengirim.toString() !== "6289621698190"
  ) {
    m.reply("maaf anda tidak memiliki wewenang untuk menghapus tugas");
  } else {
    const dataArray = command.split(" ");
    const mapel = dataArray[3];
    const tugasnya = dataArray.slice(4).join(" ");
    const hariMapelBindo = ["senin", "rabu"];
    const hariMapelMtk = ["rabu", "jumat"];
    let hariTugasnya = "";

    if (mapel === "sejarah" || mapel === "sosiologi" || mapel === "kimia") {
      hariTugasnya = "senin";
      tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
      setTimeout(() => {
        terakhirEdit(hariTugasnya);
      }, 2000); 
    } else if (
      mapel === "biologi" ||
      mapel === "informatika" ||
      mapel === "geografi" ||
      mapel === "pjok"
    ) {
      hariTugasnya = "selasa";
      tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
      setTimeout(() => {
        terakhirEdit(hariTugasnya);
      }, 2000); 
    } else if (mapel === "bam" || mapel === "pai" || mapel === "senbud") {
      hariTugasnya = "rabu";
      tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
      setTimeout(() => {
        terakhirEdit(hariTugasnya);
      }, 2000); 
    } else if (
      mapel === "bk" ||
      mapel === "b.inggris" ||
      mapel === "fisika" ||
      mapel === "paq"
    ) {
      hariTugasnya = "kamis";
      tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
      setTimeout(() => {
        terakhirEdit(hariTugasnya);
      }, 2000); 
    } else if (mapel === "ekonomi" || mapel === "ppkn") {
      hariTugasnya = "jumat";
      tambahkanStringKeData(tugasnya, mapel, hariTugasnya);
      setTimeout(() => {
        terakhirEdit(hariTugasnya);
      }, 2000); 
    } else if (mapel === "b.indo") {
      tambahkanStringKeData(tugasnya, mapel, hariMapelBindo);
      setTimeout(() => {
        terakhirEdit(hariTugasnya);
      }, 2000); 
    } else if (mapel === "mtk") {
      tambahkanStringKeData(tugasnya, mapel, hariMapelMtk);
      setTimeout(() => {
        terakhirEdit(hariTugasnya);
      }, 2000); 
    } else {
      m.reply(
        `tidak ditemukan mapel ${mapel} dalam data, mohon masukkan nama mapel yang valid`
      );
    }
    function tambahkanStringKeData(dataTugas, mapelnya, hariTugas) {
      fs.readFile("chatbotData.json", "utf8", (err, data) => {
        if (err) {
          console.error("Error membaca chatbotData.json:", err);
          return;
        }

        try {
          const dataObj = JSON.parse(data);

          if (Array.isArray(hariTugas)) {
            dataObj[hariTugas[0]][mapelnya] = [];
            dataObj[hariTugas[1]][mapelnya] = [];
          } else {
            dataObj[hariTugas][mapelnya] = [];
          }
          // Tulis kembali data ke data.json
          fs.writeFile(
            "chatbotData.json",
            JSON.stringify(dataObj, null, 2),
            (err) => {
              if (err) {
                console.error("Error menulis ke chatbotData.json:", err);
              } else {
                m.reply(`berhsil menghapus tugas dari mapel ${mapelnya}`);
              }
            }
          );
        } catch (error) {
          console.error("Error parsing JSON dari chatbotData.json:", error);
        }
      });
    }
  }
}

// tampilkan tugas

function tampilkanTugasHari(command, m) {
  const commandArray = command.split(" ");
  const harinya = commandArray[2];

  if (
    harinya !== "senin" &&
    harinya !== "selasa" &&
    harinya !== "rabu" &&
    harinya !== "kamis" &&
    harinya !== "jumat" &&
    harinya !== "sabtu" &&
    harinya !== "minggu"
  ) {
    m.reply(
      `tidak ditemukan hari ${harinya} dalam data, mohon masukkan nama hari yang valid`
    );
  } else {
    tampilkanTugas(harinya);
  }

  function tampilkanTugas(hari) {
    fs.readFile("chatbotData.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error membaca file JSON:", err);
        return;
      }

      try {
        let objekData = JSON.parse(data);
        let hasilPerubahan = "";
        let adaTugas = false;

        if (objekData.hasOwnProperty(hari)) {
          hasilPerubahan += `Daftar tugas di hari ${hari}:\n`;
          for (const mapel in objekData[hari]) {
            if (objekData[hari].hasOwnProperty(mapel)) {
              let nilai = objekData[hari][mapel];
              if (nilai.length === 0) {
                nilai = "-";
              } else {
                adaTugas = true;
              }
              hasilPerubahan += `${mapel}: ${nilai}\n`;
            }
          }
        } else {
          hasilPerubahan = `Data untuk ${hari} tidak ditemukan.`;
        }
        const tampilTugas = hasilPerubahan;

        if (!adaTugas) {
          m.reply("Tidak ada tugas untuk hari " + hari);
        } else {
          m.reply(tampilTugas);
        }
        // Tulis kembali objekData yang telah dimodifikasi ke file JSON
        fs.writeFile(
          "chatbotData.json",
          JSON.stringify(objekData, null, 2),
          (err) => {
            if (err) {
              console.error("Error menulis ke file JSON:", err);
            } else {
            }
          }
        );
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  }
}

function tampilkanTugasSemuaHari(command, m) {
  const commandArray = command.split(" ");
  const harinya = commandArray[2];
  tampilkanTugas("senin");

  function tampilkanTugas(hari) {
    fs.readFile("chatbotData.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error membaca file JSON:", err);
        return;
      }

      try {
        let objekData = JSON.parse(data);
        let hasilPerubahan = "";
        let adaTugas = false;

        for (const hari in objekData) {
          if (objekData.hasOwnProperty(hari)) {
            hasilPerubahan += `Daftar tugas di hari ${hari}:\n`;
            for (const mapel in objekData[hari]) {
              if (objekData[hari].hasOwnProperty(mapel)) {
                let nilai = objekData[hari][mapel];
                if (nilai.length === 0) {
                  nilai = "-";
                } else {
                  adaTugas = true;
                }
                hasilPerubahan += `${mapel}: ${nilai}\n`;
              }
            }
            hasilPerubahan += "\n";
          }
        }
        const tampilTugas = hasilPerubahan;

        if (!adaTugas) {
          m.reply("Tidak ada tugas untuk hari " + hari);
        } else {
          m.reply(
            `Berikut adalah data tugas untuk semua hari :\n${tampilTugas}`
          );
        }
        // Tulis kembali objekData yang telah dimodifikasi ke file JSON
        fs.writeFile(
          "chatbotData.json",
          JSON.stringify(objekData, null, 2),
          (err) => {
            if (err) {
              console.error("Error menulis ke file JSON:", err);
            } else {
            }
          }
        );
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  }
}

function terakhirEdit(harii) {
  const sekarang = new Date();
  const tahun = sekarang.getFullYear();
  const bulan = String(sekarang.getMonth() + 1).padStart(2, "0");
  const tanggal = String(sekarang.getDate()).padStart(2, "0");
  const detik = String(sekarang.getSeconds()).padStart(2, "0");

  const tanggalFormatSekarang = `${tahun}-${bulan}-${tanggal}`;

  tambahkanStringKeData(harii);

  function tambahkanStringKeData(hariTugass) {
    fs.readFile("chatbotData.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error membaca chatbotData.json:", err);
        return;
      }

      try {
        const dataObj = JSON.parse(data);

        dataObj[hariTugass]['edit'] = [];
        dataObj[hariTugass]['edit'].push(tanggalFormatSekarang);

        // Tulis kembali data ke data.json
        fs.writeFile(
          "chatbotData.json",
          JSON.stringify(dataObj, null, 2),
          (err) => {
            if (err) {
              console.error("Error menulis ke chatbotData.json:", err);
            } else {
              console.log("berhasil");
            }
          }
        );
      } catch (error) {
        console.error("Error parsing JSON dari chatbotData.json:", error);
      }
    });
  }
}

function cekBatasHariTugas() {
  const sekarang = new Date();

  const namaHari = [
    "minggu",
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
  ];

  const hariIni = namaHari[sekarang.getDay()];

  switch (hariIni) {
    case "senin":
    case "selasa":
    case "rabu":
    case "kamis":
    case "jumat":
    case "sabtu":
    case "minggu":
      hapusDataJSON(hariIni);
      break;
    default:
      // Tidak ada tindakan yang diambil untuk hari lain
      break;
  }

  function hapusDataJSON(hari) {
    fs.readFile("chatbotData.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error membaca file JSON:", err);
        return;
      }

      try {
        let objekData = JSON.parse(data);

        Object.keys(objekData[hari]).forEach((key) => {
          objekData[hari][key] = [];
        });
        // Tulis kembali objekData yang telah dimodifikasi ke file JSON
        fs.writeFile(
          "chatbotData.json",
          JSON.stringify(objekData, null, 2),
          (err) => {
            if (err) {
              console.error("Error menulis ke file JSON:", err);
            } else {
              m.reply("Data tugas berhasil dibersihkan dari hari " + hari);
            }
          }
        );
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  }
}

module.exports = {
  tambahkanTugas,
  removeTugasHari,
  removeTugasMapel,
  tampilkanTugasHari,
  tampilkanTugasSemuaHari,cekBatasHariTugas
};
