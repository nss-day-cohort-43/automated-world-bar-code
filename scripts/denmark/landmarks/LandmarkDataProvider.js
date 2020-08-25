const denmarkLandmarks = [
{
    landmark: "Tivoli Gardens",
    location: "Copenhagen"
},
{
    landmark: "The Little Mermaid",
    location: "Copenhagen"
},
{
    landmark: "Egeskov Castle",
    location: "Funen"
},
{
    landmark: "Nyhavn",
    location: "Copenhagen"
}
]
export const landmarkArrayCopy = () => {
    return denmarkLandmarks.slice()
}