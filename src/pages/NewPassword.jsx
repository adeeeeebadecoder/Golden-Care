import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewPassword = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/reset-password", { newPassword, token });
            setMessage(response.data.message);
            console.log(response.data.message);

        } catch (error) {
            console.log(error);
            setMessage("Error resetting password.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold">Enter New Password</h2>
                <form onSubmit={handleReset}>
                    <input
                        type="password"
                        placeholder="New password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="border p-2 w-full mt-2"
                        required
                    />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-4">Reset Password</button>
                </form>
                {message && <p className="text-green-500 mt-2">{message}</p>}
            </div>
        </div>
    );
};

export default NewPassword;
