import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = useSelector((store: any) => store.auth.token);

  if (!token) {
    // Redirect to sign-in page if not authenticated
    return <Navigate to="/signin" />;
  }

  // Render the element if authenticated
  return children;
}

export default PrivateRoute;
