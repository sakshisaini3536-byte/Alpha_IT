import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  console.log("🧭 Navbar rendered | user =", user);

  return (
    <div style={{ padding: 10, borderBottom: "2px solid gray" }}>
      <h2>My App</h2>

      {user ? (
        <p>✅ Logged in as: {user.name}</p>
      ) : (
        <p>❌ Not logged in</p>
      )}
    </div>
  );
}

export default Navbar;
