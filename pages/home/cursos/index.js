import Link from "next/link";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import TopBar from "../../../components/TopBar";
import GlobalHead from "../../../components/GlobalHead";
import Icon from "../../../components/Icon";
import CoursesList from "../../../components/Courses/CoursesList";

import data from "../../api/cursos.json";

const Cursos = () => {
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
            Cursos Online
          </h1>

          <CoursesList products={data} />
        </section>
      </main>
    </>
  );
};
export default Cursos;
