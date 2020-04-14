import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RealizarPedidoComponent } from './components/realizar-pedido/realizar-pedido.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import{MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import{MatRippleModule} from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RealizarPedidoComponent,
    ToppingsComponent,
    ResumenComponent,
    SobreNosotrosComponent,
    LoginComponent,
    ModalComponent,
    RegistroUserComponent,
    HistorialPedidosComponent,
    SeguimientoComponent,
    PanelAdminComponent,
    PreciosComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRippleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
