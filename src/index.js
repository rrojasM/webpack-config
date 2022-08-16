import './styles.css';
/* import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class'; */

import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/components';
const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);
console.log(todoList);


crearTodoHTML(tarea);
