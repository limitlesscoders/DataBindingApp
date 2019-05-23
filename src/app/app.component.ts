import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public title:string;
  public user:any;
  constructor(){
  this.title = 'Data Binding in Angular';

  this.user = {
    name:"Akshay Golash",
    hobbies:" Sofware Programming, Cricket, Hiking.."
  }
}
  
  public saveData():void{
    alert("SAVE USER DATA ");
  }
}
