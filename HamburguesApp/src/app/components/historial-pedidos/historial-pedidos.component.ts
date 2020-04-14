import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { of } from 'rxjs';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.css']
})
export class HistorialPedidosComponent implements OnInit {
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

  constructor(private api:ApiService) { }

  ngOnInit(){

    

    for(let i = 0; i<5;i++){
      this.cantidad.push(0);
    }
    this.api.pedidos().then(
      (res:any) => {
        

      
       for(let i = 0;i<res.length;i++){
         
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
        
        //  switch (res[i].estado) {
        //   case 0:
        //     this.estado_pedido.push("Pendiente");
        //     console.log(this.estado_pedido);
        //     break;
          
        //   case 1:
        //     this.estado_pedido.push("confirmado");
        //     break;
          
        //   case 2:
        //     this.estado_pedido.push("enviado");
        //     break;
          
        //   case 3:
        //     this.estado_pedido.push("entregado");
        //     break;
          
        // }

         this.cantidad_pedidos.push(i);
       }
      
      
      
        

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
