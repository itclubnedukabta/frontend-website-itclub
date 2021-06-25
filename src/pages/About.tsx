import React from "react";
import "../Tailwind.css";
const Image1 = require("../assets/img/About1.png");
const Image2 = require("../assets/img/About2.png");
const Image3 = require("../assets/img/About3.png");

class About extends React.Component {
  render() {
    return (
      <div className="h-screen w-screen pt-3 sm:pt-0 pl-0 sm:pl-16">
        <div className="pt-40 pl-24 w-11/12 h-full">
          <h1
            className="text-4xl font-bold"
            style={{
              color: "#023E8A",
            }}
          >
            About us
          </h1>
          <p
            className="text-lg font-bold text-justify"
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
          <div className="pt-10 h-4/6">
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
      </div>
    );
  }
}

export default About;
