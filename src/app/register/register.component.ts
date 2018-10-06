import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from 'src/app/login-register.service';
import { user } from '../MyClasses/UserClass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

Name:string;
Email:string;
Password:string;
LoginID:string;
Mobile:number;
LoginKey:boolean;
  constructor( private loginRegisterService:LoginRegisterService) {
        // this.Name=name;
        // this.Email=email;
        // this.Password=password;
        // this.LoginID=loginID;
        // this.Mobile=mobile;
   }

  ngOnInit() {
    
  }

 
 

  registerUser(){
    var User=document.getElementById('reg-form');
    var insUser=new user(User[0].value, User[1].value, User[2].value, User[3].value, User[4].value);
    console.log(insUser);
    this.loginRegisterService.registeruser(insUser).subscribe((loginKey:boolean)=> {
      this.LoginKey=loginKey;
      console.log('Mydata',loginKey);
      
    });
    //return this.LoginKey;
  }

}
