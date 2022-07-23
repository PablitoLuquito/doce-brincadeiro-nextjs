import Link from "next/link";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import GlobalHead from "../../components/GlobalHead";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar";
import Icon from "../../components/Icon";
import FoodNavItems from "../../components/NavBar/FoodNavItems";

export default function orders() {
  return (
    <>
      <GlobalHead />

      <TopBar topBarClassName="flex justify-end items-center px-4 text-white">
        <Link href="/">
          <a>
            <Icon icon={faArrowRightFromBracket} />
          </a>
        </Link>
      </TopBar>

      <main className="flex flex-col w-full max-w-4xl min-h-screen px-2 py-16 mx-auto">
        <div className="p-3">
          <span className="text-gray-500">My Orders</span>
        </div>
        <span className="text-xl font-medium text-center text-gray-500 ">
          No List Items
        </span>
      </main>
      <NavBar navBarClassName="grid grid-cols-3">
        <FoodNavItems orders="active" />
      </NavBar>
    </>
  );
}
