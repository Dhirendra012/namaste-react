import { useEffect, useState } from "react";
import { MENU_URL } from "../utilities/contants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";

const RestaurantMenu = () =>
{
    const [ resInfo , setResInfo ] = useState(null);
    useEffect(() => { fetchMenu(); } , []);

    const { resId } = useParams();

    const fetchMenu = async () =>
    {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data);
    }

    if(resInfo === null){ return <ShimmerUI/>; }
    
    const { name , cuisines } = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
        </div>
    )
}

export default RestaurantMenu;