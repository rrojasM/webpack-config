import { todoList } from "../index";
import { Todo } from "../classes";

//REFERENCIA
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const borrarCompletados = document.querySelector('.clear-completed');
const filtros = document.querySelector('.filters');
const filt = document.querySelectorAll('filtro');


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
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed')
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    console.log(todoList);
});


borrarCompletados.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const element = divTodoList.children[i];

        if (element.classList.contains('completed')) {
            divTodoList.removeChild(element);
        }
    }
});

filtros.addEventListener('click', (event) => {
    const filtro = event.target.text;

    if (!filtro) {
        return;
    }

    filt.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');
    
    for (const element of divTodoList.children) {
        element.classList.remove('.hidden');
        const completado = element.classList.contains('completed');


        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    element.classList.add('hidden')
                }
                break;

            case 'Completados':

                if (!completado) {
                    element.classList.add('hidden')
                }
                break;
            default:
                break;
        }
    }
})