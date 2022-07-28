import Link from "next/link";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../../components/NavBar/NavBar";
import TopBar from "../../../components/TopBar";
import GlobalHead from "../../../components/GlobalHead";
import Icon from "../../../components/Icon";
import ProductsList from "../../../components/Products/ProductsList";
import data from "../../api/patissier.json";

const Patissier = () => {
  return (
    <>
      <GlobalHead />

      <TopBar topBarClassName="flex justify-between items-center px-5 text-white">
        <Link href="/home">
          <a>
            <Icon icon={faArrowLeftLong} />
          </a>
        </Link>
      </TopBar>

      <main className="flex flex-col items-center w-full max-w-4xl min-h-screen px-4 pt-40 pb-16 mx-auto">
        <div className="absolute top-0 max-w-4xl -z-10">
          <img
            src="https://img.itdg.com.br/tdg/images/recipes/000/177/096/355179/355179_original.jpg?w=1200"
            alt="Diversos sabores de bolo de pote em uma mesa"
            className="w-full"
          />
        </div>
        <section className="pb-3 overflow-hidden bg-white rounded-md">
          <h1 className="py-3 mb-5 text-2xl font-bold text-center text-white bg-orange-800">
            Patissier
          </h1>
          <ProductsList products={data} />
        </section>
      </main>

      <NavBar navBarClassName="flex items-center justify-center h-20">
        <button className="w-11/12 py-1 font-semibold text-white bg-orange-400 hover:bg-orange-500 rad">
          Finalizar Pedido
        </button>
      </NavBar>
    </>
  );
};
export default Patissier;
