import { landmarkArray } from "./LandmarkDataProvider.js"
import { landmarkComponent } from './Landmark.js'

export const landmarkList = () => {
    const contentElement = document.querySelector('.greeceLandmark')
    const landmarks = landmarkArray()

    let landmarkHTMLRepresentation = ""
    for (const landmark of landmarks){
        landmarkHTMLRepresentation += landmarkComponent(landmark);
    }

    contentElement.innerHTML +=  
    `${landmarkHTMLRepresentation}`
}