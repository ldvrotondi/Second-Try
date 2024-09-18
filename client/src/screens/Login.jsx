import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', { user_id: username, password: password });

            const token = response.data.token;
            console.log(token);

            if (token) {
                // Store the token in localStorage for future authenticated requests
                localStorage.setItem('token', token);

                // Set login state to true to trigger redirection
                setIsLoggedIn(true);
            }
        } catch (error) {
            // Handle login error
            setError('Invalid username or password');
            console.error('Login error:', error);
        }
    };

    // If logged in, redirect to the dashboard
    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Login</h3>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 text-light">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
