import './styles.css';
/* import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class'; */

import { Todo, TodoList } from './classes'
const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);

console.log(tarea);
console.log(todoList);
