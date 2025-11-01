import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Main from '../Layout/Main';
import Register from '../Components/Register';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Main />,
            children:[
                {
                    path:"/register",
                    element: <Register />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;