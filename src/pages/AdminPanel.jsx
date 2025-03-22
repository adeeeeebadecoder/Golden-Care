import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const { user, logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/users", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const deleteUser = async (userId) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/admin/users/${userId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setUsers(users.filter((u) => u._id !== userId));
        } catch (error) {
            console.error("Error deleting user", error);
        }
    };

    const changeRole = async (userId, newRole) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/admin/users/${userId}`,
                { role: newRole },
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            setUsers(users.map((u) => (u._id === userId ? response.data : u)));
        } catch (error) {
            console.error("Error updating user role", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-teal-600">Admin Panel</h2>
                <p className="text-center text-gray-500">Manage users with ease</p>

                <ul className="mt-2 bg-gray-50 p-4 rounded-lg">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <li key={user._id} className="text-gray-700 flex justify-between py-2">
                                {user.name} ({user.role})
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-700">No users found.</li>
                    )}
                </ul>


                {loading ? (
                    <p className="text-center mt-4 text-gray-600">Loading users...</p>
                ) : (
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full border border-gray-200 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Email</th>
                                    <th className="p-3 text-center">Role</th>
                                    <th className="p-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr key={u._id} className="border-b">
                                        <td className="p-3">{u.name}</td>
                                        <td className="p-3">{u.email}</td>
                                        <td className="p-3 text-center">{u.role}</td>
                                        <td className="p-3 flex justify-center gap-2">
                                            <button
                                                onClick={() => changeRole(u._id, u.role === "admin" ? "user" : "admin")}
                                                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                            >
                                                {u.role === "admin" ? "Demote" : "Promote"}
                                            </button>
                                            <button
                                                onClick={() => deleteUser(u._id)}
                                                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* <button
                    onClick={logout}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button> */}
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        navigate("/login");
                    }}
                    className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminPanel;
