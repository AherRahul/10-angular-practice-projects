import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoModel } from 'src/app/model/todoModel';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  createdTodo() {
    if (this.todoTitle) {
      const newTodo: TodoModel = {
        id: uuidv4(),
        title: this.todoTitle,
        isCompleted: false,
        date: new Date()
      };

      this.todoService.setTodo(newTodo);
      this.todoTitle = '';
    }
  }


}
