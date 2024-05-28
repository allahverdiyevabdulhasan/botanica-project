import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [checked, setChecked] = useState(false);

    const [showPassword, setShowPassword] = useState({
        password1: false,
        password2: false,
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <div className='login'>
            <div className='left'></div>
            <div className='right'>
                <div className="logo mb-5">
                    <img src={logo} alt="logo" />
                </div>
                <div className="right-content">
                    <h5>Welcome back!</h5>
                    <p>
                        Already have an account?
                        <span>
                            <NavLink to={"/register"}>Sign up</NavLink>
                        </span>
                    </p>
                </div>

                <form>
                    <div className="wrapper">
                        <div className="input-data">
                            <input
                                type="text"
                                name="username"
                                required
                            />
                            <label>Username</label>
                        </div>

                        <div className="input-data mt-4">
                            <input
                                type={showPassword.password2 ? "text" : "password"}
                                name="password"
                                required
                            />
                            <div
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility("password2")}
                            >
                                {showPassword.password2 ? (
                                    <FaEyeSlash style={{ color: 'black' }} />
                                ) : (
                                    <FaEye style={{ color: 'black' }} />
                                )}
                            </div>
                            <label>Password</label>
                        </div>

                        <div className="d-flex justify-content-between pt-4 form-remember">
                            <div className="d-flex gap-2">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        defaultChecked={checked}
                                        onChange={() => setChecked((state) => !state)}
                                    />
                                    <span className="checkmark me-2"></span>
                                    Remember me
                                </label>
                            </div>
                            <p className="mb-0">
                                <NavLink to={"/reset_password"}>
                                    Forgot your password?
                                </NavLink>
                            </p>
                        </div>

                        <div className="pt-4">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
