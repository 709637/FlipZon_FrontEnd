import { Component, OnInit } from '@angular/core';
import  { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private roueter:Router) { }

  ngOnInit() {
  }

  registerBtnClicked(){    
    this.roueter.navigateByUrl('/register');
  }

}