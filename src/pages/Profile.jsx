import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, Navigate } from 'react-router';

const Profile = () => {

    const { user } = use(AuthContext);

    if (!user){
        return <Navigate to={'/login'}></Navigate>;
    }

    return (
        <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center py-10 px-4">

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">

                <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
                />

                <div>
                    <span className="text-lg font-bold mb-2">User Name: </span>
                    <h2 className="text-lg font-semibold mb-2">
                    {user.displayName}</h2>
                </div>
                <p className="text-sm font-semibold text-gray-600 mb-4">
                    <span className="text-sm text-black mb-4">Email: </span>
                    {user.email}</p>

                <Link to='/updateProfile'>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Update Profile
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Profile;