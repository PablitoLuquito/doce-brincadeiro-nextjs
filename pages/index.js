import Link from "next/link";
import Image from "next/future/image";

import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import logo from "/public/images/logo.jpg";

import GlobalHead from "../components/GlobalHead";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <>
      <GlobalHead />
      <main className="flex flex-col items-center justify-between w-full max-w-4xl min-h-screen mx-auto px-11">
        <Image
          src={logo}
          alt="Logo da Ateliê Doce Brincadeiro"
          className="w-1/2 mt-20"
        />

        <section className="flex flex-col items-center w-full gap-3 font-semibold text-center uppercase mb-7">
          <Link href="/signup">
            <a className="w-full py-1 text-white bg-orange-400 hover:bg-orange-500 hover:font-bold shad rad signup">
              <span>
                <Icon icon={faUtensils} />
              </span>
              <span>Sign Up</span>
            </a>
          </Link>
          <Link href="/login">
            <a className="block w-full py-1 text-yellow-800 border border-yellow-800 hover:font-bold bg- btn rad">
              Log In
            </a>
          </Link>
        </section>
      </main>
    </>
  );
}
