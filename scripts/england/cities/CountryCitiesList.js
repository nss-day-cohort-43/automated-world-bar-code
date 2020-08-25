import {englishCityList} from "./CityDataProvider.js"
import { countryCities } from "./CountryCities.js"

export const countryList = () => {

    const contentElement = document.querySelector(".city-card-list")
    const cities = englishCityList();

    let cityHTML = "";
    for (const name of cities) {
        cityHTML += countryCities(name);
    }

contentElement.innerHTML +=

    `${cityHTML}`
}