import Link from "next/link";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar";
import GlobalHead from "../../components/GlobalHead";
import FoodCards from "../../components/FoodCards/FoodCards";
import FoodSearch from "../../components/FoodSearch/FoodSearch";
import Icon from "../../components/Icon";
import FoodNavItems from "../../components/NavBar/FoodNavItems";

const Food = () => {
  return (
    <>
      <GlobalHead />

      <TopBar topBarClassName="flex justify-end items-center px-5 text-white">
        <Link href="/">
          <a>
            <Icon icon={faArrowRightFromBracket} />
          </a>
        </Link>
      </TopBar>

      <main className="flex flex-col items-center w-full max-w-4xl min-h-screen px-2 py-16 mx-auto">
        <FoodSearch />

        <FoodCards />
      </main>

      <NavBar navBarClassName="grid grid-cols-3">
        <FoodNavItems food="active" />
      </NavBar>
    </>
  );
};

export default Food;
