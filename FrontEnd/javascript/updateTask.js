// import { getTasks } from "./getTasks.js";
import { Modal } from "./modal.js";

export async function updateTask(){

    const inputTitle = document.getElementById('editTitle');
    const titlePlaceholder = inputTitle.getAttribute("placeholder")

    const inputContent = document.getElementById('editContent');
    const contentPlaceholder = inputContent.getAttribute("placeholder")

    const inputDeadline = document.getElementById('editDeadline');
    const deadlinePlaceholder = inputDeadline.getAttribute("placeholder")

    const title = Modal.title.value || titlePlaceholder
    const content = Modal.content.value || contentPlaceholder
    const deadline = Modal.deadline.value || deadlinePlaceholder
    
    // const url = `http://localhost:3333/tasks/${taskId}`

    const data = {
        title,
        content,
        deadline
    }

    console.log(data)

    await fetch(`http://localhost:3333/tasks/${taskId}`, {
        method: 'PUT',
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


    // const request = {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // };
    // await fetch(url, request)
    //     .then(response => {
    //         if (!response.ok) { 
    //             throw new Error(`Erro na requisição: ${response.status}`)
    //         }
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log('Dados enviados com sucesso: ', data);
    //     })
    //     .catch(err => {
    //         console.error('Erro ao enviar os dados: ', err)
    //     })    
}