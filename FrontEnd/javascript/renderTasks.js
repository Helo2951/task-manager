import { getTasks } from "./getTasks.js"

const list = document.getElementById('list')

async function renderTasks() {
    list.innerHTML = ''

    const tasks = await getTasks()
    console.log(tasks)

    for(let i = 0; i ; i++) {
        const element = tasks[i]
        tasks.push(element);
    }

    tasks.forEach(task => {
        let item = document.createElement("div")
        item.classList.add('taskCard')
        item.innerHTML = `
        <h2>${task.title}</h2>
        <p>${task.content}</p>
        <p>${task.deadline}</p>
        ` 
        list.appendChild(item)
    })
    console.log(tasks);
}
renderTasks()