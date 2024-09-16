import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();

  const { token } = useContext(TokenContext);

  if (!token) {
    // Redirect to sign-in page if not authenticated
    return <Navigate to="/signin" />;
  }

  // Render the element if authenticated
  return children;
}

export default PrivateRoute;
