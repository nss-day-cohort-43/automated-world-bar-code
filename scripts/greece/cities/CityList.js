import { theCities } from './CityDataProvider.js'
import { cityComponent } from './City.js'

export const cityList = () => {
    const contentElement = document.querySelector('.greeceCity')
    const cities = theCities()
    
    let cityHTMLRepresentation = "";
    for (const city of cities){
        cityHTMLRepresentation += cityComponent(city);
    }
    
    contentElement.innerHTML += `
    ${cityHTMLRepresentation}`
}