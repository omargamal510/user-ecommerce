import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface PrivateRouteProps {
  element: JSX.Element;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();

  return element;
  //   return isAuthenticated ? element : <Navigate to="/signin" />;
}

export default PrivateRoute;
