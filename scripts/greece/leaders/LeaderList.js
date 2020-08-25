import { leaderArray } from './LeaderDataProvider.js'
import { leaderComponent } from './Leader.js'

export const leaderList = () => {
    const contentElement = document.querySelector('.greecianLeader')
    const leaders = leaderArray()

    let leaderHTMLRepresentation = "";
    for (const leader of leaders) {
        leaderHTMLRepresentation += leaderComponent(leader);
    }

    contentElement.innerHTML += `
        ${leaderHTMLRepresentation}
        `
}