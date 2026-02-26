import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./3_Async_Thunks_Slice";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  async function handleSubmit() {
    console.log("📤 Sending user to backend");

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    await axios.post("http://localhost:5000/api/users", {
      name,
      email,
    });

    console.log("✅ User saved, refreshing Redux state");

    setName("");
    setEmail("");

    dispatch(fetchUsers());
  }

  return (
    <div>
      <h3>Add User</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="primary" onClick={handleSubmit}>
        Add User
      </button>
    </div>
  );
}

export default AddUser;