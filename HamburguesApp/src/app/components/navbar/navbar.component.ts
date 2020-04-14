import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username = "";


  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    if(localStorage.getItem('username') != (undefined || null) ){
      this.username = localStorage.getItem('username');

    }
  }

  cerrarSesion(){
    
    this.api.closeSession().then(
      (res:any) =>{

        console.log("sesion cerrada");
        
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
      }
    );

  }

  seguimientoPedidos(){
    this.router.navigate(['/seguimiento']);
  }
  

  historialPedidos(){
    if(this.username != ""){
    this.router.navigate(['/historial-pedidos']);
    }
    else{
    this.router.navigate(['/login']);
    }
  }


  configuracion(){
    this.router.navigate(['/precios']);
  }



  panelAdmin(){
    
    this.router.navigate(['/panel-admin']);

  }
  realizarPedido(){
    if(this.username != ""){
    this.router.navigate(['/realizar-pedido']);
  }else{
    this.router.navigate(['/login']);
  }
  }
  

}
