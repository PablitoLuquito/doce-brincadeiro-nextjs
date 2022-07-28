import Link from "next/link";

const CourseItem = (props) => {
  return (
    <Link href="/home/cursos">
      <a>
        <li>
          <div className="overflow-hidden border rounded-md shad">
            <div className="flex items-center justify-center overflow-hidden h-72 bg-slate-200">
              <img
                src={props.image}
                alt={props.title}
                className="w-auto h-full"
              />
            </div>
            <div className="flex flex-col gap-3 p-3">
              <span className="font-semibold">R$ {props.price}</span>
              <h3>{props.title}</h3>
              <span>{props.desc}</span>
            </div>
          </div>
        </li>
      </a>
    </Link>
  );
};
export default CourseItem;
