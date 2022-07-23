import Link from "next/link";
import Image from "next/future/image";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import GlobalHead from "../../components/GlobalHead";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar";
import Icon from "../../components/Icon";
import FoodNavItems from "../../components/NavBar/FoodNavItems";

import User from "/public/images/logo.jpg";

export default function profile() {
  return (
    <>
      <GlobalHead />

      <TopBar topBarClassName="flex justify-end items-center px-4 text-white">
        <Link href="/home/settings">
          <a>
            <Icon icon={faGear} />
          </a>
        </Link>
      </TopBar>

      <main className="flex flex-col items-center w-full max-w-4xl min-h-screen px-2 py-16 mx-auto">
        <section className="mt-5 text-center">
          <h1 className="text-3xl font-semibold">Dude</h1>
          <div className="w-44 ">
            <Image src={User} alt="Foto de Perfil" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500">Phone Number</span>
              <span className="text-xl">+11991234571</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500">Email</span>
              <span className="text-xl">dude@gmail.com</span>
            </div>
          </div>
        </section>
      </main>

      <NavBar navBarClassName="grid grid-cols-3">
        <FoodNavItems profile="active" />
      </NavBar>
    </>
  );
}
