import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import "../Tailwind.css";
const Image1 = require("../assets/img/About1.png");
const Image2 = require("../assets/img/About2.png");
const Image3 = require("../assets/img/About3.png");

class About extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>About | IT Club Nedukabta</title>
        </Helmet>
        <div className="pt-3 sm:pt-6 xl:pt-10 pl-10 xl:pl-16 2xl:pt-20 2xl:pl-24 w-11/12 h-full">
          <h1
            className="text-3xl lg:text-4xl font-bold"
            style={{
              color: "#023E8A",
            }}
          >
            About us
          </h1>
          <p
            className="text-base lg:text-lg font-bold text-justify"
            style={{
              color: "#1969CE",
            }}
          >
            IT Club Nedukabta adalah sebuah organisasi dan ekskul yang berada di
            SMKN 2 Kab. Tangerang. Sebelum IT Club menjadi organisasi dan ekskul
            resmi di SMKN 2 Kab. Tangerang. Jurusan TKJ(Teknik Komputer dan
            Jaringan) memiliki organisasi internal jurusan yang bernama
            CNEC(Computer and Network Enginering Comunity), organisasi ini
            bersifat tertutup hanya murid dari jurusan TKJ saja yang dapat masuk
            ke organisasi CNEC ini. Atas permintaan sekolah untuk membuka
            organisasi CNEC secara umum agar semua jurusan dapat gabung dan
            belajar teknologi dalam satu organisasi, akhirnya CNEC memutuskan
            untuk membuat organisasi baru yang dinamakan IT Club agar murid dari
            jurusan segala jurusan dapat ikut bergabung dan belajar teknologi
            bersama
          </p>
          <div className="sm:h-1/5 md:h-3/6 pt-10 2xl:h-4/6 hidden lg:block">
            <div className="inline-block w-4/12 h-full bg-gray-600">
              <img
                src={Image1.default}
                alt=""
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="inline-block w-4/12 h-full bg-gray-700">
              <img
                src={Image2.default}
                alt=""
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="inline-block w-4/12 h-full bg-gray-800">
              <img
                src={Image3.default}
                alt=""
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default About;
