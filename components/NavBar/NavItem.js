import Link from "next/link";

import Icon from "../Icon";

const NavItem = (props) => {
  return (
    <div>
      <Link href={`/${props.link}`}>
        <a
          className={`flex flex-col items-center hover:bg-slate-100 text-slate-400 ${props.class}`}
        >
          <span>
            <Icon icon={props.icon} />
          </span>
          <span>{props.title}</span>
        </a>
      </Link>
    </div>
  );
};
export default NavItem;
