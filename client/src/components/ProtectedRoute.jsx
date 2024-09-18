import React from 'react';
import { Navigate } from 'react-router-dom';

// protect routes from unquthorized users
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); 

    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;