import { Injectable } from '@angular/core';
import { TodoModel } from '../../model/todoModel';
import { of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: TodoModel[];

  constructor(private toastrService: ToastrService) { }

  private getTodoArrayFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todoArray'));
  }

  private setTodoArrayInLocalStorage(todoArray) {
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
  }

  getTodos() {
    this.todos = this.getTodoArrayFromLocalStorage();

    if (this.todos === null) {
      this.todos = [];
    }
    return of(this.todos);
  }

  setTodo(todo: TodoModel) {
    this.todos.push(todo);
    this.setTodoArrayInLocalStorage(this.todos);
    this.toastrService.success('Todo Added Successfully..!!');
  }

  updateTodoStatus(todo: TodoModel) {
    this.todos.map(item => {
      if (item.id === todo.id ) {
        item.isCompleted = !item.isCompleted;
      }
    });
    this.setTodoArrayInLocalStorage(this.todos);
    this.toastrService.info('Todo Updtaed Successfully..!!');
  }

  deleteTodo(todo: TodoModel) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id,
    );
    this.todos.splice(indexofTodo, 1);

    this.setTodoArrayInLocalStorage(this.todos);
    this.toastrService.warning('Todo Deleted Successfully..!!');
  }
}
