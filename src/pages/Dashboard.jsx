import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    // const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }

    // return (
    //     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    //         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    //             <h2 className="text-2xl font-bold text-center text-teal-600">User Dashboard</h2>
    //             <p className="text-center mt-2">Welcome, {user?.name}!</p>
    //             <p className="text-center text-gray-500">Role: {user?.role}</p>

    //             <button
    //                 onClick={logout}
    //                 className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
    //             >
    //                 Logout
    //             </button>
    //         </div>
    //     </div>
    // );

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-teal-600 text-center">Welcome, {}</h2>
                <p className="text-gray-700 text-center">Role: {user.role}</p>

                <div className="mt-6">
                    <h3 className="text-xl font-bold">Your Appointments</h3>
                    <ul className="mt-2 bg-gray-50 p-4 rounded-lg">
                        <li className="text-gray-700">No appointments yet.</li>
                    </ul>
                </div>

                <button
                    onClick={handleLogout}
                    className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
