import { greeceArray } from "./GreeceDataProvider.js"
import { greeceDataComponent } from "./GreeceData.js"

export const listOfData = () => {
    const contentElement = document.querySelector(".greece")
    const facts = greeceArray()

    let greeceHTML = ""
    for (const name of facts) {
        greeceHTML += greeceDataComponent(name)
    }
    contentElement.innerHTML += `${greeceHTML}`
}