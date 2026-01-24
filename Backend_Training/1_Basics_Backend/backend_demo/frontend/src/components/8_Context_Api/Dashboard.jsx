import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  console.log("📊 Dashboard rendered | user =", user);

  return (
    <div style={{ border: "2px solid blue", padding: 12, marginTop: 10 }}>
      <h2>Dashboard Component</h2>

      {user ? (
        <p>🎯 Welcome {user.name}, you are a {user.role}.</p>
      ) : (
        <p>🔒 Please login to see dashboard content.</p>
      )}
    </div>
  );
}

export default Dashboard;
