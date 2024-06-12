import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('http://localhost:3000/api/getTodos');
  }

  addTodo(todo: any) {
    return this.http.post('http://localhost:3000/api/addTodo', todo);
  }

  deleteTodo(id: any) {
    return this.http.delete(`http://localhost:3000/api/deleteTodo/${id}`);
  }

  updateTodo(id: any, data: any) {
    return this.http.put(`http://localhost:3000/api/updateTodo/${id}`, data)
  } 
}
