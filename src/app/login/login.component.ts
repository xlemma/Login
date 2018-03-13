import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {User} from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:[
         './login.component.css',
     ],
     
})
export class LoginComponent implements OnInit {
  
  public user = new User();
 
  constructor( private _service:AuthenticationService) { }

  ngOnInit() {
  }
  
  login(){
       this._service.login(this.user);
  }

}
