import Link from "next/link";
import Image from "next/future/image";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../../components/NavBar/NavBar";
import TopBar from "../../../components/TopBar";
import GlobalHead from "../../../components/GlobalHead";
import Icon from "../../../components/Icon";

import Curso from "/public/confeiteiro.jpg";
import Simples from "/public/confeitaria-simples.jpg";
import Profissional from "/public/confeitaria-profissional.jpg";

const Cursos = () => {
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
          <Image src={Curso} alt="Bombas de Chocolate" className="" />
        </div>
        <section className="z-10 w-full text-sm font-medium text-gray-400 bg-white rounded-md">
          <h1 className="mb-5 text-xl text-center text-black">Cursos Online</h1>
          <span className="p-1">Cursos Básicos</span>
          <section className="w-full my-3 rounded-md shad">
            <div>
              <Image src={Simples} alt="Cupcakes" className=" rounded-t-md" />
              <div className="flex flex-col p-2 text-black">
                <span className="self-end">R$ 149,99</span>
                <span>Confeitaria Básica</span>
                <span>Aprenda os fundamentos básicos da confeitaria.</span>
              </div>
            </div>
          </section>
          <span className="p-1">Cursos Profissionalizante</span>
          <section className="w-full my-3 rounded-md shad">
            <div>
              <Image
                src={Profissional}
                alt="Confeiteira"
                className=" rounded-t-md"
              />
              <div className="flex flex-col p-2 text-black">
                <span className="self-end">R$ 499,99</span>
                <span>Confeitaria Profissional</span>
                <span>
                  Se profissionalize na confeitaria com nossos cursos.
                </span>
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
export default Cursos;
