import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardMessages = () => {
    const [messages, setMessages] = useState([]);
    const token = localStorage.getItem('token'); // Or from your auth context

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/contact', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMessages(res.data);
            } catch (err) {
                console.error('Error fetching messages:', err);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Messages</h2>
            {messages.length === 0 ? (
                <p>No messages found.</p>
            ) : (
                <ul className="space-y-4">
                    {messages.map((msg, index) => (
                        <li key={index} className="border border-gray-200 p-4 rounded-md">
                            <p><strong>Name:</strong> {msg.name}</p>
                            <p><strong>Email:</strong> {msg.email}</p>
                            <p><strong>Message:</strong> {msg.message}</p>
                            <p className="text-sm text-gray-500 mt-1">Received: {new Date(msg.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DashboardMessages;
