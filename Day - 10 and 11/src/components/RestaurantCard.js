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

export const WithPromotedLabel = (props) =>
{
    const { resData } = props;

    return (
        <div>
            <label className="m-2 p-2 absolute bg-black text-white rounded-lg"> Open </label>
            <RestaurantCard resData={resData} />
        </div>
    );
}


// Higher Order Component takes a component and Enhances it and return it
// I dont know why its not working this time 
// Thats why I am using other simple component 
// export const WithPromotedLabel = (RestaurantCard) =>
// {
//     return (props) => {
//         return (
//             <div>
//                 <label className="m-2 p-2 absolute bg-black text-white rounded-lg"> Open </label>
//                 <RestaurantCard {...props} />
//             </div>
//         )
//     }
// }

export default RestaurantCard;