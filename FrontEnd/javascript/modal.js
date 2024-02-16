export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    title: document.querySelector('.modal label #editTitle'),
    content: document.querySelector('.modal #editContent'),
    taskId: document.querySelector('.modal #taskId'),
    buttonClose: document.querySelector('.modal button.close'),
    deadline: document.querySelector('.modal #editDeadline'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}
 
Modal.buttonClose.onclick = () => {
    Modal.close()
}
window.addEventListener('keydown', handleKeyDown)
 
function handleKeyDown(e) {
    if(e.key === 'Escape') {
        Modal.close()
    }
}
