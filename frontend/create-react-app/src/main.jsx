import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App.jsx';
import Login from './pages/Login.jsx';
import './index.css';
import { AuthProvider } from './AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Route path="/" element={<Outlet />} />
        </RouterProvider>
      </AuthProvider>
    </React.StrictMode>
);
