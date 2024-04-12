import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

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
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);