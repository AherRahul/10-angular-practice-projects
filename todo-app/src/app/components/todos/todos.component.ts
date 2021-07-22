import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoModel } from 'src/app/model/todoModel';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: TodoModel[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
    console.log(this.todos);
  }

  changeTodoStatus(todo: TodoModel) {
    this.todoService.updateTodoStatus(todo);
  }

  deleteTodo(todo: TodoModel) {
    this.todoService.deleteTodo(todo);
  }

}
