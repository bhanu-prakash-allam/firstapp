import React, { useState } from 'react';
// import Greet from './Greet';
// import { HttpService } from '../services/HttpService';
import AuthService from '../services/AuthService';
import { useNavigate,Link } from "react-router-dom";
function Login({ setLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedin, setloggedin] = useState(null);
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();
    // const service = HttpService();
    const authService=AuthService();
    const handleLogin = async (e) => {
        e.preventDefault();
        const isValid = await authService.isValidLogin(username, password)
        setLoginStatus(isValid ? "Login success!" : "Invalid credentials.");
        setloggedin(isValid)
        setLogin(isValid)
        if(isValid)
        {
            navigate('/greet')
        }
        // Add your login logic here
        // For now, let's just display the entered username and password
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="card border-primary">
                    <div className="card-body">
                        <h3 className="card-title text-center text-info">Login</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="username" className="text-dark">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-dark">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mt-3">
                                    Log In
                                </button>
                            </div>
                            <div className="text-center">
                                <Link to='/register' className="mx-2"> Register ? </Link>
                            </div>
                        </form>
                        {loggedin !== null && (
                            <div className="text-center mt-3">
                                <h4 className='text-danger'>{loginStatus}</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
