import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterResponse } from "../../types/auth";
import TokenContext from "../../contexts/TokenContext";
import InputError from "../../ui/InputError/InputError";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Spinner from "../../ui/Spinner/Spinner";

import DarkModeList from "../../components/DarkModeList.tsx/DarkModeList";
import { loginData } from "../../types/auth";
import RegisterImage from "../../components/RegisterImage/RegisterImage/RegisterImage";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../components/CookieHandler/CookieHandler";
import LoginRegisterSwitch from "../../ui/LoginRegisterSwitch/LoginRegisterSwitch";
import { Link } from "react-router-dom";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function SignIn() {
  const { token, setToken, setUserName } = useContext(TokenContext);
  const [loginError, setLoginError] = useState<string>("");
  const navigate = useNavigate();

  const signInSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z.string().min(1, { message: "Password is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: loginData) => {
    try {
      const response = await fetch(`${baseUrl}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: RegisterResponse = await response.json();

      if (response.ok) {
        const token = result.token;
        setToken(token);
        localStorage.setItem("userName", JSON.stringify(result.user.name));
        console.log("Sign-in success", result);

        setCookie("user-token", token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
      } else {
        setLoginError(result.message || "Form submission failed");
        console.error("Form submission failed", result);
      }
    } catch (error: any) {
      console.error("An unexpected error occurred: ", error.message || error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [token]);

  return (
    <div className="register">
      <div className="register-container flex justify-center">
        <div className="register-form flex flex-col justify-center items-center w-full md:w-1/2 h-screen gap-6 p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="flex-col flex py-2 gap-6">
              <DarkModeList />
              <div className="flex-col flex gap-2 mb-5">
                <h2 className="typography-h4 ">Welcome👋</h2>
                <p className="">Sign in to your dashboard</p>
              </div>
              {/* <RegisterHeader /> later we will make it based on the route itself */}
              <div className="relative">
                <input
                  type="text"
                  className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-mainWhite dark:bg-darkBg dark:border-textSecondary dark:text-white"
                  {...register("email")}
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-mainWhite text-textSecondary dark:bg-darkBg">
                  Email
                </label>
                {errors.email && <InputError error={errors.email.message} />}
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-mainWhite dark:bg-darkBg dark:border-textSecondary dark:text-white"
                  {...register("password")}
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-mainWhite text-textSecondary dark:bg-darkBg">
                  Password
                </label>
                {errors.password && (
                  <InputError error={errors.password.message} />
                )}
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-primaryMain h-12 rounded-lg text-white text-sm "
              >
                {isSubmitting ? <Spinner /> : "Login"}
              </button>
            </div>

            <Link to={"/forgotpassword"}>
              <span className="underline text-primaryMain">
                Forgot password ?
              </span>
            </Link>
            <LoginRegisterSwitch
              text={"Doesn't have an account ?"}
              linkText={"Sign Up"}
              linkPath="register"
            />
            {loginError && <InputError error={loginError} />}
          </form>
        </div>

        <RegisterImage />
      </div>
    </div>
  );
}

export default SignIn;
