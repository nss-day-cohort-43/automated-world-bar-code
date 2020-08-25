export const argentinaDataComponent = (dataObj) => {
    return `
    
        <li>Name: ${dataObj.name}</li>
          <li>Contenent: ${dataObj.continent}</li>
          <li>Capital: ${dataObj.capital}</li>
          <li>Size: ${dataObj.size}</li>
          <li>Population: ${dataObj.population}</li>
          <li>Language: ${dataObj.language}</li> 
    `
}