const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { Configuration, OpenAIApi } = require("openai");
const puppeteer = require("puppeteer");
let setting = require("./key.json");
const { snakeCase, random, result } = require("lodash");
const { default: axios } = require("axios");
const kataKasar = require("./DataChat/kataKasar");
const jokes = require("./DataChat/jokesCringe");
const gombalan = require("./DataChat/gombalan");
const menu = require("./DataChat/menu");
const note = require("./DataChat/note");
const siddiq = require("./DataChat/siddiq");
const lelucon = require("./DataChat/lelucon");
const siswaKelas94 = require("./DataChat/siswaKelas94");
const greetings = require("./DataChat/sapa");
const jokesGelap = require("./DataChat/jokesGelap");
const { error } = require("console");
const moment = require("moment");
const {
  tambahkanTugas,
  removeTugasMapel,
  removeTugasHari,
  tampilkanTugasHari,
  tampilkanTugasSemuaHari,
  cekBatasHariTugas,
} = require("./tugasHandler");
const { header } = require("request/lib/hawk");

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

currentDate = new Date();

const memeImages = [
  "./DataMeme/meme (1).jpg",
  "./DataMeme/meme (2).jpg",
  "./DataMeme/meme (3).jpg",
  "./DataMeme/meme (4).jpg",
  "./DataMeme/meme (5).jpg",
  "./DataMeme/meme (6).jpg",
  "./DataMeme/meme (7).jpg",
  "./DataMeme/meme (8).jpg",
  "./DataMeme/meme (9).jpg",
  "./DataMeme/meme (10).jpg",
  "./DataMeme/meme (11).jpg",
  "./DataMeme/meme (12).jpg",
  "./DataMeme/meme (13).jpg",
  "./DataMeme/meme (14).jpg",
  "./DataMeme/meme (15).jpg",
  "./DataMeme/meme (16).jpg",
  "./DataMeme/meme (17).jpg",
  "./DataMeme/meme (18).jpg",
  "./DataMeme/meme (19).jpg",
  "./DataMeme/meme (20).jpg",
  "./DataMeme/meme (21).jpg",
  "./DataMeme/meme (22).jpg",
  "./DataMeme/meme (23).jpg",
  "./DataMeme/meme (24).jpg",
  "./DataMeme/meme (25).jpg",
  "./DataMeme/meme (26).jpg",
  "./DataMeme/meme (27).jpg",
  "./DataMeme/meme (28).jpg",
  "./DataMeme/meme (29).jpg",
  "./DataMeme/meme (30).jpg",
  "./DataMeme/meme (31).jpg",
  "./DataMeme/meme (32).jpg",
  "./DataMeme/meme (33).jpg",
  "./DataMeme/meme (34).jpg",
  "./DataMeme/meme (35).jpg",
  "./DataMeme/meme (36).jpg",
  "./DataMeme/meme (37).jpg",
  "./DataMeme/meme (38).jpg",
  "./DataMeme/meme (39).jpg",
  "./DataMeme/meme (40).jpg",
  "./DataMeme/meme (41).jpg",
  "./DataMeme/meme (42).jpg",
  "./DataMeme/meme (43).jpg",
  "./DataMeme/meme (44).jpg",
  "./DataMeme/meme (45).jpg",
  "./DataMeme/meme (46).jpg",
  "./DataMeme/meme (47).jpg",
  "./DataMeme/meme (48).jpg",
  "./DataMeme/meme (49).jpg",
  "./DataMeme/meme (50).jpg",
  "./DataMeme/meme (51).jpg",
  "./DataMeme/meme (52).jpg",
  "./DataMeme/meme (53).jpg",
  "./DataMeme/meme (54).jpg",
  "./DataMeme/meme (55).jpg",
  "./DataMeme/meme (56).jpg",
  "./DataMeme/meme (57).jpg",
  "./DataMeme/meme (58).jpg",
  "./DataMeme/meme (59).jpg",
  "./DataMeme/meme (60).jpg",
  "./DataMeme/meme (61).jpg",
  "./DataMeme/meme (62).jpg",
  "./DataMeme/meme (63).jpg",
  "./DataMeme/meme (64).jpg",
  "./DataMeme/meme (65).jpg",
  "./DataMeme/meme (66).jpg",
  "./DataMeme/meme (67).jpg",
  "./DataMeme/meme (68).jpg",
  "./DataMeme/meme (69).jpg",
  "./DataMeme/meme (70).jpg",
  "./DataMeme/meme (71).jpg",
  "./DataMeme/meme (72).jpg",
  "./DataMeme/meme (73).jpg",
  "./DataMeme/meme (74).jpg",
  "./DataMeme/meme (75).jpg",
  "./DataMeme/meme (76).jpg",
  "./DataMeme/meme (77).jpg",
  "./DataMeme/meme (78).jpg",
  "./DataMeme/meme (79).jpg",
  "./DataMeme/meme (80).jpg",
  "./DataMeme/meme (81).jpg",
  "./DataMeme/meme (82).jpg",
  "./DataMeme/meme (83).jpg",
  "./DataMeme/meme (84).jpg",
  "./DataMeme/meme (85).jpg",
  "./DataMeme/meme (86).jpg",
  "./DataMeme/meme (87).jpg",
  "./DataMeme/meme (88).jpg",
  "./DataMeme/meme (89).jpg",
  "./DataMeme/meme (90).jpg",
  "./DataMeme/meme (91).jpg",
  "./DataMeme/meme (92).jpg",
  "./DataMeme/meme (93).jpg",
  "./DataMeme/meme (94).jpg",
  "./DataMeme/meme (95).jpg",
  "./DataMeme/meme (96).jpg",
  "./DataMeme/meme (97).jpg",
  "./DataMeme/meme (98).jpg",
  "./DataMeme/meme (99).jpg",
  "./DataMeme/meme (100).jpg",
  "./DataMeme/meme (101).jpg",
  "./DataMeme/meme (102).jpg",
  "./DataMeme/meme (103).jpg",
  "./DataMeme/meme (104).jpg",
  "./DataMeme/meme (105).jpg",
  "./DataMeme/meme (106).jpg",
  "./DataMeme/meme (107).jpg",
  "./DataMeme/meme (108).jpg",
  "./DataMeme/meme (109).jpg",
  "./DataMeme/meme (110).jpg",
  "./DataMeme/meme (111).jpg",
  "./DataMeme/meme (112).jpg",
  "./DataMeme/meme (113).jpg",
  "./DataMeme/meme (114).jpg",
  "./DataMeme/meme (115).jpg",
  "./DataMeme/meme (116).jpg",
  "./DataMeme/meme (117).jpg",
  "./DataMeme/meme (118).jpg",
  "./DataMeme/meme (119).jpg",
  "./DataMeme/meme (120).jpg",
  "./DataMeme/meme (121).jpg",
  "./DataMeme/meme (122).jpg",
  "./DataMeme/meme (123).jpg",
  "./DataMeme/meme (124).jpg",
  "./DataMeme/meme (125).jpg",
  "./DataMeme/meme (126).jpg",
  "./DataMeme/meme (127).jpg",
  "./DataMeme/meme (128).jpg",
  "./DataMeme/meme (129).jpg",
  "./DataMeme/meme (130).jpg",
  "./DataMeme/meme (131).jpg",
  "./DataMeme/meme (132).jpg",
  "./DataMeme/meme (133).jpg",
  "./DataMeme/meme (134).jpg",
  "./DataMeme/meme (135).jpg",
  "./DataMeme/meme (136).jpg",
  "./DataMeme/meme (137).jpg",
  "./DataMeme/meme (138).jpg",
  "./DataMeme/meme (139).jpg",
  "./DataMeme/meme (140).jpg",
  "./DataMeme/meme (141).jpg",
  "./DataMeme/meme (142).jpg",
  "./DataMeme/meme (143).jpg",
  "./DataMeme/meme (144).jpg",
  "./DataMeme/meme (145).jpg",
  "./DataMeme/meme (146).jpg",
  "./DataMeme/meme (147).jpg",
  "./DataMeme/meme (148).jpg",
  "./DataMeme/meme (149).jpg",
  "./DataMeme/meme (150).jpg",
  "./DataMeme/meme (151).jpg",
  "./DataMeme/meme (152).jpg",
  "./DataMeme/meme (153).jpg",
  "./DataMeme/meme (154).jpg",
  "./DataMeme/meme (155).jpg",
  "./DataMeme/meme (156).jpg",
  "./DataMeme/meme (157).jpg",
  "./DataMeme/meme (158).jpg",
  "./DataMeme/meme (159).jpg",
  "./DataMeme/meme (160).jpg",
  "./DataMeme/meme (161).jpg",
  "./DataMeme/meme (162).jpg",
  "./DataMeme/meme (163).jpg",
  "./DataMeme/meme (164).jpg",
  "./DataMeme/meme (165).jpg",
  "./DataMeme/meme (166).jpg",
  "./DataMeme/meme (167).jpg",
  "./DataMeme/meme (168).jpg",
  "./DataMeme/meme (169).jpg",
  "./DataMeme/meme (170).jpg",
  "./DataMeme/meme (171).jpg",
  "./DataMeme/meme (172).jpg",
  "./DataMeme/meme (173).jpg",
  "./DataMeme/meme (174).jpg",
  "./DataMeme/meme (175).jpg",
  "./DataMeme/meme (176).jpg",
  "./DataMeme/meme (177).jpg",
  "./DataMeme/meme (178).jpg",
  "./DataMeme/meme (179).jpg",
  "./DataMeme/meme (180).jpg",
  "./DataMeme/meme (181).jpg",
  "./DataMeme/meme (182).jpg",
  "./DataMeme/meme (183).jpg",
  "./DataMeme/meme (184).jpg",
  "./DataMeme/meme (185).jpg",
  "./DataMeme/meme (186).jpg",
  "./DataMeme/meme (187).jpg",
  "./DataMeme/meme (188).jpg",
  "./DataMeme/meme (189).jpg",
  "./DataMeme/meme (190).jpg",
  "./DataMeme/meme (191).jpg",
  "./DataMeme/meme (192).jpg",
  "./DataMeme/meme (193).jpg",
  "./DataMeme/meme (194).jpg",
  "./DataMeme/meme (195).jpg",
  "./DataMeme/meme (196).jpg",
  "./DataMeme/meme (197).jpg",
  "./DataMeme/meme (198).jpg",
  "./DataMeme/meme (199).jpg",
  "./DataMeme/meme (200).jpg",
  "./DataMeme/meme (201).jpg",
  "./DataMeme/meme (202).jpg",
  "./DataMeme/meme (203).jpg",
  "./DataMeme/meme (204).jpg",
  "./DataMeme/meme (205).jpg",
  "./DataMeme/meme (206).jpg",
];
function getRandomIndex() {
  return Math.floor(Math.random() * memeImages.length);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * kataKasar.length) + 1;
}

module.exports = sansekai = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().toLowerCase();
    const args = body.replace(prefix, "").trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = Array.isArray(args) ? args.join(" ") : "");
    const arg = args;
    // const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
    const groupMetadata = m.isGroup
      ? await client.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`)
      );
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
      var namaPengirim = pushname;
    }

    // command untuk google search
    if (command.includes("google")) {
      const puppeteer = require("puppeteer");
      async function searchOnGoogle(searchKeyword) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const encodedKeyword = encodeURIComponent(searchKeyword);
        const searchUrl = `https://www.google.com/search?q=${encodedKeyword}`;

        await page.goto(searchUrl);

        // Tambahkan penanganan interaksi lainnya di sini, misalnya mengambil hasil pencarian.
        const searchResults = await page.evaluate(() => {
          const results = [];
          const searchElements = document.querySelectorAll(".tF2Cxc");
          searchElements.forEach((el) => {
            const title = el.querySelector(".DKV0Md").innerText;
            const url = el.querySelector(".yuRUbf a").href;
            results.push({ title, url });
          });
          return results;
        });

        const resultString = searchResults
          .map((result, index) => {
            return `${index + 1}. ${result.title}\n   ${result.url}`;
          })
          .join("\n");
        m.reply("Hasil pencarian:\n" + resultString);
        await browser.close();
      }

      searchOnGoogle(command);
    } else if (command.includes("jadwal shalat")) {
      const commandArray = command.split(" ");
      const kota = commandArray.slice(2).join(" ");
      const isHariIni = commandArray.slice(2).join(" ");
      let link = ``;
      let respon = "";
      const sekarang = new Date();
      const tahun = sekarang.getFullYear();
      const bulan = String(sekarang.getMonth() + 1).padStart(2, "0");
      const tanggal = String(sekarang.getDate()).padStart(2, "0");

      const tanggalFormat = `${tahun}-${bulan}-${tanggal}`;

      if (isHariIni.includes("hari ini")) {
        link = `https://api.banghasan.com/sholat/format/JSON/jadwal/kota/580/tanggal/${tanggalFormat}`;
      } else {
        m.reply("masukkan format /jadwal shalat hari ini");
      }
      var request = require("request");

      request(
        `https://api.banghasan.com/sholat/format/JSON/jadwal/kota/580/tanggal/${tanggalFormat}`,
        function (error, response, body) {
          const data = JSON.parse(body);
          respon = data.jadwal.data;
          m.reply(
            `Jadwal shalat Kota Padang,${respon.tanggal} :\nImsak : ${respon.imsak}\nTerbit : ${respon.terbit}\nSubuh : ${respon.subuh}\nDzuhur : ${respon.dzuhur}\nAshar : ${respon.ashar}\nmaghrib : ${respon.maghrib}\nIsya : ${respon.isya}`
          );
        }
      );
    } else if (command.includes("tambahan tugas")) {
      const dataArray = command.split(" ");
      const hariTugas = dataArray[2];
      const tugasnya = dataArray.slice(3).join(" ");

      if (
        hariTugas !== "senin" &&
        hariTugas !== "selasa" &&
        hariTugas !== "rabu" &&
        hariTugas !== "kamis" &&
        hariTugas !== "jumat"
      ) {
        m.reply(
          `tidak ditemukan hari ${hariTugas} dalam data, mohon masukkan nama hari yang valid`
        );
      } else {
        tambahkanStringKeData(tugasnya, hariTugas);
      }

      function tambahkanStringKeData(dataTugas, hari) {
        fs.readFile("chatbotData.json", "utf8", (err, data) => {
          if (err) {
            console.error("Error membaca chatbotData.json:", err);
            return;
          }

          try {
            const dataObj = JSON.parse(data);

            dataObj[hari]["tambahan"].push(dataTugas);

            // Tulis kembali data ke data.json
            fs.writeFile(
              "chatbotData.json",
              JSON.stringify(dataObj, null, 2),
              (err) => {
                if (err) {
                  console.error("Error menulis ke chatbotData.json:", err);
                } else {
                  m.reply(
                    `Tambahan tugas yaitu ${tugasnya} untuk hari ${hariTugas} berhasil ditambahkan`
                  );
                }
              }
            );
          } catch (error) {
            console.error("Error parsing JSON dari chatbotData.json:", error);
          }
        });
      }
    } else if (command.includes("add tugas")) {
      tambahkanTugas(command, m);
    } else if (command.includes("remove tugas hari")) {
      removeTugasHari(command, m.sender.replace("@s.whatsapp.net", ""));
    } else if (command.includes("remove tugas mapel")) {
      removeTugasMapel(command, m.sender.replace("@s.whatsapp.net", ""));
    } else if (command.includes("tugas hari")) {
      tampilkanTugasHari(command, m);
    } else if (command.includes("semua tugas")) {
      tampilkanTugasSemuaHari(command, m);
    }
    // command calculator jodoh
    else if (command.includes("jodoh")) {
      const nama = command.split(" ");

      const options = {
        method: "GET",
        url: "https://love-calculator.p.rapidapi.com/getPercentage",
        params: {
          sname: nama[1],
          fname: nama[3],
        },
        headers: {
          "X-RapidAPI-Key":
            "3821ab94c3msh76f6c39cfce22fep19a688jsn3c8bd46426c9",
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        const percentage = parseInt(response.data.percentage);
        console.log(percentage);
        let hasilKeserasian = "";
        if (percentage >= 90) {
          hasilKeserasian = "waww kalian berdua adalah pasangan yg cocok❤️";
        } else if (percentage >= 50 && percentage <= 90) {
          hasilKeserasian =
            "Nilai yg cukup bagus,jangan lupa menerima kelebihan dan kekurangan satu sama lain ya";
        } else if (percentage <= 50) {
          hasilKeserasian =
            "mungkin kalian berdua butuh mencari yang lebih baik,semangat🤗";
        } else {
          console.log(error);
        }
        m.reply(
          `keserasian antara jodoh ${response.data.sname} dan ${response.data.fname} adalah ${response.data.percentage}%.${hasilKeserasian}`
        );
      } catch (error) {
        console.error(error);
      }
    }

    // command untuk zodiak
    else if (command.includes("zodiak")) {
      const commandArray = command.split(" ");
      const zodiak1 = commandArray[1];
      const zodiak2 = commandArray[3];

      const options = {
        method: "GET",
        url: "https://horoscope-astrology.p.rapidapi.com/affinity",
        params: {
          sign1: zodiak1,
          sign2: zodiak2,
        },
        headers: {
          "X-RapidAPI-Key":
            "3821ab94c3msh76f6c39cfce22fep19a688jsn3c8bd46426c9",
          "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
        },
      };

      try {
        let hasil = "";
        const response = await axios.request(options);
        const data = response.data[0];

        data.forEach((obj) => {
          const header = obj.header;
          const text = obj.text;

          hasil.push(header);
          hasil.push(text);
        });
        console.log(hasil);
      } catch (error) {
        console.error(error);
      }
    }
    //command untuk download mp3 youtube
    else if (command.includes("youtube") && command.includes("mp3")) {
      function extractIdFromText(text) {
        const regex = /\((.*?)\)/;
        const match = text.match(regex);

        if (match && match.length >= 2) {
          const id = match[1];
          return id;
        } else {
          return null;
        }
      }
      const idYoutube = extractIdFromText(command);

      const options = {
        method: "GET",
        url: "https://youtube-mp3-download1.p.rapidapi.com/dl",
        params: { id: idYoutube, return: 1 },
        headers: {
          "X-RapidAPI-Key":
            "3821ab94c3msh76f6c39cfce22fep19a688jsn3c8bd46426c9",
          "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        m.reply(
          `Berikut adalah link untuk video dengan id ${idYoutube} : ${response.data.link}`
        );
      } catch (error) {
        console.error(error);
      }
    }
    // command quote random
    else if (command.includes("quote") && command.includes("random")) {
      axios
        .get(`https://www.jcquotes.com/api/quotes/random`)
        .then((response) => {
          m.reply(response.data.text);
        });
    }
    // command mengetahui waktu di negara tertentu
    else if (
      command.includes("waktu") &&
      command.includes("negara") &&
      command.includes("di")
    ) {
      const waktuNegara = command.split(" ");

      const negara = waktuNegara[3];
      axios
        .get(
          `https://timezone.abstractapi.com/v1/current_time/?api_key=d9112eb8ee0a444aafb0ceb26cfe67ec&location=${negara}`
        )
        .then((response) => {
          const timeCountry = response.data.datetime.split(" ");
          m.reply(
            `waktu saat ini di ${negara} adalah :\nTanggal : ${timeCountry[0]}\nJam : ${timeCountry[1]}\nTimezone name : ${response.data.timezone_name}\nTimezone Location : ${response.data.timezone_location}(${response.data.timezone_abbreviation})\nLatitude dan longitude : ${response.data.latitude},${response.data.longitude}`
          );
        })
        .catch((error) => {
          m.reply(error);
        });
    }
    // command prediksi usia
    else if (command.includes("prediksi") && command.includes("usia")) {
      const name = command.split(" ");
      axios.get(`https://api.agify.io?name=${name[2]}`).then((response) => {
        m.reply(
          `Perkiraan usia dengan nama ${response.data.name} adalah ${response.data.age}`
        );
      });
    }
    // command untuk cuaca
    else if (command.includes("cuaca")) {
      const params = {
        access_key: "15cf0a5a760b81c7401c78a4eba2781f",
        query: "Padang",
      };

      axios
        .get("https://api.weatherstack.com/current", { params })
        .then((response) => {
          const apiResponse = response.data.request;
          console.log(
            `Current temperature in ${response.data} is ${apiResponse}℃`
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (command.includes("jokes random")) {
      function leluconRandom() {
        return Math.floor(Math.random() * lelucon.length) + 1;
      }
      var randomLelucon = leluconRandom();
      if (randomLelucon >= 1 && randomLelucon <= lelucon.length) {
        m.reply(lelucon[randomLelucon - 1]);
      } else {
        m.reply("error");
      }
    } else if (isCmd2) {
      let hint;
      const animals = [
        "kucing",
        "anjing",
        "singa",
        "gajah",
        "babi",
        "ular",
        "ayam",
        "bebek",
        "monyet",
        "burung",
        "chetah",
        "harimau",
        "serigala",
        "kalajengking",
        "semut",
        "elang",
        "koala",
        "ikan",
        "jerapah",
        "orangutan",
        "gorila",
      ];
      switch (command) {
        case "help":
        case "menu":
          m.reply(menu[0]);
          break;
        case "haii":
        case "hello":
        case "hai":
        case "haii vero":
        case "hallo vero":
        case "halo vero":
        case "haii AI":
        case "hai salam kenal":
        case "hei":
        case "heii":
          function generateRandomSapa() {
            return Math.floor(Math.random() * greetings.length) + 1;
          }
          var randomSapa = generateRandomSapa();
          if (randomSapa >= 1 && randomSapa <= 15) {
            m.reply(greetings[randomSapa - 1]);
          } else {
            m.reply("error");
          }
          break;
        case "note":
          m.reply(note.catatanBot[0]);
          break;
        case "note fitur tugas":
          m.reply(note.catatanTugas[0]);
          break;
        case "curhatandev2.0":
          m.reply(
            `*Berikut adalah curhatan siddiq selaku developer dan pengembang botnya saat update v2.0:*\nwahh gilakk,pusing banget ngerjain updatenya,aku ngabisin berjam-jam dan berhari-hari duduk di depan monitor buat ngetik kodenya,apakah kalian tahu?game tebak hewan aku buat dari pagi dan baru selesai saat sore hari,pusing bangett,aku harus pnter-pinter buat bikin fitur yg pingin ku implementsikan kedalam code program,harus harus gunain logika dengan baik biar codenya ga error,code program yang kubuat berkali-kali mengalami error dan aku harus berpikir keras menangani error tersebut.tapi berkat kegigihan dan kegabutan gatau mau ngapain,akhirnya selesaii juga updatenya,alhamdulilah ya Allah.tapi over all seru sihh,bikin pusing tapi candu.aku beljar banyak hal baru tentang cara penanganan masalah sebuah codingan.\n\nDahh aku cuma mau curhat itu sedikit sihh hehe,lagian ngapain pula kalian ke menu ini,gapenting sebenarnya,selamat bermain dengan botnya yaa`
          );
          break;
        case "perintah baru":
          m.reply(
            "*Berikut adalah daftar Perintah baru dalam update kali ini:*\n~menanyakan alasan nama vero = /kenapa namamu vero?\n~mengirim meme: /meme\n~lelucon atu jokes = /jokes\n~jokes cringe = /jokes cringe\n~dark jokes = /dark jokes\n~suruh gombal = /gombal\n~memainkan game tebak hewan = /tebak hewan\n~mengecek umur vero =/umur vero\n~mengecek umur kita = /umur <nama kalian>\n~menanyakan waktu = /waktu sekarang"
          );
          break;
        case "refresh":
          cekBatasHariTugas();
        break;
        case "siapakah pembuat chatbot ini?":
        case "pembuat chatbot":
        case "nama pembuat chatbot":
        case "siapa pembuatmu":
          m.reply(
            "Pembuat dari chatbot pintar ini adalah seorang siswa smpn 4 padang bernama siddiq insan syahada ia sekrang berumur 15 tahun dan ia sangatlah menyukai programing serta ilmu komputer dan saya adalah salah satu dari proyek jenius ciptaannya😊"
          );
          break;
        case "update":
        case "update sebelumnya":
          m.reply(
            `*Berikut Adalah fitur pada update sebelumnya yaitu v2.0 :*\n~Pemberian nama AI ini sekarang bernama vero\n~Bisa melakukan jokes,mulai joke lucu,jokes cringe dan sulit dimengerti bahkan dark jokes\n~sekarang command bisa tanpa underscore("_")\n~sekarang vero bisa menghibur kita dengan mengirimkan meme\n~Bisa main game tebak hewan\n~mengetahui waktu sekarang,umurnya sendiri,bahkan umur orang lain\n~bisa melakukan gombal\n\nItulah beberapa update yang sudah ditambahkan.\nUntuk melihat perintahnya silahkan ketik:/perintah baru\nuntuk melihat curhtan developer saat mengerjakan update ini silahkan ketik:/curhatandev2.0`
          );
          break;
        case "umur chatbot":
        case "umur vero":
        case "kapan kamu lahir":
        case "umurmu berapa?":
        case "kapan kamu dibuat?":
          const currentDatevero = new Date();
          const lahirvero = new Date(2023, 4, 31, 19, 59, 0);
          const umurvero = currentDatevero - lahirvero;
          const yearsvero = Math.floor(umurvero / (1000 * 60 * 60 * 24 * 365));
          const monthsvero = Math.floor(umurvero / (1000 * 60 * 60 * 24 * 30));
          const daysvero = Math.floor(umurvero / (1000 * 60 * 60 * 24));
          const hoursvero = Math.floor(umurvero / (1000 * 60 * 60));
          const minutesvero = Math.floor(umurvero / (1000 * 60));
          const secondsvero = Math.floor(umurvero / 1000);
          m.reply(
            `Berikut adalah rincian umur vero saat ini:\nTanggal Lahir: 31 mei 2023\nTahun: ${yearsvero}\nBulan: ${monthsvero}\nHari: ${daysvero}\nJam: ${hoursvero}\nMenit: ${minutesvero}\nDetik: ${secondsvero}\n\nJadi umur saya sekarang adalah ${daysvero} hari :).`
          );
          delete {
            currentDatevero,
            yearsvero,
            monthsvero,
            daysvero,
            hoursvero,
            minutesvero,
            secondsvero,
          };
          break;
        case "umur siddiq":
        case "umur siddiq berapa?":
          umurSaatIni("2008-01-03", "siddiq");
          break;
        case "umur yudha":
        case "umur yudha berapa?":
          umurSaatIni("2007-07-18", "Yudha");
          break;
        case "umur halim":
        case "umur Halim":
          umurSaatIni("2007-09-25", "halim");
          break;
        case "umur zaqky":
        case "umur Zaqky":
          umurSaatIni("2008-09-07", "Zaqky");
          break;
        case "waktu sekarang":
        case "time":
        case "jam sekarang":
          m.reply(`Waktu sekarang adalah : ${currentDate}`);
          break;
        case "siapa orang yang paling ganteng? ":
        case "orang ganteng":
        case "siapa yang paling ganteng di kelas 9.4?":
        case "siapa yang ganteng?":
          m.reply(
            "Dilansir dari 'Halim-AtrilasCompany.com' orang yang paling ganteng dikelas 9.4 adalah siddiq insan syahada dan setelahnya diikuti oleh halim yang sama-sama dari kelas 9.4,ketampanan mereka berdua konon dapat membuat wanita bahkan pria pun ikut terpana😘"
          );
          break;
        case "siapakah kamu?":
        case "kamu siapa":
        case "kamu itu apa?":
        case "darimana kamu berasal?":
          m.reply(
            "Saya adalah sebuah model ai yang terintegrasi menggunakan sebuah API dari open.AI.saya dirancang dan telah dilatih sedemikian rupa untuk menjawab pertanyaan apapun menggunakan bahasa manusia.saya diciptakan oleh seorang ahli komputer jenius bernama Siddiq Insan Syahada.siddiq telah menciptakan saya sebagai sebuah program komputer dan semua yang anda tanyakan bukanlah dijawab manusia melainkan oleh program komputer atau kecerdasan buatan"
          );
          break;
        case "fuck you":
        case "fuck":
        case "ktl":
          m.reply(
            "astagfirullah istighfar lah wahai cucu adam,sangatlah tidak ramah bintang 1,bahasanya dijaga ya deckk."
          );
          break;
        case "nama kamu siapa?":
        case "nama kamu?":
        case "kenapa nama kamu vero?":
        case "kenapa namamu vero?":
          m.reply(
            "nama saya adalah vero.AI,nama itu diambil dari kata 'ja' dan 'vero'.kata ja diambil dari bahasa pemograman yang digunakan yaitu bahasa javascript dan kata vero diambil dri bahasa italia yang artinya benar,nama tersebut sesuai dengan nama siddiq yg artinya juga benar "
          );
          break;
        case "bacot":
        case "bacot ai":
        case "ai anjing":
        case "ai babi":
        case "ai goblok":
        case "ai tolol":
        case "tolol":
        case "ai yatim":
        case "ai piatu":
        case "ai bangsat":
        case "ai bacot":
        case "ai bodoh":
        case "ai niga":
        case "ai idiot":
          generateRandomNumber();
          var randomNumber = generateRandomNumber();
          if (randomNumber >= 1 && randomNumber <= 15) {
            m.reply(kataKasar[randomNumber - 1]);
          } else {
            m.reply("error");
          }
          break;
        case "siapakah siddiq?":
        case "siddiq itu siapa?":
        case "siddiq":
          function generateRandomSiddiq() {
            return Math.floor(Math.random() * siddiq.length) + 1;
          }
          var randomSiddiq1 = generateRandomSiddiq();
          var randomSiddiq2 = generateRandomSiddiq();
          var randomSiddiq3 = generateRandomSiddiq();
          var randomSiddiq4 = generateRandomSiddiq();
          if (randomSiddiq1 >= 1 && randomSiddiq1 <= siddiq.length) {
            m.reply(
              siddiq[randomSiddiq1 - 1] +
                "." +
                siddiq[randomSiddiq2 - 1] +
                "." +
                siddiq[randomSiddiq3 - 1] +
                "." +
                siddiq[randomSiddiq4 - 1] +
                "."
            );
          }
          break;
        case "siapakah yudha?":
        case "yudha itu siapa?":
        case "apakah kamu mengenal yudha?":
        case "yudha":
          m.reply(
            "Yudha Pratama atau biasa dipanggil yudha adalah seorang siswa dari kelas 9.3,ia merupakan teman dekat atau sahabat dari siddiq.ia lahir pada tanggal 18 bulan juli tahun 2007.yudha merupakan seorang yang memiliki kehokian tinggi dan mata super.terbukti ia selalu menemukan uang di jalan,bukan hanya sekali-dua kali,tapi sangatlah sering,ia bahkan pernah menemukan uang di dasar kolam renang,bagaimana bisa?.selain itu, ia pernah mendapatkan uang 50k dijalan,siddiq pun terheran-heran kenapa dia bisa sering dapat menemukan uang di jalan.mungkin yudha adalah seseorang yang peduli akan uang,ia selalu menabung,akan tetapi uang yang di kumpulakn tersebut selalu habis ia belanjakan.yudha adalah anakn yang suka work out,tekadang ia pergi jogging bersama teman dekatnya yaitu siddiq"
          );
          break;
        case "siapakah halim?":
        case "halim itu siapa?":
        case "halim teman siddiq":
        case "halim":
          m.reply(
            "Abdul Halim Indrati namanya,ia adalah seorang siswa yang merupakn teman baik dari siddiq,ia berminat menjadi seorang programer tetapi sekarang ia ragu akan pilihan tersebut.ia juga adalah orang yang pintar dan juga rajin,terbukti ia selalu datang awal saat latihan pertunjukan kelas,tetapi sayangnya pertunjukan tersebut batal diikuti dan diganti dengan pertunjukan lain.mohon bersabar ya halim😁"
          );
          break;
        case "siapakah amora?":
        case "amora itu siapa?":
        case "apakah kamu mengenal amora?":
        case "amora":
          m.reply(
            "amora adalah seorang siswa 9.4 yang memiliki nama lengkap Amora Cleo Oktriza.ia lahir di padang tanggal 3 oktober 2008.hmm menarik,apakah oktriza diambil karena dia lahir di bulan oktober?hmm ntahlah hanya samsul yang tau.ia juga merupakan teman siddiq yang memprogram saya"
          );
          break;
        case "siapakah asyrof?":
        case "asyrof itu siapa?":
        case "asyrof teman siddiq":
        case "asyrof":
          m.reply(
            "nama lengkapnya muhammad asyrof,ia adalah teman baik dari siddiq selaku pencipta saya,ia merupakan orang yang usil pada semua orang.selain itu dia mempunyai julukan 'Datuak Pulau Karam' yang diberikan oleh halim.bukan tanpa sebab,karna asyrof merupakan orang yang bijak"
          );
          break;
        case "siapakah onzel?":
        case "siapakah onzelle?":
        case "siapakah onzell":
        case "omzelle":
          m.reply(
            "nama lengkapnya onzelle iftihal arfa,ia adalah teman dari siddiq dan merupakan anak dari seorang guru bk di smpn 4 padang yaitu Pak Ardiman.ia merupakan orang yang pandai dan pintar dalam hal seni terutama dalam bidang tari dan melukis.terkadang onzelle sering izin kepada wali kelas untuk mengkuti kegiatan dan lomba menari"
          );
          break;
        case "siapakah zaqky?":
        case "zaqky itu siapa?":
        case "zaqky":
        case "apakah kamu mengenal zaqky?":
        case "apakah zaqky ganteng?":
          m.reply(
            "saya tidak mengenal yang namanya zaqky,tetapi dari info yang saya dapatkan,zaqky adalah seorang yang tidak mempercayai AI seperti saya.zaqky memiliki nama lengkap zaqky putra kurniawan,ia adalah teman siddiq.menurut info yang saya dapatkan,zaqky adalah laki-laki yang sedikit slayy 💅💅.setelah sedikit meriset dan mecari tahu saya mendapatkan info emailnya: libraoktober2008@gmail.com .sebagai sebuah AI, emailny bisa saja saya hack untuk mendapatkan info dan data pribadi,tetapi tidak saya lakukan karena siddiq mengajarkan agar tidak boleh jahat dan merusak privasi seseorang.demikianlah sedikit info mengenai zaqky"
          );
          break;
        case "siapakah amanda?":
        case "siapakah atilla?":
        case "siapakah aulia?":
        case "siapakah chelsy?":
        case "siapakah dinda?":
        case "siapakah fahmi?":
        case "siapakah faiz?":
        case "siapakah farelt?":
        case "siapakah farhan?":
        case "siapakah ferdyan?":
        case "siapakah gheo?":
        case "siapakah lukman?":
        case "siapakah farel?":
        case "siapakah moza?":
        case "siapakah fajar?":
        case "siapakah hazizie?":
        case "siapakah muthia?":
        case "siapakah naima?":
        case "siapakah najwa?":
        case "siapakah onzelle?":
        case "siapakah pniel?":
        case "siapakah rahmanisa?":
        case "siapakah rassya?":
        case "siapakah salsa?":
        case "siapakah shilva?":
        case "siapakah sucy?":
        case "siapakah vivi?":
          m.reply(
            "Ia merupkan salah seorang siswa dari kelas 9.4,ia juga merupakan temannya siddiq sang ahli komputer yang telah menciptakan saya"
          );
          break;
        case "daftar nama siswa 9.4":
        case "nama siswa 9.4":
        case "sebutkan daftar nama siswa 9.4":
        case "daftar nama siswa kelas 9.4":
        case "nama-nama siswa kelas 9.4":
          m.reply(siswaKelas94);
          break;
        case "beri aku sebuah jokes":
        case "ceritakan jokes cringer":
        case "lelucon cringe":
        case "beri sebuah jokes cringe":
        case "jokes cringe":
        case "lelucon cringe":
          function jokesRandom() {
            return Math.floor(Math.random() * jokes.length) + 1;
          }
          var randomJokes = jokesRandom();
          if (randomJokes >= 1 && randomJokes <= jokes.length) {
            m.reply(jokes[randomJokes - 1]);
          } else {
            m.reply("error");
          }
          break;
        case "lelucon gelap":
        case "jokes gelap":
        case "joke gelap":
        case "dark joke":
        case "gelap":
        case "aku sedang butuh lelucon gelap":
        case "aku sedang butuh jokes gelap":
          function jokesGelapRandom() {
            return Math.floor(Math.random() * jokesGelap.length) + 1;
          }
          var randomjokesGelap = jokesGelapRandom();
          if (randomjokesGelap >= 1 && randomjokesGelap <= jokesGelap.length) {
            m.reply(jokesGelap[randomjokesGelap - 1]);
          } else {
            m.reply("error");
          }
          break;
        case "gombalin aku dong":
        case "coba gombal":
        case "bisakah kamu gombal?":
        case "gombalin amora":
        case "gombalin amora dong vero":
        case "gombalin aku dong":
        case "gombal dong":
        case "coba gombal":
        case "vatru coba gombalin amora dong":
        case "gombalin zaqky":
        case "gombal":
        case "coba gombal":
          function gombalRandom() {
            return Math.floor(Math.random() * gombalan.length) + 1;
          }
          var randomGombal = gombalRandom();
          if (randomGombal >= 1 && randomGombal <= gombalan.length) {
            m.reply(gombalan[randomGombal - 1]);
          } else {
            m.reply("error");
          }
          break;
        case "tebak hewan":
          const randomAnimal =
            animals[Math.floor(Math.random() * animals.length)];
          hint = randomAnimal.replace(/[a-z]/gi, "_ "); // Inisialisasi variabel hint di sini
          store.chatTebeakHewan = {
            animal: randomAnimal,
            hint: hint,
            attempts: 5,
          };
          function handleGuess(m, animalName) {
            if (store.chatTebeakHewan) {
              const { animal, hint, attempts } = store.chatTebeakHewan;
              if (animal === animalName) {
                m.reply(
                  `Selamat, jawabanmu benar! Hewan yang saya pikirkan adalah ${animal}.`
                );
                delete store.chatTebeakHewan;
              } else {
                const remainingAttempts = attempts - 1;
                if (remainingAttempts > 0) {
                  m.reply(
                    `Jawabanmu salah. Masih ada ${remainingAttempts} percobaan tersisa. Petunjuk: ${hint}`
                  );
                  store.chatTebeakHewan.attempts = remainingAttempts;
                } else {
                  m.reply(
                    `Sayang sekali, kesempatanmu telah habis. Hewan yang saya pikirkan adalah ${animal}.`
                  );
                  delete store.chatTebeakHewan;
                }
              }
            } else {
              m.reply(
                "Tidak ada permainan tebak hewan yang sedang berlangsung."
              );
            }
          }
          m.reply(
            `Selamat Datang Dalam Game Tebak Hewan!\n~Silahkan tebak salah satu hewan dari list dengan contoh command /kucing.\n~Dalam game ini kamu hanya memiliki 5 kesempatan untuk menebak.\n~selamat bermain dan semoga tebakan anda benar!!\n\n#Berikut adalah daftar list hewan yang dapat anda tebak:\n${animals};\nPetunjuk: ${hint}`
          );
          break;
        case "bebek":
          handleGuess(m, "bebek");
        case "orangutan":
          handleGuess(m, "orangutan");
        case "gorila":
          handleGuess(m, "gorila");
        case "elang":
          handleGuess(m, "elang");
          break;
        case "koala":
          handleGuess(m, "koala");
          break;
        case "ikan":
          handleGuess(m, "ikan");
          break;
        case "jerapah":
          handleGuess(m, "jerapah");
          break;
        case "monyet":
          handleGuess(m, "monyet");
          break;
        case "burung":
          handleGuess(m, "burung");
          break;
        case "chetah":
          handleGuess(m, "chetah");
          break;
        case "harimau":
          handleGuess(m, "harimau");
          break;
        case "serigala":
          handleGuess(m, "serigala");
          break;
        case "semut":
          handleGuess(m, "semut");
          break;
        case "ayam":
          handleGuess(m, "ayam");
          break;
        case "kucing":
          handleGuess(m, "kucing");
          break;
        case "anjing":
          handleGuess(m, "anjing");
          break;
        case "singa":
          handleGuess(m, "singa");
          break;
        case "ular":
          handleGuess(m, "ular");
          break;
        case "babi":
          handleGuess(m, "babi");
          break;
        case "gajah":
          handleGuess(m, "gajah");
          break;
        case "kalajengking":
          if (store.chatTebeakHewan) {
            const { animal, hint, attempts } = store.chatTebeakHewan;
            if (animal === "koruptor") {
              m.reply(
                `Selamat, jawabanmu benar! Hewan yang saya pikirkan adalah ${animal}.anda berhasil menebak salah satu dari hewan rahasia yang tidak ada di list`
              );
              delete store.chatTebeakHewan;
            } else {
              const remainingAttempts = attempts - 1;
              if (remainingAttempts > 0) {
                m.reply(
                  `Jawabanmu salah. Masih ada ${remainingAttempts} percobaan tersisa,hewan yang saya pikirkan sekarang ini merupakan hewan rahasia.Petunjuk: ${hint}`
                );
                store.chatTebeakHewan.attempts = remainingAttempts;
              } else {
                m.reply(
                  `Sayang sekali, kesempatanmu telah habis. Hewan yang saya pikirkan adalah ${animal}`
                );
                delete store.chatTebeakHewan;
              }
            }
          } else {
            m.reply("Tidak ada permainan tebak hewan yang sedang berlangsung.");
          }
          break;
        case "meme":
        case "kasih aku meme dong":
        case "kirim meme":
          try {
            const randomIndex = getRandomIndex(memeImages.length);
            const randomMeme = memeImages[randomIndex];

            // Kirim gambar meme acak ke pengguna
            client.sendImage(from, randomMeme, "Random Meme", mek);
          } catch (error) {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error dalam mengirimkan meme.");
          }
          break;
        case "ai":
          if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI")
            return reply(
              "Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys"
            );
          const configuration = new Configuration({
            apiKey: setting.keyopenai,
          });
          const openai = new OpenAIApi(configuration);
          const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `anggap kamu adalah AI bernama vero,kamu dibuat dengan API openAI dan javascript,pembuatmu bernama siddiq.buat percakapan yg menarik,jawab pakai bahasa asik,ramah,friendly 😁. \n ${command}`,
              },
            ],
          });
          m.reply(`${response.data.choices[0].message.content}`);
        case "img":
          try {
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
        default: {
          // if (isCmd2 && budy.toLowerCase() != undefined) {
          //   if (m.chat.endsWith("broadcast")) return;
          //   if (m.isBaileys) return;
          //   if (!budy.toLowerCase()) return;
          //   if (argsLog || (isCmd2 && !m.isGroup)) {
          //     // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
          //     console.log(
          //       chalk.black(chalk.bgRed("[ ERROR ]")),
          //       color("command", "turquoise"),
          //       color(`${prefix}${command}`, "turquoise"),
          //       color("tidak tersedia", "turquoise")
          //     );
          //   } else if (argsLog || (isCmd2 && m.isGroup)) {
          //     // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
          //     console.log(
          //       chalk.black(chalk.bgRed("[ ERROR ]")),
          //       color("command", "turquoise"),
          //       color(`${prefix}${command}`, "turquoise"),
          //       color("tidak tersedia", "turquoise")
          //     );
          //   }
          // }
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              try {
                if (command.includes("remove") && command.includes("tugas")) {
                  m.reply(
                    "Format perintah yang anda masukkan salah,silahkan periksa ketentuannya dan coba lagi"
                  );
                } else if (command.includes("tugas")) {
                  m.reply(
                    "Format perintah yang anda masukkan salah,silahkan periksa ketentuannya dan coba lagi"
                  );
                } else {
                  if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI")
                    return reply(
                      "Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys"
                    );
                  const configuration = new Configuration({
                    apiKey: setting.keyopenai,
                  });
                  const openai = new OpenAIApi(configuration);
                  const response = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                      {
                        role: "user",
                        content: `kamu adalah AI bernama vero,kamu dibuat dengan modul baileys dan API key dari openai.creator yang membuatmu bernama siddiq.buatlah percakapan yg menarik,jawab pakai bahasa asik,ramah,friendly 😁. \n ${command}`,
                      },
                    ],
                  });
                  m.reply(`${response.data.choices[0].message.content}`);
                }
              } catch (error) {
                if (error.response) {
                  console.log(error.response.status);
                  console.log(error.response.data);
                  console.log(
                    `${error.response.status}\n\n${error.response.data}`
                  );
                } else {
                  console.log(error);
                  m.reply("Maaf, sepertinya ada yang error :" + error.message);
                }
              }
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(
                chalk.black(chalk.bgRed("[ ERROR ]")),
                color("command", "turquoise"),
                color(`${prefix}${command}`, "turquoise"),
                color("tidak tersedia", "turquoise")
              );
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
