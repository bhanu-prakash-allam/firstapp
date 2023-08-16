import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { HttpService } from "../services/HttpService";
import AuthService from '../services/AuthService';


function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const service = HttpService();
    const authService=AuthService();
    const [registerred, setRegisterred] = useState(null);
    const [registrationStatus, setRegistrationStatus] = useState('');
    const handleRegister = async(e) => {
        e.preventDefault();
        let start=new Date().getMilliseconds();
        const isValid = await authService.isValidRegistration(username, password);
        let end=new Date().getMilliseconds();
        let totel=end-start;
        console.log("time taken start "+start)
        console.log("time taken end "+end)
        console.log("time taken totel "+totel)
        // const isValid=authService.isValidRegistration(username,password);
        setRegistrationStatus(isValid ? "Registered successfully!" : "User Already exists.");
        setRegisterred(isValid)

    };
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="card border-primary">
                    <div className="card-body">
                        <h3 className="card-title text-center text-info">Register</h3>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label htmlFor="username" className='text-dark'>Username</label>
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
                                <label htmlFor="password" className='text-dark'>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div >
                            <div className="form-group">
                                <label htmlFor="email" className='text-dark'>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div >
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mt-3">
                                    Register
                                </button>
                            </div>
                            <div className="text-center">
                                <Link to='/login' className="mx-2"> Login ? </Link>
                            </div>

                        </form>
                        {registerred !== null && (
                            <div className="text-center mt-3">
                                <h3 className='text-danger'>{registrationStatus}</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Register;