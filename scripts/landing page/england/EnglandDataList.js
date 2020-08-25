import { englandArray } from "./EnglandDataProvider.js"
import { englandDataComponent } from "./EnglandData.js"

export const theDataList = () => {
    const contentElement = document.querySelector(".england")
    const facts = englandArray()

    let englandHTML = ""
    for (const name of facts) {
        englandHTML += englandDataComponent(name)
    }
    contentElement.innerHTML += `${englandHTML}`
}