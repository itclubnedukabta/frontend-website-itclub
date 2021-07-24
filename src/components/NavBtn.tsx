import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export interface NavBtnPropsInterface {
  location?: string;
  className?: string;
  children: any;
}

const NavBtn = (props: NavBtnPropsInterface) => {
  return (
    <Link
      to={props.location ? props.location : "#"}
      className={props.className ? props.className : ""}
    >
      {props.children}
    </Link>
  );
};

export default NavBtn;
