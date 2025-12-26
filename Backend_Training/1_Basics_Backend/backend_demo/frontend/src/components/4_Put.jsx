import { useEffect, useState } from "react";

function PutExample() {
  const [user, setUser] = useState(null);
  const [newAge, setNewAge] = useState("");

  // 1️⃣ Fetch existing data
  useEffect(() => {
    console.log("🌐 Fetching existing user data...");

    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Existing user data received:", data);
        setUser(data);
        setNewAge(data.age);
      });
  }, []);

  // 2️⃣ Update data using PUT
  function updateUser() {
    console.log("🌐 Sending PUT request with updated age:", newAge);

    fetch("http://localhost:5000/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: Number(newAge),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Updated data received:", data);
        setUser(data.updatedUser);
        alert(data.message);
      });
  }

  if (!user) return <p>Loading user...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>PUT Example (Update Existing Data)</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Age:</b> {user.age}</p>

      <input
        type="number"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
      />

      <br /><br />

      <button onClick={updateUser}>Update Age</button>
    </div>
  );
}

export default PutExample;
