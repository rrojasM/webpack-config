import { todoList } from "../index";
import { Todo } from "../classes";

//REFERENCIA
const divTodoList = document.querySelector('.todo-list');

const txtInput = document.querySelector('.new-todo')


export const crearTodoHTML = (todo) => {
    const HTMLtodo = `
        <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `

    const div = document.createElement('div');
    div.innerHTML = HTMLtodo;

    divTodoList.append(div.firstElementChild);


    return div;

}


txtInput.addEventListener('keyup', (event) => {
    //console.log(event);


    if (event.keyCode === 13 && event.target.value.length > 0) {
        const nuevoTodo = new Todo(event.target.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHTML(nuevoTodo);

        event.target.value = '';
    } else {

    }
})