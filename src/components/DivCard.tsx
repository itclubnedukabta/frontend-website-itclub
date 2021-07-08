import "../Tailwind.css";

interface DivCardPropsInterface {
  image: string;
  name: string;
}

const DivCard = (props: DivCardPropsInterface) => {
  return (
    <div className="w-4/12 flex flex-col justify-center md:h-80">
      <img
        src={props.image}
        alt=""
        loading="lazy"
        className="self-center w-full md:w-10/12"
      />
      <p className="font-bold text-base text-center">{props.name}</p>
    </div>
  );
};

export default DivCard;
