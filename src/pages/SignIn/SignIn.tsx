import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterResponse } from "../../types/auth";
import TokenContext from "../../contexts/TokenContext";
import InputError from "../../ui/InputError";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Spinner from "../../ui/Spinner";

import DarkModeList from "../../components/DarkModeList.tsx/DarkModeList";
import { loginData } from "../../types/auth";
import RegisterImage from "../../components/RegisterImage/RegisterImage/RegisterImage";
import RegisterHeader from "../../components/RegisterHeader/RegisterHeader";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function SignIn() {
  const { setToken } = useContext(TokenContext);
  const [loginError, setLoginError] = useState<string>("");

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
        setToken(result.token);
        console.log("Registration success", result);
      } else {
        // Handle and display backend error messages directly
        setLoginError(result.message || "Form submission failed");
        console.error("Form submission failed", result);
      }
    } catch (error: any) {
      console.error("An unexpected error occurred: ", error.message || error);
    }
  };

  return (
    <div className="register">
      <div className="register-container flex justify-center">
        <div className="register-form flex flex-col justify-center items-center w-full md:w-1/2 h-screen gap-6 p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col flex gap-6 p-10"
          >
            <DarkModeList />

            <div className="flex-col flex gap-2 mb-5">
              <h2 className="typography-h4 ">Welcome👋</h2>
              <p className="">Sign in to your dashboard</p>
            </div>

            {/* <RegisterHeader /> later we will make it based on the route itself */}

            <div className="relative">
              <input
                type="text"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-white dark:bg-gray-800 dark:border-textSecondary dark:text-white"
                {...register("email")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary dark:bg-gray-800 ">
                Email
              </label>
              {errors.email && <InputError error={errors.email.message} />}
            </div>

            <div className="relative">
              <input
                type="password"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-white dark:bg-gray-800 dark:border-textSecondary dark:text-white"
                {...register("password")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary dark:bg-gray-800 ">
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

            {loginError && <InputError error={loginError} />}
          </form>
        </div>

        <RegisterImage />
      </div>
    </div>
  );
}

export default SignIn;
