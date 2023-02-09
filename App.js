import React from "react";
import ReactDOM  from "react-dom/client";


const Logo =() =>{
   return (
    <a href="/">
    <img alt="logo" className="logo" src="https://s3.amazonaws.com/zaubatrademarks/f112b91b-ddb5-4696-9e73-9a7c7fc6078a.png" />
    </a>
   )
}

const Header = () => {
    return (
    <div className="header">
    <Logo />
    <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
    </ul>
    </div>
    </div>
    ) 
    
}

const restaurantList=[
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "12450",
        "name": "Irani Cafe",
        "uuid": "6bf4589c-786a-40b1-975a-e1b303b23983",
        "city": "6",
        "area": "Viman Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "j67fufyvkxtqbfgfuhi2",
        "cuisines": [
          "Bakery",
          "Snacks",
          "Fast Food",
          "Desserts",
          "Beverages",
          "Indian",
          "Street Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "irani-cafe-viman-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Shop 3,Opposite Rosary school,Viman nagar,Pune",
        "locality": "Near Rosary School",
        "parentId": 4057,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5662271~p=1~eid=00000185-a8d0-45cb-2f54-25f800250116",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "12450",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "6507",
        "name": "Chai Shai",
        "uuid": "654c7e33-e098-4be6-a0ac-e673dc32240c",
        "city": "6",
        "area": "Viman Nagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "r0ibrabfocgncbnqw4yv",
        "cuisines": [
          "Beverages",
          "Desserts",
          "Maharashtrian"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "chai-shai-next-to-ccd-cafe-coffee-day-symbiosis-branch-viman-nagar-viman-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Shop 8, Shraddha Terrace,Viman Nagar, Pune",
        "locality": "next to CCD (cafe coffee day ) Symbiosis Branch viman nagar",
        "parentId": 6504,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "30% off",
          "shortDescriptionList": [
            {
              "meta": "30% off | Use MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "30% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "6507",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "4749",
        "name": "Cafe Peter",
        "uuid": "b2bc993e-1e45-4056-885c-65ad6d884ada",
        "city": "6",
        "area": "Viman Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "kxeskzhcltj8gcuxsryc",
        "cuisines": [
          "Desserts",
          "Continental",
          "Korean"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "cafe-peterdonuts-viman-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Anand Square, Opposite Symbosis International College, Viman Nagar, Pune",
        "locality": "Anand Square",
        "parentId": 10635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "30% off",
          "shortDescriptionList": [
            {
              "meta": "30% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "30% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "4749",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "607566",
        "name": "Sancks circle",
        "uuid": "48c8cbb6-7d39-4427-a0d4-d7838a00240e",
        "city": "6",
        "area": "Viman Nagar",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "horz6mqsxjcswzlmnovy",
        "cuisines": [
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 16000,
        "costForTwoString": "₹160 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "sancks-circle-viman-nagar-viman-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "3, Survey Number 235, Sanjay Park, Pune, Maharashtra 411032, India",
        "locality": "Sanjay Park",
        "parentId": 361494,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "607566",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    }
]

//Optional chaining

const RestaurantCard =({name, cuisines, cloudinaryImageId, lastMileTravelString}) =>{
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} away</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="restaurant-list">
            {
              restaurantList.map(restaurant =>{
                return (
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                )
              })  
            }
        </div>
    )
}

const Footer = () =>{
    return(
        <h4>Footer</h4>
    )
}

const AppLayout = () =>{
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)