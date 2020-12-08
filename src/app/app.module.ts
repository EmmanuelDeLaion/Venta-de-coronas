import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

//Servicios
import { BdService } from './services/bd.service';

import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { UbicacionTiendaComponent } from './components/ubicacion-tienda/ubicacion-tienda.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProductosComponent,
    HomeComponent,
    DescuentosComponent,
    UbicacionTiendaComponent,
    RegistrarComponent,
    RecuperarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
],
  providers: [BdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
