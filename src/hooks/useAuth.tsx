// import { useState, useEffect, useContext } from "react";
// import TokenContext from "../contexts/TokenContext";

// function useAuth() {
//   const { token } = useContext(TokenContext);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//   useEffect(() => {
//     const checkAuth = () => {
//       if (token) {
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, [token]); // Adjusted dependency array
//   return { isAuthenticated };
// }

// export default useAuth;
