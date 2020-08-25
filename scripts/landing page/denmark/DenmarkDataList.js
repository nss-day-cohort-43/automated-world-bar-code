import { denmarkDataCompnent } from "./DenmarkData.js"
import { denmarkArray} from "./DenmarkDataPovider.js"


export const theData = () => {
    const contentElement = document.querySelector(".denmark")
    const facts = denmarkArray()

    let denmarkHTML = ""
    for (const name of facts) {
        denmarkHTML += denmarkDataCompnent(name)
    }
    contentElement.innerHTML += `${denmarkHTML}`
}