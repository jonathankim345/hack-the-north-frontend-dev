import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './../AuthContext';

function Navbar() {
    const { isLoggedIn, login, logout } = useAuth();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);

    useEffect(() => {
        setIsUserLoggedIn(isLoggedIn);
    }, [isLoggedIn]);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-0 fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Hack the North Events</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login" onClick={isUserLoggedIn ? handleLogout : null}>
                                {isUserLoggedIn ? "Log Out" : "Log In"}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
