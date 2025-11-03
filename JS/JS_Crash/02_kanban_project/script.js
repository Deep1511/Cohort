const addTaskBtn = document.getElementById('add-task-btn')
const todoBoard = document.getElementById('todo-board')
addTaskBtn.addEventListener('click',()=>{
    const input =prompt('what is the task')
    if(!input) return

    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.setAttribute('draggable',true)
    taskCard.innerText=input

    attchDragEvent(taskCard)
    // taskCard.addEventListener('dragstart',()=>{
    //     taskCard.classList.add('flying')
    // })
    // taskCard.addEventListener('dragend',()=>{
    //     taskCard.classList.remove('flying')
    // })

    todoBoard.appendChild(taskCard)
})

function attchDragEvent(target){
        target.addEventListener('dragstart',()=>{
        target.classList.add('flying')
    })
    target.addEventListener('dragend',()=>{
        target.classList.remove('flying')
    })
}

// const allBoard = document.getElementsByClassName('board')
const allBoards = document.querySelectorAll('.board')

const allItems = document.querySelectorAll('.item')

allItems.forEach(
    // item.addEventListener('dragstart',()=>{
    //     item.classList.add('flying')
    // })
    // item.addEventListener('dragend',()=>{
    //     item.classList.remove('flying')
    // })
    attchDragEvent

)

allBoards.forEach((board) =>{
    board.addEventListener('dragover',()=>{
        const flytingElement = document.querySelector('.flying')

        board.appendChild(flytingElement)
    })
})