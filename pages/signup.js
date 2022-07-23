import Link from "next/link";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import InputForm from "../components/InputForm";
import GlobalHead from "../components/GlobalHead";
import Icon from "../components/Icon";

import classes from "../styles/signup-login.module.css";

export default function signup() {
  return (
    <>
      <GlobalHead />

      <main className="flex flex-col items-center justify-between w-full h-full max-w-4xl min-h-screen px-4 mx-auto">
        <section className="w-full">
          <div className="flex flex-col w-full">
            <Link href="/">
              <a className="self-start mt-3">
                <Icon icon={faArrowLeftLong} />
              </a>
            </Link>
            <h1 className={classes.title}>Signup</h1>
          </div>

          <form className="flex flex-col items-center w-full gap-5">
            <InputForm
              id="email"
              type="email"
              name="email"
              title="Email"
              placeholder="Enter email..."
            />
            <InputForm
              id="password"
              type="password"
              name="password"
              title="Password"
              placeholder="Enter password..."
            />

            <Link href="/">
              <a className="w-full py-2 font-semibold text-center text-white uppercase bg-orange-400 hover:bg-orange-500 hover:font-bold btn rad">
                Sign Up
              </a>
            </Link>
          </form>
        </section>

        <Link href="/login">
          <a className="w-full py-2 mb-5 font-semibold text-center uppercase border hover:font-bold text-slate-400 btn rad">
            Already have an account? Log In
          </a>
        </Link>
      </main>
    </>
  );
}
