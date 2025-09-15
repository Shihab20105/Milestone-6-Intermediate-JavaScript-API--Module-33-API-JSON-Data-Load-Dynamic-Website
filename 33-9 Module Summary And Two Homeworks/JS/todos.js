/*                      33-9 Module Summary and two homeworks */

/* 
function loadTodos(){
    // console.log('Loading todos');
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => console.log(data))
}

loadTodos(); 
*/



/* 
function loadTodos(){
    // console.log('Loading todos');
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    // console.log(todos);
    // get the container
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</3>
            <p>user: ${todo.userId}</p>
            <p>Is completed: ${todo.completed}</p>
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos(); 
*/





function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    // get the container
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</3>
            <p>user: ${todo.userId}</p>
            <p>Is completed: ${todo.completed === true ? 'complete': 'not complete'}</p>
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();

// ======================================================================================= //

/* 
// COMMON INTERVIEW QUESTIONS
1) What is an api?
2) What are the HTTP methods supported by REST?
3) Can you use GET request instead of PUT to create a resource?
4) What is the difference between PUT and POST?
5) What is JSON?
6) What are CRUD operations?
7) what is the file extension of JSON?
8) What are the data types supported by JSON?
9) What is the role of JSON.stringify?
10) Show how to parse a JSON.
11) get vs post request 
*/