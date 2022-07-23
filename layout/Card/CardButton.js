import Link from "next/link";

const CardButton = (props) => {
  return (
    <div className="w-full mt-8 mb-5 text-center">
      <Link href={`/${props.cardButtonLink}`}>
        <a className="p-2 font-semibold text-white uppercase bg-orange-400 hover:bg-orange-500 hover:font-bold rad">
          {props.label}
        </a>
      </Link>
    </div>
  );
};
export default CardButton;
