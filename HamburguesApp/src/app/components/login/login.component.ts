import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { NullAstVisitor } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any;
  pass:any;
  status:any = new Array();
  error = false;
  id:any;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  ingresar(){
      
      this.api.logIn(this.usuario,this.pass).then(
        (res:any) => {
          // console.log(res);
          this.status = res.status;
          this.id = res.id;
          console.log("id= " + this.id);
          if(this.status == true){
              localStorage.removeItem('username');
             this.usuario = res.username;
            localStorage.setItem('username',this.usuario);
            this.id = res.id;
            localStorage.setItem('id',this.id);
            // console.log("name: "+this.id);
            this.usuario = localStorage.getItem('username');

            if(localStorage.getItem('returnResumen') != (null && undefined)){
              if(localStorage.getItem('returnResumen') == '1'){
                localStorage.setItem('returnResumen','0'); 
                this.router.navigate(['/resumen']);
              }else{
                this.router.navigate(['/home']);

              }
            }else{

              this.router.navigate(['/home']);
            }
          
          }
          else{
            this.error = true;
          }
        }
      );
    

  }

  noYet(){
    alert("Esa Funcionalidad aun no esta disponible");
  }

  register(){
    this.router.navigate(['/registro']);

  }


}
