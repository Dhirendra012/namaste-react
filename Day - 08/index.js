import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";

/*
--> Header
    - Logo 
    - Nav Items
--> Body
    - Search
    - RestaurantContainer
      - RestaurantCard
        - Name of Res , star Rating , cuisine , delay time
--> Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const AppLayout = () =>
{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter
(
    [
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <Body/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu/>,
                },
            ],
            errorElement: <Error/>
        },
        
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);