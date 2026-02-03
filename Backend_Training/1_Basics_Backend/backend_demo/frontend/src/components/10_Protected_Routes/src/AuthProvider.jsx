import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  console.log("🔄 AuthProvider rendered | user =", user);

  function login() {
    console.log("🔐 login() called");
    setUser({ name: "Manish" });
  }

  function logout() {
    console.log("🚪 logout() called");
    setUser(null);
  }

  const value = {
    user,
    isAuth: !!user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
