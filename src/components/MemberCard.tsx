import "../Tailwind.css";

interface MemberCardPropsInterface {
  imageURL?: string;
  nama?: string;
  jabatan?: string;
  memberURL?: string;
}

const MemberCard = (props: MemberCardPropsInterface) => {
  return (
    <a href={props.memberURL ? props.memberURL : "#"} className="py-1 flex">
      <div className="w-20 h-20 bg-gray-200 rounded-full">
        <img src={props.imageURL ? props.imageURL : ""} alt="" />
      </div>
      <div className="pl-4">
        <div className="h-full flex items-center">
          <div>
            <p
              className="text-sm font-bold"
              style={{
                color: "#48CAE4",
              }}
            >
              {props.nama ? props.nama : "Member IT Club"}
            </p>
            <p
              className="text-sm font-medium"
              style={{
                color: "#ADE8F4",
              }}
            >
              {props.jabatan ? props.jabatan : "Member"}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MemberCard;
