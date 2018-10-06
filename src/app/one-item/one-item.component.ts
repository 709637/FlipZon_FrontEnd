import { Component, OnInit } from '@angular/core';
import { GetOneItemDetailsService } from 'src/app/get-one-item-details.service';
import { Observable } from 'rxjs';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
//import {configData} from '../src/app/flipzon.config';


//const fs = window.require('fs');

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css'],
  //providers:[GetOneItemDetailsService]
})
export class OneItemComponent implements OnInit {
  myArray=[];myArray1=[];
  
  constructor(private getOneItemDetailsService:GetOneItemDetailsService,private http:Http) {
    this.mymethod();
    var obj;
         this.getJSON().subscribe((data) => {obj=data;console.log("ABC Json file response",obj);}, error => console.log("ABC Json file response",error));
   
   }  //var path=require('path');
   ItemDetail:any[];
   mymethod(){
    this.myArray=["1","2","3","4",4,4,4,4,4,4];
    //this.myArray1=configData.data1.myArray1;
    console.log("myArray1",this.myArray1);
  }
   
  public getJSON(): Observable<any> {
    return this.http.get("src/app/abc.json")
                    .map((res:any) => res.json());}
  ngOnInit() {
    
    // const dir = "./src/assets/Men's Wear";
    
    // fs.readdir(dir, (err, files) => {
    //   console.log(files.length);
    // });  
    //var imageName=path.basename('/src/assets/WebsiteImages/loginregisterbcgnd.jpg');
   
    this.getOneItemDetailsService.getOneItemDetailsCall().subscribe((itemDetail:any[])=> {
      this.ItemDetail=itemDetail;
      console.log('Mydata',itemDetail);});

    this.getOneItemDetailsService.getOneItemDetailsCallClient().subscribe((itemDetail:any[])=> {this.ItemDetail=itemDetail;console.log('Mydata',itemDetail);});
  }
 
  

}
