import * as React from "react";
import "../Tailwind.css";
import "./Navbar.css";
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
    return(
      <nav className="z-50 h-screen py-12 fixed flex items-center justify-between nav-bg flex-col" style={{width: "76px"}}>
        <img src={ITLogo} alt="" width="50" height="50" />
        <div className="flex flex-col">
          <NavBtn className="my-4">
              <ClassSvg />
          </NavBtn>
          <NavBtn className="my-4" location="/home">
              <HomeSvg />
          </NavBtn>
          <NavBtn className="my-4" location="/info">
              <InfoSvg />
          </NavBtn>
          <NavBtn className="my-4" location="/division">
              <DivisionSvg />
          </NavBtn>
          <NavBtn className="my-4" location="/members">
              <PeopleSvg />
          </NavBtn>
          <NavBtn className="my-4" location="/contact">
              <ContactSvg />
          </NavBtn>
        </div>
      </nav>
    )
  }
}

export default Navbar;