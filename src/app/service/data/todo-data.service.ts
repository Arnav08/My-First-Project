import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, API_URL_JPA } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

    public retrieveAllTodos(username){
    console.log("hello bean service");
    return this.http.get<Todo[]>(`${API_URL_JPA}/users/${username}/todos`);
    }

    public retrieveTodo(username,id){
      console.log("hello bean service");
      return this.http.get<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`);
      }
      
    public deleteTodo(username,id){
      console.log("delete service called for user $username and $id", username, id);
      return this.http.delete(`${API_URL_JPA}/users/${username}/todos/${id}`);
      }

      public updateTodo(username,id, todo){
        console.log("hello bean service");
        return this.http.put(`${API_URL_JPA}/users/${username}/todos/${id}`,todo);
        }

        public createTodo(username,todo){
          console.log("create bean service");
          return this.http.post(`${API_URL_JPA}/users/${username}/todos/`,todo);
          }

}              
