import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utilities/useRestaurantMenu";

const RestaurantMenu = () =>
{
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

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