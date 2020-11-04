import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  message:String='Some welcome message';
  welcomeMsgFromService:string;
  name:string='';

  constructor(
    private route:ActivatedRoute,
    private welcomeDataService : WelcomeDataService
    ) { }

  ngOnInit(): void {
    console.log(this.message);
    this.name= this.route.snapshot.params['name'];
    
  }

  public getWelcomeMessage(){
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulMessage(response), error => this.handleSuccessfulMessage(error));    
    //response => this.handleSuccessfulMessage(response)
  }
  public getWelcomeMessageForPathParam(){
    this.welcomeDataService.executeHelloWorldBeanServiceForPathVariable(this.name).subscribe(
    response => this.handleSuccessfulMessage(response), error => this.handleSuccessfulMessage(error));    
    //response => this.handleSuccessfulMessage(response)
  }
  handleSuccessfulMessage(response){
         this.welcomeMsgFromService=response.message ;
  }
  handleErrorResponseMessage(error){
      this.welcomeMsgFromService=error.error.message;
}
}
