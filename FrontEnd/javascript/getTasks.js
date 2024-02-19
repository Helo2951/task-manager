export async function getTasks(){
    const response = await fetch (`http://localhost:3333/tasks`)
    const data = await response.json()
    return data
}