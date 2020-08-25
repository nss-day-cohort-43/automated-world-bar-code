// Holds the raw data about each entry and exports
// *      functions that other modules can use to filter
// *      the entries for different purposes.
const denmarkCities = [ 
{
    name: "Copenhagen"
},

{   name: "Århus"
},

{   name: "Jutland"
},

{   name: "Esbjerg"
}

]
// export const theCity = (cityNames) => {
//     return`
//             <div class="cities">
//                 <ul>
//                     <li>"Copenhagen"${cityNames.name}</li>
//                     <li>Århus${cityNames.name}</li>
//                     <li>Jutland${cityNames.name}</li>
//                     <li>Esbjerg${cityNames.name}</li>
//                 </ul>
//             </div>
//         `
// }

export const theCities = () => {
    return denmarkCities.slice();
}
// const cityNames = theCities()
// const contentElement = document.querySelector(".cities");
// const cities = theCity()

// export const theCity = (theCities) => {
    // console.log(denmarkCities)
//     return`
//             // <div class="cities">
//             //     <ul>
//             //         <li>"Copenhagen"${theCities.name}</li>
//             //         <li>Århus${theCities.name}</li>
//             //         <li>Jutland${theCities.name}</li>
//             //         <li>Esbjerg${theCities.name}</li>
//             //     </ul>
//             // </div>
//         `
// }
// const cities = theCity()


// let cityHTMLRepresentation="";
// for (const city of cities){
//     cityHTMLRepresentation += cities(city);
// }
// contentElement.innerHTML += `
//     ${cityHTMLRepresentation}
//     `


