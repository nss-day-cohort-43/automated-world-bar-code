import { theLeaders } from './LeaderDataProvider.js'
import { leaderComponent } from './Leader.js'

export const leaderList = () => {
    const contentElement = document.querySelector('.greecianLeader')
    const leaders = theLeaders()

    let leaderHTMLRepresentation = "";
    for (const leader of leaders) {
        leaderHTMLRepresentation += leaderComponent(leader);
    }

    contentElement.innerHTML += `
    ${leaderHTMLRepresentation}`
}