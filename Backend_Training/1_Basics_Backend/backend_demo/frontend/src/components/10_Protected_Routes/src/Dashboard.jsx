import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  console.log("📊 Dashboard rendered | user =", user);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
