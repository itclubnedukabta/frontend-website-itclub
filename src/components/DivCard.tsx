import "../Tailwind.css";

interface DivCardPropsInterface {
  image: string;
  name: string;
}

const DivCard = (props: DivCardPropsInterface) => {
  return (
    <div className="w-4/12 flex flex-col justify-center h-80">
      <img
        src={props.image}
        alt=""
        loading="lazy"
        style={{
          width: "260px",
          height: "260px",
        }}
        className="self-center"
      />
      <p className="font-bold text-base text-center">{props.name}</p>
    </div>
  );
};

export default DivCard;
