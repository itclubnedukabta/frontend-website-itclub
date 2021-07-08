import React from "react";
import { Helmet } from "react-helmet";
import "../Tailwind.css";

import DivCard from "../components/DivCard";
import Container from "../components/Container";

const NetworkImage = require("../assets/img/networking.png");
const ProgrammingImage = require("../assets/img/programming.png");
const GraphicImage = require("../assets/img/graphic.png");

class Division extends React.Component {
  render() {
    return (
      <Container
        className="lg:flex lg:items-center"
        style={{
          color: "#023E8A",
        }}
      >
        <div className="lg:px-36 w-full">
          <Helmet>
            <title>Division | IT Club Nedukabta</title>
          </Helmet>
          <h3 className="text-3xl font-bold text-center pb-6">Division</h3>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center">
            <DivCard image={NetworkImage.default} name="Networking" />
            <DivCard image={ProgrammingImage.default} name="Programming" />
            <DivCard image={GraphicImage.default} name="Graphic Design" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Division;
