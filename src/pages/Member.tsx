import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import MemberCard from "../components/MemberCard";

import "../Tailwind.css";

interface MemberPropsInterface {}

interface ScreenSize {
  width: number;
  height: number;
}
interface MemberStateInterface {
  members: Array<Number>;
  screen: ScreenSize;
}

class Member extends React.Component<
  MemberPropsInterface,
  MemberStateInterface
> {
  constructor(props: MemberPropsInterface) {
    super(props);
    this.state = {
      members: [],
      screen: {
        width: 0,
        height: 0,
      },
    };
  }

  updateDimensions = async () => {
    await this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
    this.createDummyData();
  };

  createDummyData = () => {
    let temp = [];
    let dummyData =
      this.state.screen.width > 1280
        ? 24
        : this.state.screen.width > 1024
        ? 15
        : this.state.screen.width > 768
        ? 11
        : this.state.screen.width > 640
        ? 9
        : 3;
    for (let i = 1; i <= dummyData; i++) {
      temp.push(i);
    }
    this.setState({
      members: [...temp],
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }
  render() {
    return (
      <Container>
        <Helmet>
          <title>Members | IT Club Nedukabta</title>
        </Helmet>
        <div className="p-10 w-full h-full">
          <div
            className="w-full h-full p-10 sm:p-16 flex flex-col relative"
            style={{
              backgroundColor: "#0077B6",
            }}
          >
            <div className="flex flex-col justify-center sm:justify-start sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-full">
              <MemberCard
                nama="Alfat Ardiansa"
                jabatan="Ketua Divisi"
                imageURL="https://avatars.githubusercontent.com/alfatardiansa"
              />
              {this.state.members.map((v, i) => (
                <MemberCard />
              ))}
            </div>
            <a
              href="#members"
              className="self-center font-normal absolute bottom-5"
              style={{
                color: "#CAF0F8",
              }}
            >
              See Much More
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

export default Member;
