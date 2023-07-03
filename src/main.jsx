import React from 'react'

import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import LiveTrack from "./pages/liveTrack/LiveTrack.jsx";
import { GlobalStyle } from "./main.style.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/liveTrack",
        element: <LiveTrack/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle/>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
