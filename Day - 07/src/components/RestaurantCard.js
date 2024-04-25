import { CDN_URL } from "../utilities/contants";

const RestaurantCard = (props) =>
{
    const { resData } = props;
    const { name , cuisines , avgRating ,sla } = resData?.info;

    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={ CDN_URL + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{sla.slaString} Minutes</h4>
        </div>
    );
}

export default RestaurantCard;