import * as React from "react";
import "../Tailwind.css";
import { ReactComponent as ClassSvg } from "../assets/svg/class.svg";
import { ReactComponent as HomeSvg } from "../assets/svg/home.svg";
import { ReactComponent as InfoSvg } from "../assets/svg/info.svg";
import { ReactComponent as DivisionSvg } from "../assets/svg/division.svg";
import { ReactComponent as PeopleSvg } from "../assets/svg/people.svg";
import { ReactComponent as ContactSvg } from "../assets/svg/contact.svg";
import NavBtn from "./NavBtn";
import ITLogo from "../assets/img/it.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="z-50 lg:h-screen md:h-16 lg:py-12 lg:fixed sm:flex sm:items-center lg:px-0 lg:w-16 sm:justify-between lg:flex-col sm:px-8 md:px-16"
        style={{
          backgroundImage: "linear-gradient(to right, #2F98C4, #1666A4)",
        }}
      >
        <div className="flex justify-center">
          <img
            src={ITLogo}
            alt=""
            style={{ width: 50, height: 50 }}
            className="inline-block"
          />
        </div>
        <div className="flex py-3 lg:flex-col justify-around">
          <NavBtn className="lg:my-4 lg:mx-0 sm:mx-4">
            <ClassSvg />
          </NavBtn>
          <NavBtn className="lg:my-4 lg:mx-0 sm:mx-4" location="/">
            <HomeSvg />
          </NavBtn>
          <NavBtn className="lg:my-4 lg:mx-0 sm:mx-4" location="/about">
            <InfoSvg />
          </NavBtn>
          <NavBtn className="lg:my-4 lg:mx-0 sm:mx-4" location="/division">
            <DivisionSvg />
          </NavBtn>
          <NavBtn className="lg:my-4 lg:mx-0 sm:mx-4" location="/members">
            <PeopleSvg />
          </NavBtn>
          <NavBtn className="lg:my-4 lg:mx-0 sm:mx-4" location="/contact">
            <ContactSvg />
          </NavBtn>
        </div>
      </nav>
    );
  }
}

export default Navbar;
