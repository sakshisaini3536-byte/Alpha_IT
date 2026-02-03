import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  console.log("🛡 ProtectedRoute | isAuth =", isAuth);

  if (!isAuth) {
    console.log("🚫 Access denied → redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  console.log("✅ Access granted");
  return children;
}

export default ProtectedRoute;
