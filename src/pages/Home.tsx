import React from "react";
import { Helmet } from "react-helmet";
import "../Tailwind.css";

class Home extends React.Component {
  render() {
    return (
      <div
        className={`h-screen lg:h-screen lg:w-screen lg:pt-0 md:pt-36 pl-0 lg:pl-16 flex flex-col justify-center`}
        style={{
          backgroundImage: "linear-gradient(to right, #01B1D6, #0178B7)",
        }}
      >
        <Helmet>
          <title>Home | IT Club Nedukabta</title>
        </Helmet>
        <div className="pl-10 lg:pl-20">
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold"
            style={{ color: "#ADE8F4" }}
          >
            IT Club
            <br />
            Nedukabta
          </h1>
          <p
            className="text-sm md:text-xl font-normal lg:text-4xl"
            style={{ color: "#CAF0F8" }}
          >
            An IT extracurricular at SMKN 2 Kab. Tangerang
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
