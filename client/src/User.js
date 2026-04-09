import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({}); 

  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      console.log("Data received:", res.data);
      setUsers(res.data);
    } catch (err) {
      console.log("Error fetching users:", err);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      fetchUsers(); 
    } catch (err) {
      console.log("Error deleting user:", err);
    }
  };

  // Start editing user
  const startEdit = (user) => {
    setEditingId(user.id);
    setEditData({ ...user });
  };

  
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  
  const saveEdit = async (id) => {
    try {
     axios.put(`http://localhost:3001/users/${id}`, editData)
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      console.log("Error updating user:", err);
    }
  };

 
  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  return (
    <div>
      <h1 className="user-list"user-list>Users List</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>
                  {editingId === user.id ? (
                    <input type="text" name="username" value={editData.username} onChange={handleChange} />) : (user.username)}
                </td>

                <td>
                  {editingId === user.id ? (
                    <input type="text" name="password" value={editData.password} onChange={handleChange}/>) : (user.password )}
                </td>

                <td>
                  {editingId === user.id ? (
                    <input type="email" name="email" value={editData.email} onChange={handleChange}/>) : ( user.email )}
                </td>

                <td>
                  {editingId === user.id ? (
                    <input type="text" name="phone_number" value={editData.phone_number} onChange={handleChange} />) : ( user.phone_number )}
                </td>

                <td>
                  {editingId === user.id ? (
                    <>
                      <button className="save" onClick={() => saveEdit(editingId)}>Save</button>
                      <button className="cancel" onClick={cancelEdit}>Cancel</button>
                    </>) : 
                    (<>
                      <button className="edit" onClick={() => startEdit(user)}>Edit</button>
                      <button className="delete" onClick={() => deleteUser(user.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;