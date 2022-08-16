import './styles.css';
/* import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class'; */

import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/components';
export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHTML(todo));