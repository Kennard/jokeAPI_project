import React from "react";
import ReactDom from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import JokeTypeContainer from "./containers/JokeTypeContainer";
import RandomJokeContainer from "./containers/RandomJokeContainer";
import JokeTypeOptionContainer from "./containers/JokeTypeOptionContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            // {
            //     index: true,
            //     element:<div>Home Page</div>
            // },
            {
                index: true,
                element: <RandomJokeContainer />
            },
            {
                path:"joketype",
                element: <JokeTypeOptionContainer />
            }
        ]
    }
])

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)