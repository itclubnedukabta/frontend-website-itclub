import { CSSProperties } from "react";

interface ContainerPropsInterface {
  className?: string;
  style?: CSSProperties;
  children: any;
}

const Container = (props: ContainerPropsInterface) => {
  return (
    <div
      className={`h-screen lg:h-screen lg:w-screen lg:pt-3 pt-36 pl-0 lg:pl-16${
        props.className ? " " + props.className : ""
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Container;
