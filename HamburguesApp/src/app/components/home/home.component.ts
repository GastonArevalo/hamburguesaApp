import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:any
  constructor(private router:Router, private api:ApiService) { }
  user:any;
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    console.log(this.user);
  }


  
  realizarPedido(){
    this.router.navigate(['/realizar-pedido']);
  }
}
