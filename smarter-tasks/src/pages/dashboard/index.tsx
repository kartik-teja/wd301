// Import necessary modules
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const checkAuthentication = () => {
        const LoggedIn = localStorage.getItem('userData');
        if (!LoggedIn) {
            navigate('/signin');
        }
    };

    useEffect(() => {
        checkAuthentication();
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/signin');
    };

    const user = JSON.parse(localStorage.getItem('userData') || '{}');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
                {/* Display user information */}
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                {/* Logout link */}
                <button id="logout-link" onClick={handleLogout} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Logout</button>
            </div>
        </div>
    );
}

export default Dashboard;
