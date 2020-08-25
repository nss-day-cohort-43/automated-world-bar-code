export const denmarkDataCompnent = (denmarkObj) => {
    return `
            <li>Name: ${denmarkObj.name}</li>
          <li>Contenent: ${denmarkObj.continent}</li>
          <li>Capital: ${denmarkObj.capital}</li>
          <li>Size: ${denmarkObj.size}</li>
          <li>Population: ${denmarkObj.population}</li>
          <li>Language: ${denmarkObj.language}</li>
    `
}