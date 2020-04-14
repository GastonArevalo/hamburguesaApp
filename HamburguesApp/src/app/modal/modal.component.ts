import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../DialogData';
import{MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ChildActivationStart } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";



import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  pedidos:any = Array();
  getPedidos:any = Array();
  cantidad:any;

  transaccion:any;

  hamburguesa:any = new Array();

  username:any;


  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private api:ApiService, private router:Router) {}

    ngOnInit(): void {
      if(localStorage.getItem('username') != (undefined || null) ){
        this.username = localStorage.getItem('username');
  
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  toSend(){
    this.getPedidos = localStorage.getItem('getPedidos');
     this.pedidos = JSON.parse(this.getPedidos);
     console.log(this.pedidos);
     this.hamburguesa = JSON.stringify(this.pedidos);
     this.cantidad = this.pedidos.length;
     
     this.api.postTransaction(this.hamburguesa,this.cantidad).then(
       (res) =>{
         this.transaccion = res;
         console.log(this.transaccion);
         this.dialogRef.close();
       }
       
     );
    this.router.navigate(['/seguimiento']);


    
     

    
        
         
    
  }

  

}