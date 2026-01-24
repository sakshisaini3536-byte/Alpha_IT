import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, login, logout } = useContext(UserContext);

  console.log("👤 Profile rendered | user =", user);

  return (
    <div style={{ border: "2px solid green", padding: 12, marginTop: 10 }}>
      <h2>Profile Component</h2>

      {user ? (
        <>
          <p>✅ Logged in as: {user.name}</p>
          <p>Role: {user.role}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>❌ Not logged in</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default Profile;
