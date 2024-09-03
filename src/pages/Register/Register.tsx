import { useState } from "react";

function Register() {
  //   const [darkMode, setDarkMode] = useState<boolean>(false);

  //   function handleDarkMode(): void {
  //     setDarkMode((p) => !p);
  //   }

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
          <div className="register-form flex justify-center items-center border-2 w-full h-screen">
            <p className="typography-h4">Form</p>
          </div>

          <div className="register-image flex justify-center items-center border-2 w-full">
            {" "}
            <p>image</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
