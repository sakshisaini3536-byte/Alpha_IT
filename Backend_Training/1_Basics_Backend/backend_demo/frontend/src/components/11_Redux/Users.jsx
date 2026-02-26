import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  deleteUser,
  updateUser,
} from "./3_Async_Thunks_Slice";

function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  function startEdit(user) {
    setEditingId(user._id);
    setEditName(user.name);
    setEditEmail(user.email);
  }

  function saveEdit(id) {
    dispatch(
      updateUser({
        id,
        updatedData: {
          name: editName,
          email: editEmail,
        },
      })
    );

    setEditingId(null);
  }

  return (
    <div>
      <h3>Users List</h3>

      {loading && <p>Loading...</p>}

      {users.map((user) => (
        <div key={user._id} className="user-item">
          <div className="user-info">
            {editingId === user._id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              </>
            ) : (
              <p>
                {user.name} - {user.email}
              </p>
            )}
          </div>

          <div className="user-actions">
            {editingId === user._id ? (
              <button
                className="save"
                onClick={() => saveEdit(user._id)}
              >
                Save
              </button>
            ) : (
              <>
                <button
                  className="edit"
                  onClick={() => startEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() =>
                    dispatch(deleteUser(user._id))
                  }
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;