import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { of } from 'rxjs';
import { Router } from "@angular/router";
@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  S:any;
  M:any;
  L:any;
  XL:any;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    
  }




  actualizar(){
    console.log(this.S);
    console.log(this.M);
    console.log(this.L);
    console.log(this.XL);
    this.api.actualizarPrecio(this.S,this.M,this.L,this.XL).then(
      (res:any) => {
        console.log(res);
          

  }
    );
    this.router.navigate(['/home']);

}




}
