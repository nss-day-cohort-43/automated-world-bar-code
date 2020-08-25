console.log("You can figure it out");

// import { theCities, theCity } from "./cities/CityDataProvider.js"

// theCities();
// theCity();
// console.log(theCities)
import { theCities } from "./cities/CityDataProvider.js"

theCities();
console.log("checking cities", theCities())

import { landmarkList } from "./landmarks/countryLandmarkList.js"
landmarkList();
