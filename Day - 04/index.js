import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => 
{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXsP6N_pnnztLypdeYdTBfGwbSxwycBQINFU-WZdQ8w&s"/>    
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>
{
    const { resData } = props;
    const { name , cuisines , avgRatingString ,sla } = resData?.info;

    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} ⭐</h4>
            <h4>{sla.slaString} Minutes</h4>
        </div>
    );
}

const resArr = 
[
        {
          "info": {
            "id": "106055",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "fco6bt4rjqr7hztnqwxo",
            "locality": "Sec 27",
            "areaName": "Sector 27",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4961",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 00:55:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-sec-27-sector-27-chandigarh-106055",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "435686",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "South Chd",
            "areaName": "Sector 26",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 04:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-south-chd-sector-26-chandigarh-435686",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "41230",
            "name": "Chandigarh Flavours",
            "cloudinaryImageId": "rkajxxqff1e5msbcmis9",
            "locality": "Dev Samaj College Road",
            "areaName": "Sector 45",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Beverages",
              "Mughlai",
              "Indian"
            ],
            "avgRating": 4.2,
            "parentId": "8659",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 04:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chandigarh-flavours-dev-samaj-college-road-sector-45-chandigarh-41230",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "41297",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Sector 8",
            "areaName": "Sector 8",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.1,
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-sector-8-chandigarh-41297",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "40897",
            "name": "Captain Sam's Pizza",
            "cloudinaryImageId": "e1a0833bdc40ad1f6fe3185f102c9382",
            "locality": "Madhya Marg",
            "areaName": "Sec 26 Chd",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Beverages",
              "Desserts",
              "Fast Food",
              "Snacks",
              "Pastas"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "382786",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 04:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹199"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/captain-sams-pizza-madhya-marg-sec-26-chd-chandigarh-40897",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "333405",
            "name": "BOSS Burger",
            "cloudinaryImageId": "ssto9tkiu7wbblytfidw",
            "locality": "Madhya Marg",
            "areaName": "Sector 7",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks"
            ],
            "avgRating": 4.2,
            "parentId": "8594",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 00:55:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/boss-burger-madhya-marg-sector-7-chandigarh-333405",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "46710",
            "name": "Roll Xpress",
            "cloudinaryImageId": "43652d4be8d005798ab2d9ada97020c6",
            "locality": "Mohali",
            "areaName": "Sector 67",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Fast Food",
              "Snacks",
              "Biryani",
              "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "170853",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 9.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "9.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Rolls.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Rolls.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/roll-xpress-mohali-sector-67-chandigarh-46710",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "221306",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "Railway Station Chandigarh",
            "areaName": "Sector 22",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "21809",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 43,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Rolls.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Rolls.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-railway-station-sector-22-chandigarh-221306",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "42803",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Sector 22",
            "areaName": "Sector 22",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Healthy Food",
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "2",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-sector-22-chandigarh-42803",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "221310",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
            "locality": "Chandigarh Railway Station",
            "areaName": "Sector 22",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "4444",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-railway-station-sector-22-chandigarh-221310",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "221311",
            "name": "The Good Bowl",
            "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
            "locality": "Railway Station Chandigarh",
            "areaName": "Sector 22",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "7918",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 42,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-railway-station-sector-22-chandigarh-221311",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "221313",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "t3tidwie2ux7aabjrfba",
            "locality": "chandigarh†railway station",
            "areaName": "Sector 22",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Punjabi",
              "Biryani",
              "Healthy Food",
              "Jain",
              "Thalis",
              "Indian",
              "Mughlai",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "4925",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-railway-station-sector-22-chandigarh-221313",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "221307",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
            "locality": "Near Hotel Diamond hotel",
            "areaName": "Sector 22",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Kebabs",
              "Mughlai",
              "Beverages",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "1803",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 39,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Biryani.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Biryani.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/behrouz-biryani-near-hotel-diamond-hotel-sector-22-chandigarh-221307",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "229342",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Phase 3",
            "areaName": "Sector 60",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 8.5,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "8.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-phase-3-sector-60-chandigarh-229342",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "67938",
            "name": "Social",
            "cloudinaryImageId": "lnp9blusapv5d8kpdfnn",
            "locality": "Sector 7",
            "areaName": "Sector 7",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Fast Food",
              "Biryani",
              "Pizzas",
              "Salads",
              "Kebabs",
              "Juices",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "2146",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 39,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 00:58:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/social-sector-7-chandigarh-67938",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "735072",
            "name": "ENSO - Sourdough Pizza by Nomad",
            "cloudinaryImageId": "9e12e438906200daa8f401195ee43115",
            "locality": "Inner Market",
            "areaName": "East Chd",
            "costForTwo": "₹1200 for two",
            "cuisines": [
              "Pizzas",
              "Fast Food",
              "Desserts",
              "Salads",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "77344",
            "avgRatingString": "4.2",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 04:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/enso-sourdough-pizza-by-nomad-inner-market-east-chd-chandigarh-735072",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "538521",
            "name": "The Brooklyn Creamery - Healthy Ice Cream",
            "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
            "locality": "Phase - 5",
            "areaName": "SAS Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Healthy Food"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "236673",
            "avgRatingString": "4.3",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 9.5,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "9.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-phase-5-sas-nagar-chandigarh-538521",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "679694",
            "name": "Nomad Pizza - Traveller Series",
            "cloudinaryImageId": "82294f129e75eac74f6e6a642cd58c06",
            "locality": "Inner Market",
            "areaName": "East Chd",
            "costForTwo": "₹1200 for two",
            "cuisines": [
              "Pizzas",
              "Fast Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "251919",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 04:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nomad-pizza-traveller-series-inner-market-east-chd-chandigarh-679694",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "425443",
            "name": "Lucknowee",
            "cloudinaryImageId": "yetod8lxyx3ap7vhyske",
            "locality": "Madhya Marg",
            "areaName": "Sector 7",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Kebabs"
            ],
            "avgRating": 3.9,
            "parentId": "18581",
            "avgRatingString": "3.9",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 00:57:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/lucknowee-madhya-marg-sector-7-chandigarh-425443",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "342580",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
            "locality": "SAS Nagar",
            "areaName": "Sector 60",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 8.4,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "8.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-12 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-sas-nagar-sector-60-chandigarh-342580",
            "type": "WEBLINK"
          }
        }
]

const resObj = {
    "info": {
      "id": "435686",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "South Chd",
      "areaName": "Sector 26",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.2,
      "parentId": "721",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-12 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-south-chd-sector-26-chandigarh-435686",
      "type": "WEBLINK"
    }
  }

const Body = () =>
{
    return (
       <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
            {/* Props -> Properties
                -> In React props are called as properties which you call pass as argument to a componenet'
                -> This this help component behave synamically 
                -> props in component == Argument in function 
            */}

            {/* <RestaurantCard 
                resName="KFC"
                cuisine="Biriyani, North India, Aisan" /> 
            */}

            {/* 
             --> Passing object as props in a component
                <RestaurantCard resData ={resObj}/>
                <RestaurantCard resData ={resArr[1]}/>
                <RestaurantCard resData ={resArr[2]}/> 
            */}

            {/* 
                Always Use key whenever you loop over list in React
                You can also use index as key but its not good practice
                Not use key << Index as key << unique id as key  
            */}
            {
                resArr.map((restuarant) => <RestaurantCard key={restuarant.info.id} resData ={restuarant}/>)
            }
        </div>
       </div> 
    );
}

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