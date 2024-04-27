import { useEffect, useState } from "react";

const UserState = () => 
{
    const [ UserInfo , setUserInfo ] = useState("");

    useEffect(() => { fetchUser(); } , []);
    const fetchUser = async () =>
    {
        const data = await fetch("https://api.github.com/users/Dhirendra012");
        const json = await data.json();
        setUserInfo(json);
    }

    const { name , location , avatar_url } = UserInfo;

    return (
        <div className="user-info">
            <img src={avatar_url}></img>
            <p>Name : {name}</p>
            <p>Location : {location}</p>
            <p>Contact : @sliet.ac.in</p>
        </div>
    )
};

export default UserState;

