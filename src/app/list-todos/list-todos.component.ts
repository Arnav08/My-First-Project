import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
   constructor(
      public id : number,
      public description : string,
      public done:boolean,
      public targetDate:Date
   ){}
   
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[];
    message:string;

  constructor(
    private todoservice: TodoDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
       this.refreshTodos();
       }
    
       refreshTodos(){
        this.todoservice.retrieveAllTodos('in28minutes').subscribe(
          response  => {
            console.log(response);
            this.todos = response;
          }
        );
       }
  DeleteTodo(id){
    console.log('delete to do: ' +id);
    this.todoservice.deleteTodo('in28minutes',id).subscribe(
      response => {console.log(response);
      this.message=`Delete of ${id} is Successful`
      this.refreshTodos();
      });
    
  }
  
  updateTodo(id){
    console.log(`update of $id`);
    this.router.navigate(['todo',id]);
  }

  AddTodo(){
    this.router.navigate(['todo',-1]);
  }
}
