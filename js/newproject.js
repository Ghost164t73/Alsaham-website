todoList = [
   { 
    name :'make dinner',
    dueDate : ''    
},
    { name :  'watch youtube',
      dueDate: ''
    }
]

renderTodoList();

function renderTodoList () {

todoListResult = ''

for(let i = 0 ;i < todoList.length ; i++) {
    const todoObject = todoList[i];

    const {name} = todoObject;
    const {dueDate} = todoObject;

    const html = `<div>${name}</div>
    <div>${dueDate}</div>
    <div>
    <button class = "delete-button" onclick =
    "todoList.splice( ${i} ,1)
    renderTodoList(); ">
    Delete</button
    ></div>`

todoListResult += html

}

document.querySelector('.paragraph-js')
 .innerHTML = todoListResult;

}

function addTodo () {

    const input = document.querySelector('.input-js')

    const name = input.value;

    const dateInput = document.querySelector('.js-due-date-input')
    const dueDate = dateInput.value

    todoList.push({
        name,
        dueDate
    })

    input.value = ''

    renderTodoList();
}