import React, { useState, useEffect } from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './../components/Navbar'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../AuthContext';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://hack-the-north-frontend-dev-api.vercel.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log('Login Response:', response);

            if (response.ok) {
                const data = await response.json();
                login(data.token);
                navigate('/');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="card login-container">
                <div className="card-body">
                    <h2 className="card-title">Dashboard Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else 🔐</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <small id="passwordHelp" className="form-text text-muted">Make sure to keep this a secret 🤫</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <Footer login={true} />
        </>
    );
}

export default Login;
