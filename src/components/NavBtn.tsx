import * as React from "react";

export interface NavBtnPropsInterface {
  location?: string;
  className?: string;
  children: any;
}

const NavBtn = (props: NavBtnPropsInterface) => {
  return(
    <a href={props.location? props.location : "#"} className={props.className? props.className : ""}>
      {props.children}
    </a>
  )
}

export default NavBtn;