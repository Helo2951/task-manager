import { getTasks } from "./getTasks.js"

document.getElementById('create').addEventListener('click', sendDataToServer)

async function sendDataToServer(e) {
    e.preventDefault()
    const title = document.getElementById('createTask').value
    const content = document.getElementById('content').value
    const deadline = document.getElementById('deadline').value
    console.log(createTask)

    if (title === '' || deadline === '') {
        alert("Preencha os campos para continuar!");
        return 
    }
    const data = {
        title,
        content,
        deadline,
    }
    console.log(data);
    const user_id = 2

    await fetch(`http://localhost:3333/tasks/${user_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data)
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`)
        }
        return response.json()
    }).then((responseData) => {
        console.log('Dados enviados com sucesso: ', responseData);
    }).catch((error) => {
        console.error('Erro ao enviar os dados: ', error)
    })

    getTasks()
    
    if (title === '') {
        alert("You must write something!");
    }
    location.reload()

}
