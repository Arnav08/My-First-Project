import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  public authenticate(username, password){
    console.log('before ' +username);
    if(username==="in28minutes" && password === 'dummy') {
      sessionStorage.setItem('authenticateduser', username);
      console.log('after ' +username);
      return true;
    }
    return false;
  }
 
   public isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateduser');
    return !(user===null);
   }

   public logout(){
    sessionStorage.removeItem('authenticateduser');
    }
}
