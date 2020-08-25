import { theCities } from './cities/CityDataProvider.js'
import { cityList } from './cities/CityList.js';

const allTheCities = theCities();

for (const city of allTheCities) {
    console.log(city)
}

cityList();

// import { theLandmarks } from './landmarks/LandmarkDataProvider.js'

import { theLeaders } from './leaders/LeaderDataProvider.js'
import { leaderList } from './leaders/LeaderList.js';

const allTheLeaders = theLeaders();

for (const leader of allTheLeaders) {
    console.log(leader)
}

leaderList();