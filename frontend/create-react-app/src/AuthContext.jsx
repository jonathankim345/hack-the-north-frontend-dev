import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const isTokenExpired = (token) => {
        try {
            if (!token) {
                console.log('Token is null, consider it expired');
                return true; // Token is null, consider it expired
            }
            const decodedToken = jwtDecode(token);
            const isExpired = Date.now() >= decodedToken.exp * 1000;
            console.log('Token Expiry:', decodedToken.exp * 1000, 'Current Time:', Date.now());
            return isExpired;
        } catch (error) {
            console.error('Error decoding token:', error);
            return true;
        }
    };

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
        console.log('Token:', newToken); // Log the token to verify
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const isLoggedIn = !!token && !isTokenExpired(token);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
