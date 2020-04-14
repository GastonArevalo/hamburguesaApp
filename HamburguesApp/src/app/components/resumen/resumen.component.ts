import { Component, OnInit, Inject  } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

import { MatDialog } from '@angular/material/dialog';
import {  MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  pedidos:any = Array();
  getPedidos:any = Array();
  hamburguesas:any = Array();

  cantidad:any;
  
  size:any = new Array();
  tomate:any = new Array();
  lechuga:any = new Array();
  bacon:any = new Array();
  champ:any = new Array();
  chile:any = new Array();
  caramelizada:any = new Array();
  morada:any = new Array();
  salsa:any = new Array();
  pan:any = new Array();
  nombre:any;
  caja:any= new Array();
  i:any;
  caja2:any = new Array();
  sizes:any = new Array();
  mostrar:any = new Array();
  pedido:any = new Array(new Array());
  price:any = new Array();
  precio:any;

  usuario:any = 'Toncio';
  id:any = 1

  


  animal: string;
  name: string;
  

  constructor(public dialog: MatDialog, private api:ApiService, private router:Router) {}
  

  ngOnInit(): void {
    this.getPedidos = localStorage.getItem('getPedidos');
     this.pedidos = JSON.parse(this.getPedidos);
     this.caja = this.pedidos.length;
     this.precio = 0;

     


     for(let i = 0; i < this.caja;i++){
      this.hamburguesas.push(i);
      this.size.push(this.pedidos[i].size);
      this.price.push(this.pedidos[i].price);
      this.bacon.push(this.pedidos[i].bacon);
      this.lechuga.push(this.pedidos[i].lechuga);
      this.tomate.push(this.pedidos[i].tomate);
      this.caramelizada.push(this.pedidos[i].caramelizada);
      this.morada.push(this.pedidos[i].morada);
      this.chile.push(this.pedidos[i].chile);
      this.champ.push(this.pedidos[i].champ);
      this.pan.push(this.pedidos[i].pan);
      this.salsa.push(this.pedidos[i].salsa);
      this.precio = this.precio + parseInt(this.price[i].price);
      console.log(this.precio);
      console.log(this.price);
     }

    
    }
    openDialog(): void {
      this.api.checkUser().then(
        (res) =>{
          if(res == true){
            const dialogRef = this.dialog.open(ModalComponent, {
              width: '250px',
              data: {name: this.usuario, id: this.id}
            });
          }else{
            localStorage.setItem('returnResumen','1'); 
              this.router.navigate(['/login']);



          }
        }
      );
      
     
    }
    

     

}
    
    
