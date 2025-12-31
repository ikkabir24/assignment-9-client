import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import LoadingPage from '../pages/LoadingPage';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const {user, loading} = use(AuthContext);

    const location = useLocation();

    if(loading){
        return <LoadingPage></LoadingPage>;
    }

    // user thakle children dekhabo

    if(user && user?.email){
        return children;
    }

    // user na thakle navigate to login
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};

export default PrivateRoute;