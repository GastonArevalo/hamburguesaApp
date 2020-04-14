import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {
  status:any = []
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getPrice().then(
      (res:any) =>{
        this.status = res;
        console.log(this.status);
        
      }
    );
  }

}
