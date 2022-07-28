import Link from "next/link";
import Image from "next/future/image";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import GlobalHead from "../../components/GlobalHead";
import InputForm from "../../components/InputForm";
import TopBar from "../../components/TopBar";
import Icon from "../../components/Icon";

import User from "/public/images/logo.jpg";

const Settings = () => {
  return (
    <>
      <GlobalHead />

      <TopBar topBarClassName="flex items-center px-4 text-white">
        <Link href="/home/profile">
          <a>
            <Icon icon={faArrowLeftLong} />
          </a>
        </Link>
        <div className="w-full">
          <h1 className="text-xl text-center">My Profile</h1>
        </div>
      </TopBar>

      <main className="flex flex-col items-center w-full max-w-4xl min-h-screen px-4 py-20 mx-auto">
        <section className="flex flex-col w-full gap-3">
          <div>
            <InputForm
              id="set_name"
              title="Full Name"
              type="text"
              name="name"
              placeholder="Dude"
            />
          </div>
          <span>Profile Picture</span>
          <div className="flex items-center justify-center w-full overflow-hidden bg-gray-100 border rounded-lg h-60">
            <Image src={User} alt="Foto de Perfil" className="w-1/2" />
          </div>
          <span className="text-center text-orange-400 cursor-pointer">
            Mudar Foto
          </span>
          <div>
            <InputForm
              id="set_phone"
              title="Phone Number"
              type="tel"
              name="phone"
              placeholder="+11991234571"
            />
          </div>
          <div>
            <InputForm
              id="set_email"
              title="Email"
              type="Email"
              name="email"
              placeholder="dude@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-5 mt-5 text-center">
            <Link href="/home/profile">
              <a className="block p-2 text-white uppercase bg-orange-400 hover:bg-orange-500 rad">
                Save
              </a>
            </Link>
            <Link href="/">
              <a className="flex justify-center w-full gap-5 font-semibold text-orange-800 uppercase">
                <span>
                  <Icon icon={faPowerOff} />
                </span>
                <span>Log Out</span>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
export default Settings;
