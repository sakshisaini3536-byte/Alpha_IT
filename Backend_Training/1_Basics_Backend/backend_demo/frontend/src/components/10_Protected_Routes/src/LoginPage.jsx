import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("🔑 LoginPage rendered");

  function handleLogin() {
    login();
    navigate("/dashboard"); // redirect after login
  }

  if (isAuth) {
    console.log("➡️ Already logged in, redirecting");
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
