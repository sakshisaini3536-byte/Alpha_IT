import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./3_Async_Thunks_Slice";
import { useEffect } from "react";

function Users() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  console.log("👥 Users component rendered");

  // ⭐ AUTO FETCH ON PAGE LOAD
  useEffect(() => {
    console.log("🚀 Page opened → Fetching users from database");
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users List</h2>

      {loading && <p>⏳ Loading users...</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default Users;
