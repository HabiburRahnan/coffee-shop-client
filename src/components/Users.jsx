import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const LoadedUsers = useLoaderData();
  const [users, setUsers] = useState(LoadedUsers);
  const handleDelete = (id) => {
    // make sure user confirm to delete

    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          // remove the user form the ui

          const remainingUser = users.filter((user) => user._id !== id);
          setUsers(remainingUser);
        }
      });
  };

  return (
    <div>
      <h2>Users{users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Create At</th>
              <th>last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>{user._id}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
