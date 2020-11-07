import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})

export class SecurityComponent implements OnInit {

  response:any;

  authRequest:any={
      "userName":"javatechie",
      "password":"password"
  }
  constructor(private service:JwtClientService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }
 
  public getAccessToken(authRequest){
     let res =this.service.generateToken(authRequest);
      res.subscribe(data => this.accessApi(data))
}

public accessApi(token){
   let resp = this.service.welcome(token);
   resp.subscribe(data =>this.response =data)
}

   
}
