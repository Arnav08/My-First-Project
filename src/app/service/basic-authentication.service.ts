import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL, API_URL_JPA } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  public authenticate(username, password){
    console.log('before ' +username);
    if(username==="in28minutes" && password === 'dummy') {
      sessionStorage.setItem('authenticateduser', username);
      console.log('after ' +username);
      return true;
    }
    return false;
  }

    executeAuthenticationService(username, password) {
    
      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  
      let headers = new HttpHeaders({
          Authorization: basicAuthHeaderString
        })
  
      return this.http.get<AuthenticationBean>(
        `${API_URL}/basicauth`,
        {headers}).pipe(
          map(
            data => {
              sessionStorage.setItem("authenticateduser", username);
              sessionStorage.setItem("token", basicAuthHeaderString);
              return data;
            }
          )
        );
    }
 
 
   public isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateduser');
    return !(user===null);
   }

   public getAuthenticatedUser(){
    let user = sessionStorage.getItem('authenticateduser');
    return !(user===null);
   }

   public getAuthenticatedToken(){
     if(this.getAuthenticatedUser()){
     return sessionStorage.getItem('token');
     }
   }

   public logout(){
    sessionStorage.removeItem('authenticateduser');
    sessionStorage.removeItem('token');
    }
}

export class AuthenticationBean{
 constructor(message:string){}
} 