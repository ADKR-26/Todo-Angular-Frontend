import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos: any = [];
  newTodo: any = {};
  updateData: any = {};
  updateId: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todo) => {
      this.todos = todo;
    });
    console.log(this.todos);
  }

  addTodo() {
    console.log('DATA', this.newTodo);
    this.todoService.addTodo(this.newTodo).subscribe((todo) => {
      this.todos.push(todo);
      this.newTodo = {};
    });
  }

  deleteTodo(id: any) {
    // console.log(this.deleteId);
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((t: any) => t._id !== id);
    });
  }

  updateTodo(id: any) {
    this.todoService.updateTodo(id, this.updateData).subscribe(() => {
      // Update the todo in the todos array
      this.todos = this.todos.map((t: any) => {
        if (t._id === id) {
          return {
            ...t,
            ...this.updateData,
          };
        }
        return t;
      });
      this.updateData = {};
      this.updateId = false;
    });
  }

  activateTodo() {
    this.updateId = true;
  }

  cancelUpdate() {
    this.updateId = false;
  }
}
