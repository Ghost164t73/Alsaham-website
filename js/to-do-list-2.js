const todoList = [
    {
        name:'make dinner',
        dueDate: ''
    } ,
    { 
        name: 'wash dishes',
        dueDate: ''
    }
    ];

renderTodoList();

function renderTodoList () {
    
    let todoListHtml = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];

    const {name} = todoObject;
    const {dueDate} = todoObject; 

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <div>
    <button  class = "delete-button" onclick = "
    todoList.splice(${i} , 1)
    renderTodoList();
   ">Delete</button>
    </div>`;
     

        todoListHtml += html

}

document.querySelector('.paragraph-1')
 .innerHTML = todoListHtml
}

function addTodo () {
    const inputElement = document.querySelector('.input-js');

    const dateInput = document.querySelector('.js-input-date');

    const dueDate = dateInput.value;

    const name = inputElement.value;
    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();

}