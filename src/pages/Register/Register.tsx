import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterData, RegisterResponse } from "../../types/auth";
import TokenContext from "../../contexts/TokenContext";
import InputError from "../../ui/InputError/InputError";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Spinner from "../../ui/Spinner/Spinner";

import DarkModeList from "../../components/DarkModeList.tsx/DarkModeList";
import RegisterImage from "../../components/RegisterImage/RegisterImage/RegisterImage";
import RegisterHeader from "../../components/RegisterHeader/RegisterHeader";
import { setCookie } from "../../components/CookieHandler/CookieHandler";
import { useNavigate } from "react-router-dom";
import LoginRegisterSwitch from "../../ui/LoginRegisterSwitch/LoginRegisterSwitch";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function Register() {
  const { token, setToken } = useContext(TokenContext);
  const [registerError, setRegisterError] = useState<string>("");

  const navigate = useNavigate();

  const registerSchema = z
    .object({
      name: z
        .string()
        .min(4, { message: "Name must be more than 3 characters" }),
      email: z.string().email({ message: "Invalid email" }),
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .regex(/^[A-Z]/, {
          message: "Password must start with an uppercase letter",
        }),
      rePassword: z
        .string()
        .min(1, { message: "Confirm password is required" }),
      phone: z
        .string()
        .min(11, { message: "Phone number must be exactly 11 digits" })
        .max(11, { message: "Phone number must be exactly 11 digits" }),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.rePassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["rePassword"], // The path where the error will appear
          message: "Passwords must match",
        });
      }
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      const response = await fetch(`${baseUrl}/auth/signup`, {
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
        console.log("Registration success", result);

        setCookie("user-token", token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
      } else {
        // Handle and display backend error messages directly
        setRegisterError(result.message || "Form submission failed");
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

            <RegisterHeader />

            <div className="relative">
              <input
                type="text"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-mainWhite dark:bg-darkBg dark:border-textSecondary dark:text-white"
                {...register("name")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-mainWhite text-textSecondary dark:bg-darkBg">
                Name
              </label>
              {errors.name && <InputError error={errors.name.message} />}
            </div>

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

            <div className="relative">
              <input
                type="text"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-mainWhite dark:bg-darkBg dark:border-textSecondary dark:text-white"
                {...register("rePassword")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-mainWhite text-textSecondary dark:bg-darkBg">
                Confirm Password
              </label>
              {errors.rePassword && (
                <InputError error={errors.rePassword.message} />
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-mainWhite dark:bg-darkBg dark:border-textSecondary dark:text-white"
                {...register("phone")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-mainWhite text-textSecondary dark:bg-darkBg">
                Phone
              </label>
              {errors.phone && <InputError error={errors.phone.message} />}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-primaryMain h-12 rounded-lg text-white text-sm "
            >
              {isSubmitting ? <Spinner /> : "Submit"}
            </button>
            <LoginRegisterSwitch
              text={"Already have an account ? "}
              linkText={"Sign in"}
              linkPath="signin"
            />

            {registerError && <InputError error={registerError} />}
          </form>
        </div>

        <RegisterImage />
      </div>
    </div>
  );
}

export default Register;
