import { useRouter } from "next/router";

import Image from "next/future/image";

import Card from "../../layout/Card/Card";
import CardAddress from "../../layout/Card/CardAddress";
import CardDescription from "../../layout/Card/CardDescription";
import CardButton from "../../layout/Card/CardButton";
import Bolos from "/public/images/food/bolos-morango.jpg";
import Curso from "/public/images/food/curso.jpg";

const FoodCards = (props) => {
  return (
    <>
      <Card cardId="i1">
        <h1 className="flex items-center justify-center w-full text-xl font-semibold text-white bg-amber-800 rounded-t-xl h-11">
          Patissier
        </h1>
        <div className="flex items-center justify-center w-full h-56 overflow-hidden">
          <Image
            src={Bolos}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <CardAddress address="R. Cônego Valadão, 725 - Gopouva, Guarulhos - SP, 07040-000" />
          <CardDescription description="Modern take on old school Vietnamese street food. You'll love it, we promise." />
          <CardButton label="Ver Produtos" cardButtonLink={`home/patissier`} />
        </div>
      </Card>

      <Card cardId="i2">
        <h1 className="flex items-center justify-center w-full text-xl font-semibold text-white bg-amber-800 rounded-t-xl h-11">
          Cursos Online
        </h1>
        <div className="flex items-center justify-center w-full h-56 overflow-hidden">
          <Image
            src={Curso}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-5 rounded-b-xl">
          <CardAddress address="Online" />
          <CardDescription description="Artisan Sausage truck is a spot for bomb sausage made from ground pork, beef, or poultry, along with salt, special blend of spices and other flavorings and combos.  Some sausages include other ingredients for flavor. Stop by, and check for yourself!" />
          <CardButton label="Ver Cursos" cardButtonLink="home/cursos" />
        </div>
      </Card>
    </>
  );
};
export default FoodCards;
