import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http:HttpClient) {
  }

  public executeHelloWorldBeanService(){
   console.log("hello bean service");
   return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
   }
   //http://localhost:8080//hello-world/path-variable/in28minutes
  
   public executeHelloWorldBeanServiceForPathVariable(name){
    console.log("hello bean service");
    return this.http.get<HelloWorldBean>(`http://localhost:8080//hello-world/path-variable/${name}`);
    }
}
