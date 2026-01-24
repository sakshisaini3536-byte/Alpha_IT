import { useState } from "react";
import axios from "axios";

function JWTTokenDemo() {
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  console.log("🔁 App rendered | token =", token, "| profile =", profile);

  async function handleLogin() {
    console.log("🌐 Login button clicked");
    setError("");
    setProfile(null);

    try {
      console.log("➡️ Sending POST /api/login...");
      const res = await axios.post("http://localhost:5000/api/login", {
        username: "manish",
        password: "1234",
      });

      console.log("✅ Login response:", res.data);

      const receivedToken = res.data.token;
      console.log("✅ Token received:", receivedToken);

      setToken(receivedToken);
      alert("✅ Login success! Token stored.");
    } catch (err) {
      console.log("❌ Login error:", err.message);
      console.log("❌ Status:", err.response?.status);
      setError(err.response?.data?.message || "Login failed");
    }
  }

  async function handleFetchProfile() {
    console.log("🌐 Fetch Profile button clicked");
    setError("");

    if (!token) {
      console.log("⚠️ No token found. Please login first.");
      setError("Please login first (token missing).");
      return;
    }

    try {
      console.log("➡️ Sending GET /api/profile with Authorization header...");
      const res = await axios.get("http://localhost:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ Profile response:", res.data);
      setProfile(res.data.user);
    } catch (err) {
      console.log("❌ Profile error:", err.message);
      console.log("❌ Status:", err.response?.status);
      setError(err.response?.data?.message || "Profile fetch failed");
      setProfile(null);
    }
  }

  function handleLogout() {
    console.log("🚪 Logout clicked (client-side)");
    setToken("");
    setProfile(null);
    setError("");
    alert("✅ Logged out (token cleared in frontend).");
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>JWT Auth Demo (React + Axios)</h2>

      <div style={{ marginTop: 10 }}>
        <button onClick={handleLogin}>Login (Get Token)</button>
        <button onClick={handleFetchProfile} style={{ marginLeft: 10 }}>
          Fetch Profile (Protected)
        </button>
        <button onClick={handleLogout} style={{ marginLeft: 10 }}>
          Logout (Clear Token)
        </button>
      </div>

      <div style={{ marginTop: 20, padding: 12, border: "1px solid gray" }}>
        <h3>Token</h3>
        <p>
          {token ? (
            <>
              <b>Stored Token Preview:</b> {token.slice(0, 30)}...
            </>
          ) : (
            "❌ No token stored"
          )}
        </p>
      </div>

      {error && (
        <p style={{ color: "red", marginTop: 10 }}>
          ⚠️ {error}
        </p>
      )}

      <div style={{ marginTop: 20, padding: 12, border: "1px solid gray" }}>
        <h3>Profile Data (from /api/profile)</h3>

        {profile ? (
          <>
            <p><b>Username:</b> {profile.username}</p>
            <p><b>Role:</b> {profile.role}</p>
            <p><b>Issued At (iat):</b> {profile.iat}</p>
            <p><b>Expiry (exp):</b> {profile.exp}</p>
          </>
        ) : (
          <p>🔒 No profile loaded yet</p>
        )}
      </div>
    </div>
  );
}

export default JWTTokenDemo;
