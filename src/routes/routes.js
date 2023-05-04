
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import Layout from "../components/layout/layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }
        ]
    },
]);