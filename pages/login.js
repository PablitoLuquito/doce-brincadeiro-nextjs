import { useState } from "react";
import Link from "next/link";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import InputForm from "../components/InputForm";
import Modal from "../components/Modal";
import GlobalHead from "../components/GlobalHead";

import classes from "../styles/signup-login.module.css";
import styles from "../styles/underline-animation.module.css";
import Icon from "../components/Icon";

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  const forgotPasswordHandler = () => {
    setForgotPassword(true);
  };

  const cancelHandler = () => {
    setForgotPassword(false);
  };

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
            <h1 className={classes.title}>Login</h1>
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
            <Link href="/home/food">
              <a className="w-full py-2 font-semibold text-center text-white uppercase bg-orange-400 hover:bg-orange-500 hover:font-bold btn rad">
                Log In
              </a>
            </Link>
            <span
              className={`py-2 after:bg-slate-400 font-semibold text-center uppercase cursor-pointer text-slate-400 ${styles["und_anim"]}`}
              onClick={forgotPasswordHandler}
            >
              Forgot password?
            </span>
          </form>
        </section>
        <Link href="/signup">
          <a className="w-full py-2 mb-5 font-semibold text-center uppercase border hover:font-bold text-slate-400 btn rad">
            Doens&apos;t have an account? Sign Up
          </a>
        </Link>
      </main>

      {forgotPassword === true && (
        <Modal
          title="Password Reset"
          message="Enter your email address and we'll send you instructions on how to
        reset your password."
          submit="Submit"
          cancel="Cancel"
          cancelClick={cancelHandler}
          backdropClick={cancelHandler}
        >
          <InputForm
            id="f_email"
            title="Email"
            type="email"
            name="f_email"
            placeholder="Enter email..."
          />
        </Modal>
      )}
    </>
  );
};

export default Login;
