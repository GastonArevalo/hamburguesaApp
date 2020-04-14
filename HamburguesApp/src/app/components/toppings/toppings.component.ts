import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from "../../services/api.service";



@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {

  // toppings = new FormControl('');

  @Input()
  cantidad:any;
  hamburguesas:any = new Array() ;
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
  pedidos:any = new Array();
  price:any = new Array();
  status:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getPrice().then(
      (res:any) =>{
        this.status = res;
        console.log(this.status);
        
      }
    );
    
    for (let i = 0; i < this.cantidad;i++){
        this.hamburguesas.push(i);
        this.size.push("S");
        this.price.push(200);
        this.bacon.push(false);
        this.lechuga.push(false);
        this.tomate.push(false);
        this.caramelizada.push(false);
        this.morada.push(false);
        this.chile.push(false);
        this.champ.push(false);
        this.pan.push(false);
        this.salsa.push(false);
        
    }
    

    /*this.pedido[0][0] = "asdads"
    console.log(JSON.stringify(this.pedido));*/
    
    
    
  }
  enviarHamburguesas(){
    
    //this.pedido[0][0] = "a";
    
    /*for (let i = 0; i < this.cantidad;i++){
        console.log(i,this.pedido)
        this.pedido[i][0] = this.size[i];
        this.pedido[i][1] = this.bacon[i];
        this.pedido[i][2] = this.lechuga[i];
        this.pedido[i][3] = this.tomate[i];
        this.pedido[i][4] = this.caramelizada[i];
        this.pedido[i][5] = this.morada[i];
        this.pedido[i][6] = this.chile[i];
        this.pedido[i][7] = this.champ[i];
        this.pedido[i][8] = this.pan[i];
        this.pedido[i][9] = this.salsa[i];
        
        this.pedidos.push(this.pedido);
    }*/

    for(let i = 0; i < this.cantidad; i++){

      

      let ham = {
        size : this.size[i],
        price: this.price[i],
        bacon : this.bacon[i],
        tomate : this.tomate[i],
        lechuga : this.lechuga[i],
        caramelizada : this.caramelizada[i],
        morada : this.morada[i],
        chile : this.chile[i],
        champ : this.champ[i],
        pan : this.pan[i],
        salsa : this.salsa[i]
      }
      
      this.pedidos.push(ham);
    }

    console.log(JSON.stringify(this.pedidos))
    localStorage.setItem('getPedidos', JSON.stringify(this.pedidos))
    
      
    }
    setSize(value,index) {
      this.size[index] = value;
      if(value == "S"){
        this.size[index] = value;
        this.price[index] = this.status.S;
      }else if(value == "M"){
        this.size[index] = value;
        this.price[index] = this.status.M;

      }else if(value == "L"){
        this.size[index] = value;
        this.price[index] = this.status.L;
      }else if(value == "XL"){
        this.size[index] = value;
        this.price[index] = this.status.XL;
      }

  }
  setBacon(value,index) {
      // console.log(value);
      this.bacon[index] = value;
      // console.log(this.bacon);

}
   
  setLechuga(value,index) {
      // console.log(value);
      this.lechuga[index] = value;
      // console.log(this.lechuga);

}
setTomate(value,index) {
  // console.log(value);
  this.tomate[index] = value;
  // console.log(this.tomate);

}
setMorada(value,index) {
  // console.log(value);
  this.morada[index] = value;
  // console.log(this.morada);

}
setCaramelizada(value,index) {
  // console.log(value);
  this.caramelizada[index] = value;
  // console.log(this.caramelizada);

}

setChamp(value,index) {
  // console.log(value);
  this.champ[index] = value;
  // console.log(this.champ);

}

setSalsa(value,index) {
  // console.log(value);
  this.salsa[index] = value;
  // console.log(this.salsa);

}

setPan(value,index) {
  // console.log(value);
  this.pan[index] = value;
  // console.log(this.pan);

}
setChile(value,index) {
  // console.log(value);
  this.chile[index] = value;
  // console.log(this.chile);

}












}
