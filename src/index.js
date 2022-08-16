import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/components';


export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHTML(todo));

console.log('TODOS', todoList.todos);