import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { OneItemComponent } from './one-item/one-item.component';
import { user } from './MyClasses/UserClass';
import { RegisterComponent } from './register/register.component';
import { Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http:Http) { }

  validatelogin(Credentials:user):Observable<any>{
    console.log("validatelogin from LoginRegisterService",Credentials);
    return this.http.post('http://localhost:54785/api/Login',Credentials);
  }

  registeruser(UserDetails:user):Observable<any>{
    console.log("UserDetails from LoginRegisterService",UserDetails);
     let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    let options = new RequestOptions({ headers: headers});
    var UserDetail=JSON.stringify({data:[UserDetails]});
    
    //let UserDetail=JSON.stringify(UserDetails);
    return this.http.post('http://localhost:50542/api/Login',UserDetail,options);//.map((res: Response) => res.json());
}
}
