import { argentinaArray } from "./ArgenteniaDataProvider.js"
import { argentinaDataComponent } from "./ArgentinaData.js"

export const dataList = () => {
    const contentElement = document.querySelector(".argentina")
    const facts = argentinaArray()

    let argentinaHTML = ""
    for (const name of facts) {
        argentinaHTML += argentinaDataComponent(name)
    }
    contentElement.innerHTML += `${argentinaHTML}`
}