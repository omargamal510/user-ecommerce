import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { forgotPasswordSucces } from "../../types/auth";
import InputError from "../../ui/InputError/InputError";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Spinner from "../../ui/Spinner/Spinner";

import DarkModeList from "../../components/DarkModeList.tsx/DarkModeList";
import { loginData } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

// type statusMsgType {
//     result.statusMsg : string;
// }

function ForgotPassword() {
  const [forgotPasswordError, setForgotPasswordError] = useState<string>("");
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  const signInSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
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
      const response = await fetch(`${baseUrl}/auth/forgotPasswords`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: forgotPasswordSucces = await response.json();

      if (response.ok) {
        console.log("Result : ", result);
        const res = result.statusMsg;
        setStatusMsg(res);
        console.log(res);
      } else {
        setForgotPasswordError(result.message || "Form submission failed");
        console.error("Form submission failed", result);
      }
    } catch (error: any) {
      console.error("An unexpected error occurred: ", error.message || error);
    }
  };

  useEffect(() => {
    if (statusMsg === "success") {
      navigate("/verifyreset");
    }
  }, [statusMsg]);

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
              <h2 className="typography-h4 ">Forgot Password</h2>
              <p className="">Enter your email for verification 📩</p>
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
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-primaryMain h-12 rounded-lg text-white text-sm "
            >
              {isSubmitting ? <Spinner /> : "Send Reset code via email"}
            </button>

            <Link to="/signin">
              <p>Back to Login 👈</p>
            </Link>
            {forgotPasswordError && <InputError error={forgotPasswordError} />}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
