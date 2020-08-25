import { landmarkArrayCopy } from "./LandmarkDataProvider.js"
import { denmarkLandmarkComponent } from "./countryLandmark.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmarkJS")
    const landmarks = landmarkArrayCopy()

    let landmarksHTML = ""
    for (const places of landmarks) {
        landmarksHTML += denmarkLandmarkComponent(places)
    }

    contentElement.innerHTML += `${landmarksHTML}`

}