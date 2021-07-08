import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import "../Tailwind.css";

class Home extends React.Component {
  render() {
    return (
      <Container
        className="flex flex-col justify-center"
        style={{
          backgroundImage: "linear-gradient(to right, #01B1D6, #0178B7)",
        }}
      >
        <Helmet>
          <title>Home | IT Club Nedukabta</title>
        </Helmet>
        <div className="pl-10 lg:pl-20">
          <h1 className="text-6xl lg:text-8xl font-bold" style={{ color: "#ADE8F4" }}>
            IT Club
            <br />
            Nedukabta
          </h1>
          <p className="text-xl font-normal lg:text-4xl" style={{ color: "#CAF0F8" }}>
            An IT extracurricular at SMKN 2 Kab. Tangerang
          </p>
        </div>
      </Container>
    );
  }
}

export default Home;
