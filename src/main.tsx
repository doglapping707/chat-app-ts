import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Home from './pages/Home'
import Error from './pages/Error'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "/chat",
        element: <Chat />,
        errorElement: <Error />,
    },
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
