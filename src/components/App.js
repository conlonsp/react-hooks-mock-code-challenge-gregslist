import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listings => setListings(listings))
  }, [])

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} />
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;

// {
//   "listings": [
//     {
//       "id": 1,
//       "description": "heater",
//       "image": "./images/heater.jpg",
//       "location": "BROOKLYN"
//     },
//     {
//       "id": 2,
//       "description": "2019 Toyota Tacoma grill",
//       "image": "./images/toyota-grill.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 3,
//       "description": "Free Braun 3735 Electric Toothbrush charger",
//       "image": "./images/toothbrush-charger.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 4,
//       "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
//       "image": "./images/dvd-cases.jpg",
//       "location": "Prospect Heights"
//     },
//     {
//       "id": 5,
//       "description": "wood",
//       "image": "./images/wood.jpg",
//       "location": "Greenpoint"
//     },
//     {
//       "id": 6,
//       "description": "Beautiful couch",
//       "image": "./images/couch.jpg",
//       "location": "Bay Ridge"
//     },
//     {
//       "id": 7,
//       "description": "Treadmill Parts For Free",
//       "image": "./images/treadmill.jpg",
//       "location": "East Flatbush"
//     }
//   ]
// }
