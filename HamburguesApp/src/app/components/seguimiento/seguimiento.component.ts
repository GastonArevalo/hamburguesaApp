import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { of } from 'rxjs';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
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

  constructor(private api:ApiService) { }

  ngOnInit(){

    

    for(let i = 0; i<5;i++){
      this.cantidad.push(0);
    }
    this.api.seguimiento().then(
      (res:any) => {
        this.pedidos = res;
        console.log(res);


        this.pedidos.forEach(pedido => {
          if(pedido.estado == 0){
            this.estado.push("pendiente");
          }else if(pedido.estado == 1){
            this.estado.push("confirmado");
          }else if(pedido.estado == 2){
            this.estado.push("confirmado");

          }
        });
        
      
      
      
        

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

}
