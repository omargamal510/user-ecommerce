import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterResponse, ResetCode } from "../../types/auth";
import InputError from "../../ui/InputError/InputError";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Spinner from "../../ui/Spinner/Spinner";
import DarkModeList from "../../components/DarkModeList.tsx/DarkModeList";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function VerifyReset() {
  const [loginError, setLoginError] = useState<string>("");

  // Schema with validation for non-empty reset code
  const resetCodeSchema = z.object({
    resetCode: z.string().min(1, { message: "Reset code is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetCode>({
    resolver: zodResolver(resetCodeSchema),
  });

  const onSubmit = async (data: ResetCode) => {
    console.log("Form Data:", data); // Debug to check form data
    try {
      const response = await fetch(`${baseUrl}/auth/verifyResetCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Ensure this is properly populated
      });

      const result: RegisterResponse = await response.json();

      if (response.ok) {
        console.log("Reset code verified successfully:", result);
      } else {
        setLoginError(result.message || "Form submission failed");
        console.error("Form submission failed", result);
      }
    } catch (error: any) {
      console.error("An unexpected error occurred: ", error.message || error);
      setLoginError("An unexpected error occurred. Please try again.");
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
              <h2 className="typography-h4">Reset Code</h2>
              <p>Verify your reset code</p>
            </div>
            <div className="relative">
              <input
                type="text"
                className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs bg-mainWhite dark:bg-darkBg dark:border-textSecondary dark:text-white"
                {...register("resetCode")}
              />
              <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-mainWhite text-textSecondary dark:bg-darkBg">
                Reset code
              </label>
              {errors.resetCode && (
                <InputError error={errors.resetCode.message} />
              )}
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-primaryMain h-12 rounded-lg text-white text-sm"
            >
              {isSubmitting ? <Spinner /> : "Verify Reset Code"}{" "}
              {/* Fix typo */}
            </button>
          </form>
          {loginError && <InputError error={loginError} />}
        </div>
      </div>
    </div>
  );
}

export default VerifyReset;
