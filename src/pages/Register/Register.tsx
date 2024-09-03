import { useState } from "react";
import { useForm } from "react-hook-form";

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

  return (
    <>
      {/* <div className={`${darkMode && "dark"}`}>
        <h1 className="text-red-500 dark:text-white">Hello motherfucker</h1>

        <button
          onClick={handleDarkMode}
          className="bg-white text-red-500 dark:bg-red-500 dark:text-white"
        >
          DTL
        </button>
      </div> */}

      <div className="register">
        <div className="register-container flex justify-center">
          <div className="register-form flex flex-col justify-center items-center  w-full h-screen gap-6 border-2">
            <form className="flex-col flex gap-6">
              <div className="flex-col flex gap-2 mb-10">
                {" "}
                <h2 className="typography-h4 text-textPrimary">Welcome👋</h2>
                <p className="text-textSecondary">Register to join us now !</p>
              </div>

              <div className="relative">
                {" "}
                <input
                  type="text"
                  className="border h-14 w-96 rounded-lg self-start focus:outline-none px-4 text-xs"
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Name
                </label>
              </div>

              <div className="relative">
                {" "}
                <input
                  type="text"
                  className="border h-14 w-96 rounded-lg self-start focus:outline-none px-4 text-xs"
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Email
                </label>
              </div>

              <div className="relative">
                {" "}
                <input
                  type="password"
                  className="border h-14 w-96 rounded-lg self-start focus:outline-none px-4 text-xs"
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Password
                </label>
              </div>

              <div className="relative">
                {" "}
                <input
                  type="password"
                  className="border h-14 w-96 rounded-lg self-start focus:outline-none px-4 text-xs"
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Re-Password
                </label>
              </div>

              <div className="relative">
                {" "}
                <input
                  type="number"
                  className="border h-14 w-96 rounded-lg self-start focus:outline-none px-4 text-xs"
                />
                <label className="components-input-label absolute left-3 top-[-5px] px-2 bg-white text-textSecondary">
                  Phone
                </label>
              </div>

              <button
                type="submit"
                className="bg-primaryMain h-12 rounded-lg text-white text-sm"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="register-image w-full  overflow-hidden">
            <img src="grid.jpg" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
