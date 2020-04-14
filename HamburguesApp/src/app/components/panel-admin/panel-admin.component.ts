import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { of } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  id:any;
  name:any;
  cantidad = [];
  estado = new Array();
  i:any;
  cantidad_pedidos:any = new Array ();


  id_pedido:any = new Array();
  burgers_pedido:any = new Array();
  total_pedido:any = new Array();
  hora_pedido:any = new Array();
  estado_pedido:any = new Array();

  pedidos = [];

  ids:any;
  value:any;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(){

    

    for(let i = 0; i<5;i++){
      this.cantidad.push(0);
    }
    this.api.panelPedidos().then(
      (res:any) => {
        this.pedidos = res;
        console.log(this.pedidos)
      
       /*for(let i = 0;i<res.length;i++){
         
         this.id_pedido.push(res[i].id);
         this.burgers_pedido.push(res[i].burgers_count);
         this.total_pedido.push(res[i].total);
         this.hora_pedido.push(res[i].time);
         
         if(res[i].estado == 0){
          this.estado_pedido.push("pendiente");
        }else if(res[i].estado == 1){
          this.estado_pedido.push("confirmado");
        }else if(res[i].estado == 2){
          this.estado_pedido.push("enviado");
        }
        else if(res[i].estado == 3){
          this.estado_pedido.push("entregado");
        }

         this.cantidad_pedidos.push(i);
         
       }*/

       console.log(this.cantidad_pedidos)
      
      
      
        

            // switch (res[i].estado) {
            //   case 0:
            //     this.estado_pedido.push("Pendiente");
            //     break;
            //   case 1:
            //     this.estado_pedido.push("confirmado");
            //     break;
            //   case 2:
            //     this.estado_pedido.push("enviado");
            //   case 3:
            //     this.estado_pedido.push("entregado");
            // }

            
          
        
        
       
        
  
        
        
      }
    );
    
    

}
verPedidos(){
 console.log("hola");
}

actualizarEstado(evento,i){
  this.value = evento.target.value;
  this.ids = evento.srcElement.id;

  this.api.actualizarEstado(this.value,this.ids).then(
    (res:any) =>{

      if(evento.target.value == '3'){
        console.log(i);
        this.pedidos.splice(i,1);
      }
      // console.log(this.pedidos);
    
      

    }
  );

  
  



}
}


