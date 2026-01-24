import { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  console.log("🔄 UserProvider rendered | user =", user);

  function login() {
    console.log("🔐 login() called");
    setUser({ name: "Manish", role: "Developer" });
  }

  function logout() {
    console.log("🚪 logout() called");
    setUser(null);
  }

  const value = { user, login, logout };
  console.log("📦 Provider value =", value);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
