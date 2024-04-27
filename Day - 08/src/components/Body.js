import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () =>
{
    // -> Local state variable - Very Powerful
    const [resList , setreslist] = useState([]);

    const [filterList , setFilterList] = useState([]);

    const [searchValue , setSearchValue] = useState("");

    useEffect(() => { fetchData(); }, []);

    // Fetching API
    const fetchData = async () => 
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");      
        const json = await data.json();  
        setFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setreslist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return (resList.length === 0) ? <ShimmerUI/> : (
       <div className="body">
        <div className="filter">
            <div className="Search">
                <input 
                    type="text" className="SearchValue" value={searchValue}
                    onChange={ (e)=>{ setSearchValue(e.target.value); }}
                />


                {/*  --> Change at every single character
                    
                    <input 
                    type="text" className="SearchValue" value={searchValue}
                    onChange={ (e)=>{ setSearchValue(e.target.value); 
                        setFilterList(resList.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()))); }
                    }
                /> */}
                
                <button className="Search-btn"
                    onClick={() => {
                        setFilterList(resList.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase())));
                    }}
                >
                    Search
                </button>
            </div>

            <div className="filter2">
                <button className="filter-btn"
                    onClick={() => 
                    {
                        // const res = resArr.filter((res) => res.info.avgRating > 4);
                        setFilterList(filterList.filter((res) => res.info.avgRating > 4.5));
                    }}
                    > Top Rated Restaurant </button>
            </div>
        </div>
        <div className="res-container">
            {
              filterList.map((restuarant) => 
              <Link key={restuarant.info.id} to={"/restaurants/" + restuarant.info.id}>
                <RestaurantCard  resData ={restuarant}/>
              </Link>)
            }
        </div>
       </div> 
    );
}

export default Body;