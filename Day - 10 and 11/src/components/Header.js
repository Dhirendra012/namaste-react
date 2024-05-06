import { LOGO_URL } from "../utilities/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utilities/useStatus";


const Header = () => 
{
    const [ btnName , setbtnName ] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = { LOGO_URL } />    
            </div>
            <div className="nav-items">
                <ul>
                    <li>User Status : { useStatus ? "🟢" : "🔴" }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login"
                        onClick = {() => { (btnName === "Login") ? setbtnName("Logout") : setbtnName("Login")}}
                    >{btnName}</button>
                </ul> 
            </div>
        </div>  
    )
}

export default Header;