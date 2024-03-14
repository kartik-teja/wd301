import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    404 Page Not Found
                </h2>
                <div className="flex justify-center items-center">
                    <Link to="/home"
                        id="backToHomeButton"
                        className=" flex w-full bg-gray-700 justify-center items-center hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray">
                        Homepage
                    </Link>
                </div>
            </div>

        </div>);
};
export default NotFound;
