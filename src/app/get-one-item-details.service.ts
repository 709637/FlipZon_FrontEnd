import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { OneItemComponent } from './one-item/one-item.component';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class GetOneItemDetailsService {

  constructor(private http:Http, private httpClientModule:HttpClientModule) { }
  
  getOneItemDetailsCall():Observable<any>{
    //let headers = new Headers({'Content-Type': 'application/json','Authorization':'31bf3856ad364e35','publickkeytoken':'31bf3856ad364e35'});  
 //headers.append('Authorization','Bearer ')
 //let options1 = new RequestOptions({Hea});
 
 //let options = new RequestOptions({headers: headers});
   
    
    //let myHeaders = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }); 
    return this.http.get('http://localhost:50542/api/ProductDetail')
    .map((response:Response)=>
    response.json());
    //headers:{'Authrization': 'Basic' + 'vipul.kumar2@outlook.com: password'}
  }
  
  getOneItemDetailsCallClient():Observable<any[]>{
    return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts').map((response:Response)=><OneItemComponent[]>response.json());
  }

  
}
