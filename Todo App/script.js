const form = document.querySelector('form');

const todos = document.querySelector('#todos-input');
const todoBox = document.querySelector('.todo-container');
const anchor = document.querySelector('a');
const search = document.querySelector('.todo-search input');

// This is the easier way with a template string!!!
const createTemplate = row =>{
const todoComponent = `<a href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center">
<span>${row}</span> 
<i class="far fa-trash-alt delete"></i></a>`;

todoBox.innerHTML += todoComponent;
};

form.addEventListener("submit", e =>{

    e.preventDefault();
    
    const row = todos.value.trim();

    if(row.length){

        createTemplate(row);

        form.reset();
    

        
    }

});


form.addEventListener("click", e =>{

    if (e.target.classList.contains('delete')) {

        e.target.parentElement.remove();
        
    }
});

const searchBar = (tasks)=>{

    Array.from(todoBox.children)
    .filter((todo) => !todo.textContent.includes(tasks))
    .forEach((todos) => todos.classList.add('filtered'))
        
    
    Array.from(todoBox.children)
    .filter((todo) => todo.textContent.toLocaleLowerCase.includes(tasks))
    .forEach((todo) => todo.classList.remove('filtered'));

};

search.addEventListener("keyup", ()=>{
    
    const inputTodo = search.value.trim().toLocaleLowerCase();

    searchBar(inputTodo);
});

//This was my first way......
/*
form.addEventListener('submit', (e) =>{

    e.preventDefault();

    const row = document.createElement('span');
    const icon = document.createElement('i');
    row.setAttribute("class","list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center");
    icon.setAttribute("class", "far fa-trash-alt delete");
    row.textContent = todos.value.trim();

    todoBox.appendChild(row);

})
*/