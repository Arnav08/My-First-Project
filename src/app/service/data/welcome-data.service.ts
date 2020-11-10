import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
 
  
   public executeHelloWorldBeanServiceForPathVariable(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    //  let headers = new HttpHeaders({
    //      Authorization: basicAuthHeaderString
    //    })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      // {headers}
      );
    }

  //   createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
