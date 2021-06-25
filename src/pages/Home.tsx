import React from "react";
import "../Tailwind.css";

class Home extends React.Component {
  render() {
    return (
      <div
        className="h-screen pt-3 sm:pt-0 pl-0 sm:pl-16 flex flex-col justify-center"
        style={{
          backgroundImage: "linear-gradient(to right, #01B1D6, #0178B7)",
        }}
      >
        <div className="pl-20">
          <h1 className="text-8xl font-bold" style={{ color: "#ADE8F4" }}>
            IT Club
            <br />
            Nedukabta
          </h1>
          <p className="font-normal text-4xl" style={{ color: "#CAF0F8" }}>
            An IT extracurricular at SMKN 2 Kab. Tangerang
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
