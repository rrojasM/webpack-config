import './styles.css';
import { TodoList } from './classes'
import { crearTodoHTML } from './js/components';
export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHTML(todo));