import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RealizarPedidoComponent } from './components/realizar-pedido/realizar-pedido.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import {LoginComponent} from './components/login/login.component';
import { ModalComponent } from './modal/modal.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PreciosComponent } from './components/precios/precios.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'realizar-pedido',component:RealizarPedidoComponent},
  {path:'toppings', component:ToppingsComponent},
  {path:'resumen', component:ResumenComponent},
  {path:'sobre-nosotros',component:SobreNosotrosComponent},
  {path:'login',component:LoginComponent},
  {path:'modal',component:ModalComponent},
  {path:'registro',component:RegistroUserComponent},
  {path:'historial-pedidos',component:HistorialPedidosComponent},
  {path:'seguimiento',component:SeguimientoComponent},
  {path:'panel-admin',component:PanelAdminComponent},
  {path:'precios',component:PreciosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
