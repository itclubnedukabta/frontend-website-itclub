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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ut
            vestibulum vel nunc, sed est quis. Quis semper luctus pellentesque
            gravida erat enim. Nunc, blandit nunc, commodo, adipiscing
            pellentesque ut enim ac purus. Habitasse quam montes, at pulvinar
            pellentesque. Phasellus cursus lorem magnis in. Gravida et ultrices
            lacus lorem amet urna. Ultricies hac sagittis et et quisque tortor,
            arcu, aliquam. Aliquet in amet viverra id at id. Enim sed et
            tincidunt risus purus. Arcu id congue sem velit ante sed ut. Lectus
            consequat integer tincidunt tincidunt tempor. Iaculis interdum donec
            tortor orci. Ipsum pretium gravida urna porta pharetra semper nibh.
            Porta at morbi sit aenean maecenas donec morbi mauris gravida.
            Gravida at massa nulla et odio magna. Hac quisque ut nisl semper
            nulla.
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
