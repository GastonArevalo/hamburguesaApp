import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit {

  boton:any = 0;
  cantidad:any = 0;
  username:any;

  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
  topping(){
    this.boton = 1;
    
    console.log(this.cantidad);
    
    
  }
  resetButton(){
    this.boton = 0;
  }

}
