import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import {  } from "@angular/forms";


@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent implements OnInit {

  name:any;
  lastname:any;
  email:any;
  pass:any;
  phone:any;
  adress:any;
  registro:any;
  error = false;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

  }
  registrar(){
    // console.log("name", this.name);
  this.api.signIn(this.name,this.lastname,this.pass,this.email,this.adress,this.phone).then(
    (res:any) => {
      this.registro = res.status;

          
          if(this.registro == false){
            this.error = true;
          
          }
          else{
            this.router.navigate(['/login']);

            
          }
}
  
  );

}
}