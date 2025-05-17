import { createBrowserRouter } from "react-router-dom";


import About from "../Pages/About/About";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            children: [
                {
                    path:"/",
                    element: <Home></Home>
                },
                {
                    path:"/home",
                    element: <Home></Home>
                },
                {
                    path:"/about",
                    element: <About></About>
                },
                {
                    path:"/contact",
                    element: <Contact></Contact>
                },

            ],
        },
        {
            path:"*",
            element:<NotFound></NotFound>
        },
]);
export default router