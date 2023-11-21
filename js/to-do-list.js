const todoList = [
    {
        name: 'Make dinner',
        dueDate: ''
    },
    {
        name: 'Wash dishes',
        dueDate: ''
    }
];

document.body.addEventListener('keydown', (event) => {
   if(event.key === 'Enter'){
        addTodo();
   }
}) 

renderTodoList();

function renderTodoList () {

todoListResult = '';

todoList.forEach(function(todoObject , index) {
    const {name , dueDate} = todoObject;

    const html = `
    <div>${name.toUpperCase()}</div>
    <div>${dueDate}</div> 
    <div>
    <button  class = "delete-button" onclick = "
    todoList.splice(${index} , 1)
    renderTodoList();
   ">Delete</button>
    </div>`;

    todoListResult += html;
})

document.querySelector('.paragraph-js')
 .innerHTML = todoListResult;

}
function addTodo() {
    const input = document.querySelector('.input-js')

    const dateInput = document.querySelector('.js-due-date-input');

    const dueDate = dateInput.value;

    const name = input.value;
    todoList.push({
        name,
        dueDate
    })

    input.value = '';

    renderTodoList();
}
