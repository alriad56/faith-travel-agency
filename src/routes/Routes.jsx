
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";
import Destination from "../components/Destination";

  

export const router = createBrowserRouter([

    {
        path:"/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path:"destination",
                Component: Destination
            },

        ]
    }

])