export const myUrl = "http://localhost:8000/results";

export async function getArticles () {
    const response = await fetch(myUrl)
    const data = await response.json()
    return data
}