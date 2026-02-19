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

    await axios.post("https://jsonplaceholder.typicode.com/users", {
      name,
      email,
    });
// await axios.post("https://jsonplaceholder.typicode.com/users", {
//       name,
//       email,
//     });

    console.log("✅ User saved, refreshing Redux state");

    // 🔥 IMPORTANT LINE
    dispatch(fetchUsers());
  }

  return (
    <div>
      <h3>Add User</h3>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
}

export default AddUser;
