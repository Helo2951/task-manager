
export async function deleteTask(taskId){
    await fetch(`http://localhost:3333/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    location.reload()
}
