export class user{

Name:string;
Email:string;
Password:string;
LoginID:string;
Mobile:number;

    constructor(name:string,email:string,loginID:string,mobile:number,password:string){
        this.Name=name;
        this.Email=email;
        this.LoginID=loginID;
        this.Mobile=mobile;
        this.Password=password;
    }
}