import { deleteTask } from "./deleteTasks.js"
import { getTasks } from "./getTasks.js"
import { Modal } from "./modal.js"
import { statusTask } from "./statusTask.js"
import { updateTask } from "./updateTask.js"

const list = document.getElementById('list')

async function renderTasks() {
    function taskList(task) {
        const taskCard = document.createElement("div")
        taskCard.classList.add('taskCard')

        const contentCard = document.createElement("div")
        contentCard.classList.add('contentCard')

        const buttonCard = document.createElement("div")
        buttonCard.classList.add('buttonCard')

        const checkCard = document.createElement("div")
        checkCard.classList.add('checkCard')

        const checklabel = document.createElement("label")
        checklabel.classList.add('checklabel')
        checklabel.for = 'completeBox'

        const completeBox = document.createElement('input')
        completeBox.classList.add('completeBox');
        completeBox.id = 'completeBox'
        completeBox.type = 'checkbox'
        completeBox.title = 'status'

        const spanBox = document.createElement('span')

        const taskTitle = document.createElement('h2')
        taskTitle.id = `title-${task.id}`
        taskTitle.textContent = task.title

        const taskContent = document.createElement('p')
        taskContent.textContent = task.content

        const taskDeadline = document.createElement('p')
        taskDeadline.textContent = task.deadline



        completeBox.addEventListener('change', () => {
            if (completeBox.checked) {
                statusTask(task.id)
                taskTitle.style.textDecoration = "line-through"
                taskContent.style.textDecoration = "line-through"
                taskDeadline.style.textDecoration = "line-through"
            } else {
                statusTask(task.id)
                taskTitle.style.textDecoration = "none"
                taskContent.style.textDecoration = "none"
                taskDeadline.style.textDecoration = "none"
            }
        })

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteButton")
        deleteButton.type = "button"
        deleteButton.textContent = "Excluir"
        deleteButton.onclick = () => {
            deleteTask(task.id)
        }

        const updateButton = document.createElement("button")
        updateButton.classList.add("updateButton")
        updateButton.type = "button"
        updateButton.textContent = "Editar"
        updateButton.onclick = () => {
            displayContent(task)
        }

        taskCard.appendChild(contentCard)
        taskCard.appendChild(checkCard)
        contentCard.appendChild(taskTitle)
        contentCard.appendChild(taskContent)
        contentCard.appendChild(taskDeadline)
        contentCard.appendChild(buttonCard)
        buttonCard.appendChild(deleteButton)
        buttonCard.appendChild(updateButton)
        checkCard.appendChild(checklabel)
        checklabel.appendChild(completeBox)
        checklabel.appendChild(spanBox)

        return taskCard
    }
    list.innerHTML = ''

    const tasks = await getTasks()
    console.log(tasks)

    for (let i = 0; i; i++) {
        const element = tasks[i]
        tasks.push(element);
    }

    tasks.forEach(task => {
        const newTask = taskList(task)
        list.appendChild(newTask)
    })
    console.log(tasks);

}
function 

displayContent(task) {
    const title = task.title
    const content = task.content
    const deadline = task.deadline
    const taskId = task.id

    Modal.title.placeholder = title

    Modal.content.placeholder = content

    Modal.deadline.placeholder = deadline

    Modal.taskId.value = taskId

    Modal.open()

    console.log(taskId)
}
const saveButton = document.getElementById("save")
saveButton.onclick = () => {
    updateTask(taskId)
}

renderTasks()