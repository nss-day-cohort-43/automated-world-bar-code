import { theCities } from "./CityDataProvider.js"
import { theCity } from "./countryCities.js"

export const cityList = () => {
    const contentElement = document.querySelector(".citiesJS")
    const cities = theCities()

    let citiesHTML = ""
    for ( const places of cities ){
        citiesHTML += theCity(places)
    }

    contentElement.innerHTML += `${citiesHTML}`
}
