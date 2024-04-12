import RestaurantCard from "./RestaurantCard";
import resArr from "../utilities/mockData";
import { useState } from "react";

const Body = () =>
{
    // -> Local state variable - Very Powerful
    const [resList , setreslist] = useState(resArr);

    return (
       <div className="body">
        <div className="filter">
            <button className="filter-btn"
                onClick={() => 
                {
                    // const res = resArr.filter((res) => res.info.avgRating > 4);
                    setreslist(resArr.filter((res) => res.info.avgRating > 4.2));
                }}
            > Top Rated Restaurant </button>
        </div>
        <div className="res-container">
            {
              resList.map((restuarant) => <RestaurantCard key={restuarant.info.id} resData ={restuarant}/>)
            }
        </div>
       </div> 
    );
}

export default Body;