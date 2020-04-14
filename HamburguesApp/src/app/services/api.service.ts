  
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user:any;
  pass:any;
  name:any;
  lastname:any;
  email:any;
  phone:any;
  adress:any;
  id:any;

  constructor(private api:HttpClient) { 
  }

  

  postTransaction(hamburguesa:any,cantidad:any){
    let formdata = new FormData;
    formdata.append('hamburguesa',hamburguesa);
    formdata.append('cantidad',cantidad);

    // for(let i = 0; i<cantidad;i++){
    // formdata.append('hamburguesa' + i,hamburguesa[i]);
    // }



  
    
    return this.api.post(`https://cuos.com.ar/testapi/add-pedido.php`,formdata, {withCredentials: true}).toPromise();

  }

  logIn(user,pass){
    
      let formdata = new FormData;
      formdata.append('user', user);
      formdata.append('pass', pass);
      
      return this.api.post(`https://cuos.com.ar/testapi/login.php`,formdata, {withCredentials: true}).toPromise();
  
    

  }

  actualizarPrecio(S,M,L,XL){
    let formdata = new FormData;

    formdata.append('s',S);
    formdata.append('m',M);
    formdata.append('l',L);
    formdata.append('xl',XL);

    return this.api.post(`https://cuos.com.ar/testapi/actualizar-precio.php`,formdata, {withCredentials: true}).toPromise();

  }




  panelPedidos(){
    let id = localStorage.getItem('id');
    console.log("id admin: " + id);
    let formdata = new FormData;
    formdata.append('id',id);

    
    return  this.api.post(`https://cuos.com.ar/testapi/admin.php`,formdata, {withCredentials: true}).toPromise();
  }






  actualizarEstado(value,ids){
    let id = localStorage.getItem('id');
    
    let formdata = new FormData;

    formdata.append('id',id);
    formdata.append('value',value);
    formdata.append('ids',ids);

    return this.api.post(`https://cuos.com.ar/testapi/actualizar-estado.php`,formdata, {withCredentials: true}).toPromise();



  }







  seguimiento(){
    let id = localStorage.getItem('id');
    console.log("id de seguimiento" + id);
    let formdata = new FormData;
    formdata.append('id',id);
    return this.api.post(`https://cuos.com.ar/testapi/seguimiento.php`,formdata, {withCredentials: true}).toPromise();
  }





  signIn(name,lastname,pass,email,adress,phone){

    let formdata = new FormData;
   

      formdata.append('name', name);
      formdata.append('lastname', lastname);
      formdata.append('email', email);
      formdata.append('phone', phone);
      formdata.append('pass', pass);
      formdata.append('adress', adress);

      return this.api.post(`https://cuos.com.ar/testapi/registro.php`,formdata, {withCredentials: true}).toPromise();

  }

  pedidos(){
    
    let id = localStorage.getItem('id');
    console.log("id: " + id);
    let formdata = new FormData;
    formdata.append('id',id);

    return this.api.post(`https://cuos.com.ar/testapi/user-historial.php`,formdata, {withCredentials: true}).toPromise();
  }

  getPrice(){
      return this.api.get(`https://cuos.com.ar/testapi/get-precio.php`).toPromise();

  }
  checkUser(){
    let formdata = new FormData;
    formdata.append('id',"-1");
    return this.api.post(`https://cuos.com.ar/testapi/check-user.php`, formdata, {withCredentials: true}).toPromise();
  }


  closeSession(){
    let formdata = new FormData;
    formdata.append('id',"-1");
    return this.api.post(`https://cuos.com.ar/testapi/close-session.php`,formdata, {withCredentials: true}).toPromise();
  
  }
  



}