import { cityArray } from './cities/CityDataProvider.js'
import { cityList } from './cities/CityList.js';

const allTheCities = cityArray()

for (const city of allTheCities) {
    console.log(city)
}

cityList();


import { leaderArray } from './leaders/LeaderDataProvider.js'
import { leaderList } from './leaders/LeaderList.js';

const allTheLeaders = leaderArray();

for (const leader of allTheLeaders) {
    console.log(leader)
}

leaderList();

import { landmarkArray } from './landmarks/LandmarkDataProvider.js'
import {landmarkList} from './landmarks/LandmarkList.js'

const allTheLandmarks = landmarkArray();

for (const landmark of allTheLandmarks) {
    console.log(landmark)
}

landmarkList();