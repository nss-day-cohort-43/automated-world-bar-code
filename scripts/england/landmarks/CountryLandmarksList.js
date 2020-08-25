import {englishLandmarkList} from "./LandmarkDataProvider.js"
import {countryLandmarks} from "./CountryLandmarks.js"

export const landmarkList = () => {

    const contentElement = document.querySelector(".england-card-list")
    const landmarks = englishLandmarkList();

    let landmarkHTMLRepresentations = "";
    for (const name of landmarks) {
        landmarkHTMLRepresentations += countryLandmarks(name);
    }


contentElement.innerHTML += 

        `${landmarkHTMLRepresentations}`
}
console.log("testing CountryLandmarksList")