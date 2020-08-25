import { leaderComponent} from "./countryLeader.js"
import {peepsArray } from "./LeaderDataProvider.js"

export const peepsList = () => {
    const contentElement = document.querySelector(".peopleJS")
    const thePeeps = peepsArray()
    console.log("peeps list", contentElement, thePeeps)


    let peopleHTML = ""
    for (const leaders of thePeeps){
        peopleHTML += leaderComponent(leaders)
    }

    contentElement.innerHTML += `${peopleHTML}`
}