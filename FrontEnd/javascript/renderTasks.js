import { deleteTask } from "./deleteTasks.js"
import { getTasks } from "./getTasks.js"

const list = document.getElementById('list')

async function renderTasks() {
    function taskList(task){
        const taskCard = document.createElement("div")
        taskCard.classList.add('taskCard')

        const taskTitle = document.createElement('h2')
        taskTitle.textContent = task.title

        const taskContent = document.createElement('p')
        taskContent.textContent = task.content

        const taskDeadline = document.createElement('p')
        taskDeadline.textContent = task.deadline

        const completeBox = document.createElement('input')
        completeBox.classList.add('completeBox');
        completeBox.type = 'checkbox'
        taskCard.appendChild(completeBox);

        completeBox.addEventListener('change', () => {
            if (completeBox.checked) {
                taskTitle.style.textDecoration = "line-through"
                taskContent.style.textDecoration = "line-through"
                taskDeadline.style.textDecoration = "line-through"
            }else{
                taskTitle.style.textDecoration = "none"
                taskContent.style.textDecoration = "none"
                taskDeadline.style.textDecoration = "none"
            }
        })

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Excluir"
        deleteButton.onclick = () => {
            deleteTask(task.id)
        }
        taskCard.appendChild(taskTitle)
        taskCard.appendChild(taskContent)
        taskCard.appendChild(taskDeadline)
        taskCard.appendChild(deleteButton)

            return taskCard
    }
    list.innerHTML = ''

    const tasks = await getTasks()
    console.log(tasks)

    for(let i = 0; i ; i++) {
        const element = tasks[i]
        tasks.push(element);
    }

    tasks.forEach(task => {
        const newTask = taskList(task)
        list.appendChild(newTask)
    })
    console.log(tasks);
}
renderTasks()