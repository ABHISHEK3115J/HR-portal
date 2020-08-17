import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public user:UserService,private cd:ChangeDetectorRef) { }
  email: string;
  password: string;
   
  signUp() {
  this.user.SignUp(this.email, this.password);
  this.email = '';
  this.password = '';
  }
   
  signIn() {
  this.user.SignIn(this.email, this.password);
  this.email = '';
  this.password = '';
  }
  status: boolean = true;
  clickEvent(e){
      this.status = !this.status;   
      this.cd.markForCheck()    
  }
  signOut() {
  this.user.logout();
  }
  ngOnInit() {
  }

}
