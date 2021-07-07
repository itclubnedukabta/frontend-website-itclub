import { CSSProperties } from "react";

interface ContainerPropsInterface {
  className?: string;
  style?: CSSProperties;
  children: any;
}

const Container = (props: ContainerPropsInterface) => {
  return (
    <div
      className={`h-screen w-screen pt-3 sm:pt-0 pl-0 sm:pl-16${
        props.className ? " " + props.className : ""
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Container;
