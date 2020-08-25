import { englishCelebrityList } from "./LeaderDataProvider.js"
import { leaders } from "./CountryLeaders.js"

export const celebList = () => {
    const contentElement = document.querySelector(".celebrity-card-title");
    const celebs = englishCelebrityList();

    let celebHTML = "";
    for (const celebrity of celebs) {
        celebHTML += leaders(celebrity);
    }
contentElement.innerHTML +=
    `${celebHTML}`
}



