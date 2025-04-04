// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);

//     const fetchUsers = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.get("http://localhost:5000/api/admin/users", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(response.data.users);
//         } catch (err) {
//             console.error(err);
//             toast.error("Failed to fetch users");
//         }
//     };

//     const handleRoleChange = async (userId, newRole) => {
//         try {
//             const token = localStorage.getItem("token");
//             await axios.put(
//                 `http://localhost:5000/api/admin/update-role/${userId}`,
//                 { role: newRole },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             toast.success("Role updated");
//             fetchUsers();
//         } catch (err) {
//             toast.error("Failed to update role");
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold text-teal-700 mb-4">Admin Dashboard</h2>
//             <table className="w-full border">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border px-4 py-2">Name</th>
//                         <th className="border px-4 py-2">Email</th>
//                         <th className="border px-4 py-2">Current Role</th>
//                         <th className="border px-4 py-2">Change Role</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td className="border px-4 py-2">{user.name}</td>
//                             <td className="border px-4 py-2">{user.email}</td>
//                             <td className="border px-4 py-2">{user.role}</td>
//                             <td className="border px-4 py-2">
//                                 <select
//                                     value={user.role}
//                                     onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                                     className="border rounded px-2 py-1"
//                                 >
//                                     <option value="user">User</option>
//                                     <option value="doctor">Doctor</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const fetchUsers = async () => {
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         const token = localStorage.getItem("token");
    //         const response = await axios.get("http://localhost:5000/api/admin/users", {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    //         setUsers(response.data.users);
    //     } catch (err) {
    //         console.error("Error fetching users:", err);
    //         setError("Failed to fetch users.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:5000/api/admin/users", {
                headers: { Authorization: `Bearer ${token}` },
            });

            // Ensure `users` is always an array
            setUsers(Array.isArray(response.data.users) ? response.data.users : []);

        } catch (err) {
            console.error("Error fetching users:", err);
            setError("Failed to fetch users.");
            setUsers([]); // Set to empty array to avoid `undefined` issues
        } finally {
            setLoading(false);
        }
    };


    // const handleRoleChange = async (userId, newRole) => {
    //     try {
    //         const token = localStorage.getItem("token");

    //         // Optimistically update the UI
    //         setUsers((prevUsers) =>
    //             prevUsers.map((user) =>
    //                 user._id === userId ? { ...user, role: newRole } : user
    //             )
    //         );

    //         await axios.put(
    //             `http://localhost:5000/api/admin/update-role/${userId}`,
    //             { role: newRole },
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );

    //         toast.success("Role updated successfully!");
    //     } catch (err) {
    //         toast.error("Failed to update role.");
    //         console.error("Error updating role:", err);
    //     }
    // };
    const handleRoleChange = async (userId, newRole) => {
        const currentRole = users.find((u) => u._id === userId)?.role;
        if (currentRole === newRole) return; // No change

        try {
            const token = localStorage.getItem("token");
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user._id === userId ? { ...user, role: newRole } : user
                )
            );

            await axios.put(
                `http://localhost:5000/api/admin/update-role/${userId}`,
                { role: newRole },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("Role updated successfully!");
        } catch (err) {
            toast.error("Failed to update role.");
            console.error("Error updating role:", err);
        }
    };



    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Admin Dashboard</h2>

            {loading && <p className="text-gray-600">Loading users...</p>}
            {error && <p className="text-red-600">{error}</p>}

            {!loading && !error && (
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 shadow-lg rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Current Role</th>
                                <th className="border px-4 py-2">Change Role</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{user.name}</td>
                                        <td className="border px-4 py-2">{user.email}</td>
                                        <td className="border px-4 py-2">{user.role}</td>
                                        <td className="border px-4 py-2">
                                            <select
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                                className="border rounded px-2 py-1 bg-white text-gray-700"
                                            >
                                                <option value="user">User</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody> */}
                        {/* <tbody>
                            <tbody>
                                {users && users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user._id}>
                                            <td className="border px-4 py-2">{user.name}</td>
                                            <td className="border px-4 py-2">{user.email}</td>
                                            <td className="border px-4 py-2">{user.role}</td>
                                            <td className="border px-4 py-2">
                                                <select
                                                    value={user.role}
                                                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                                    className="border rounded px-2 py-1"
                                                >
                                                    <option value="user">User</option>
                                                    <option value="doctor">Doctor</option>
                                                    <option value="admin">Admin</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4 text-gray-500">
                                            No users found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>


                        </tbody> */}

                        <tbody>
                            {users && users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td className="border px-4 py-2">{user.name}</td>
                                        <td className="border px-4 py-2">{user.email}</td>
                                        <td className="border px-4 py-2">{user.role}</td>
                                        <td className="border px-4 py-2">
                                            <select
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                                className="border rounded px-2 py-1"
                                            >
                                                <option value="user">User</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
