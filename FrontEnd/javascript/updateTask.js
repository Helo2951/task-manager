export async function updateTask(taskId){
    
    await fetch(`http://localhost:3333/tasks/statusTask/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}