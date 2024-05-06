import { useState } from "react";
import { CDN_URL } from "../utilities/contants";

const RestaurantMenuInfo = ({data , show , setShowInfo}) =>
{ 
    const handleClick = () =>
    {  setShowInfo(); }

    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
                <div className="cursor-pointer flex justify-between"
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                    <span>{show ? "⬆️" : "⬇️"}</span>
                </div>
                {show && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
}

const ItemList = ({items}) =>
{
    return (
       <div>
        { items.map((item) => 
            <div 
                key={items?.card?.info?.id}
                className="p-2 m-2 border-gray-400 border-b-2 flex"
            >
                <div className="w-9/12 flex flex-col justify-items-start m-2 p-2">
                    <span className="m-1 text-left">{item.card.info.name}</span>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <img className="w-3/12 m-2 p-2" src={CDN_URL + item.card.info.imageId}></img>
            </div>)
        }
       </div>
    );
};

export default RestaurantMenuInfo;

