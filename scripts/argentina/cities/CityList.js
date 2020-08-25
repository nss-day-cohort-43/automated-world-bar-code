import { cityArray } from './CityDataProvider.js'
import { cityComponent } from './City.js'

export const cityList = () => {
    const contentElement = document.querySelector('.argentinaCity')
    const cities = cityArray()
    
    let cityHTMLRepresentation = "";
    for (const city of cities){
        cityHTMLRepresentation += cityComponent(city);
    }
    
    contentElement.innerHTML += `
    ${cityHTMLRepresentation}`
}