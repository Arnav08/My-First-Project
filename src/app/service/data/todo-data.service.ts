import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

    public retrieveAllTodos(username){
    console.log("hello bean service");
    return this.http.get<Todo[]>(`http://localhost:8080//users/${username}/todos`);
    }

    public retrieveTodo(username,id){
      console.log("hello bean service");
      return this.http.get<Todo>(`http://localhost:8080//users/${username}/todos/${id}`);
      }
      
    public deleteTodo(username,id){
      console.log("delete service called for user $username and $id", username, id);
      return this.http.delete(`http://localhost:8080//users/${username}/todos/${id}`);
      }

      public updateTodo(username,id, todo){
        console.log("hello bean service");
        return this.http.put(`http://localhost:8080//users/${username}/todos/${id}`,todo);
        }

        public createTodo(username,todo){
          console.log("create bean service");
          return this.http.post(`http://localhost:8080//users/${username}/todos/`,todo);
          }

}              
