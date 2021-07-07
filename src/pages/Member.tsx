import React from "react";
import Container from "../components/Container";
import MemberCard from "../components/MemberCard";

import "../Tailwind.css";

interface MemberPropsInterface {}
interface MemberStateInterface {
  members: Array<Number>;
}

class Member extends React.Component<
  MemberPropsInterface,
  MemberStateInterface
> {
  constructor(props: MemberPropsInterface) {
    super(props);
    this.state = {
      members: [],
    };
  }

  componentDidMount() {
    let temp = [];
    for (let i = 1; i <= 39; i++) {
      temp.push(i);
    }
    this.setState({
      members: [...temp],
    });
  }
  render() {
    return (
      <Container>
        <div className="p-10 w-full h-full">
          <div
            className="w-full h-full p-16 flex flex-col relative"
            style={{
              backgroundColor: "#0077B6",
            }}
          >
            <div className="grid grid-cols-5 h-full">
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
              href="#home"
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
