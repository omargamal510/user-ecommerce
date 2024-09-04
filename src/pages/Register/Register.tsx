import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterData, RegisterResponse } from "../../types/register";
import TokenContext from "../../contexts/TokenContext";
import InputError from "../../ui/InputError";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function Register() {
  //   const [darkMode, setDarkMode] = useState<boolean>(false);

  //   function handleDarkMode(): void {
  //     setDarkMode((p) => !p);
  //   }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // console.log(errors);

  // function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  // }

  const { setToken } = useContext(TokenContext);
  const [registerError, setRegisterError] = useState<string | any>("");

  // const schema = Yup.object().shape({
  //   name: Yup.string()
  //     .matches(/^\w{4,}$/, "name must be more than 3 characters")
  //     .required("Name is required"),
  //   email: Yup.string().email("Invalid email").required("Email is required"),
  //   password: Yup.string()
  //     .matches(/^[A-Z]/, "Password must start with an uppercase letter")
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Password is required"),

  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password")], "Passwords must match")
  //     .required("confirm password is required"),

  //   phone: Yup.string()
  //     .matches(/^\d{11}$/, "Phone number must be exactly 10 digits")
  //     .required("Phone number is required"),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = async (data: RegisterData) => {
    try {
      const response = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(data);
      const result: RegisterResponse = await response.json();

      if (response.ok) {
        setToken(result.token);
      } else {
        console.error("Form submission failed");
        setRegisterError(result.message);
        console.log(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="register">
        <div className="register-container flex justify-center">
          <div className="register-form flex flex-col justify-center items-center w-full md:w-1/2 h-screen gap-6p-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-col flex gap-6 p-10"
            >
              <div className="flex-col flex gap-2 mb-10">
                <h2 className="typography-h4 text-textPrimary">Welcome👋</h2>
                <p className="text-textSecondary">Register to join us now !</p>
              </div>

              <div className="relative">
                {" "}
                <input
                  type="text"
                  className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                  {...register("name", { required: "Name is required" })}
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Name
                </label>
                {errors.name && <InputError error={errors.name?.message} />}
              </div>

              <div className="relative">
                {" "}
                <input
                  type="text"
                  className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                  {...register("email", { required: "Email is required" })}
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Email
                </label>
                {errors.email && <InputError error={errors.email?.message} />}
              </div>

              <div className="relative">
                {" "}
                <input
                  type="password"
                  className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Password
                </label>
                {errors.password && (
                  <InputError error={errors.password?.message} />
                )}
              </div>

              <div className="relative">
                {" "}
                <input
                  type="password"
                  className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                  {...register("confirmPassword", {
                    required: "confirm password is required",
                  })}
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Confirm Password
                </label>
                {errors.confirmPassword && (
                  <InputError error={errors.confirmPassword?.message} />
                )}
              </div>

              <div className="relative">
                <input
                  type="number"
                  className="border h-10 md:h-12 lg:h-14 w-72 sm:w-96 md:w-80 lg:w-96 rounded-lg focus:outline-none px-4 text-xs"
                  {...register("phone", {
                    required: "phone is required",
                  })}
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Phone
                </label>
                {errors.phone && <InputError error={errors.phone?.message} />}
              </div>

              <button
                type="submit"
                className="bg-primaryMain h-12 rounded-lg text-white text-sm"
              >
                Submit
              </button>

              {registerError && <InputError error={registerError} />}
            </form>
          </div>

          <div className="register-image w-1/2 h-screen overflow-hidden hidden md:block">
            <img src="grid.jpg" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   function handleDarkMode(): void {
//     setDarkMode((p) => !p);
//   }

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm();

// console.log(errors);

// function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
//   e.preventDefault();
// }

{
  /* <div className={`${darkMode && "dark"}`}>
        <h1 className="text-red-500 dark:text-white">Hello motherfucker</h1>

        <button
          onClick={handleDarkMode}
          className="bg-white text-red-500 dark:bg-red-500 dark:text-white"
        >
          DTL
        </button>
      </div> */
}
