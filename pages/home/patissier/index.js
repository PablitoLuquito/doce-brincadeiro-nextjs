import Link from "next/link";
import Image from "next/future/image";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../../components/NavBar/NavBar";
import TopBar from "../../../components/TopBar";
import GlobalHead from "../../../components/GlobalHead";
import Icon from "../../../components/Icon";

import Bomba from "/public/bombas.jpg";
import BoloPote from "/public/bolo-pote.webp";

const Patissier = () => {
  return (
    <>
      <GlobalHead />

      <TopBar topBarClassName="flex justify-between items-center px-5 text-white">
        <Link href="/home/food">
          <a>
            <Icon icon={faArrowLeftLong} />
          </a>
        </Link>
      </TopBar>

      <main className="flex flex-col items-center w-full max-w-4xl min-h-screen px-4 pt-40 pb-16 mx-auto">
        <div className="absolute top-0 w-full max-w-4xl overflow-hidden -translate-x-1/2 h-72 left-1/2">
          <Image src={Bomba} alt="Bombas de Chocolate" className="" />
        </div>
        <section className="z-10 w-full text-sm font-medium text-gray-400 bg-white rounded-md">
          <h1 className="mb-5 text-xl text-center text-black">Patissier</h1>
          <span className="p-1">Prontos para Entrega</span>
          <section className="w-full my-2 rounded-md shad">
            <div>
              <Image src={BoloPote} className="rounded-t-md" />
              <div className="flex flex-col p-2 text-black">
                <span className="self-end">R$ 10,00</span>
                <span>Bolo de Pote</span>
                <span>Diversos sabores.</span>
              </div>
            </div>
          </section>
          <span className="p-1">Entregamos 24h</span>
          <section className="w-full my-2 rounded-md shad">
            <div>
              <Image src={BoloPote} className="rounded-t-md" />
              <div className="flex flex-col p-2 text-black">
                <span className="self-end">R$ 10,00</span>
                <span>Bolo de Pote</span>
                <span>Diversos sabores.</span>
              </div>
            </div>
          </section>
        </section>
      </main>

      <NavBar navBarClassName="flex items-center justify-center h-20">
        <Link href="">
          <a className="block w-11/12 p-2 font-normal text-center text-white uppercase bg-orange-400 hover:bg-orange-500 hover:font-medium rad">
            Start Order
          </a>
        </Link>
      </NavBar>
    </>
  );
};
export default Patissier;
