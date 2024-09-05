import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterData, RegisterResponse } from "../../types/register";
import TokenContext from "../../contexts/TokenContext";
import InputError from "../../ui/InputError";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import DarkModeList from "../../components/DarkModeList.tsx/DarkModeList";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function Register() {
  const { setToken } = useContext(TokenContext);
  const [registerError, setRegisterError] = useState<string>("");

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
        setToken(result.token);
        console.log("Registration success", result);
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
            <div className="flex-col flex gap-2 mb-10">
              <h2 className="typography-h4 text-textPrimary">Welcome👋</h2>
              <p className="text-textSecondary">Register to join us now!</p>
            </div>

            <div className="relative">
              <input
                type="text"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                {...register("name")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                Name
              </label>
              {errors.name && <InputError error={errors.name.message} />}
            </div>

            <div className="relative">
              <input
                type="text"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                {...register("email")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                Email
              </label>
              {errors.email && <InputError error={errors.email.message} />}
            </div>

            <div className="relative">
              <input
                type="password"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                {...register("password")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                Password
              </label>
              {errors.password && (
                <InputError error={errors.password.message} />
              )}
            </div>

            <div className="relative">
              <input
                type="password"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                {...register("rePassword")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                Confirm Password
              </label>
              {errors.rePassword && (
                <InputError error={errors.rePassword.message} />
              )}
            </div>

            <div className="relative">
              <input
                type="tel"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                {...register("phone")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                Phone
              </label>
              {errors.phone && <InputError error={errors.phone.message} />}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-primaryMain h-12 rounded-lg text-white text-sm"
            >
              {isSubmitting ? <Spinner /> : "Submit"}
            </button>

            <DarkModeList />

            {registerError && <InputError error={registerError} />}
          </form>
        </div>

        <div className="register-image w-1/2 h-screen overflow-hidden hidden md:block">
          <img src="grid.jpg" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Register;
