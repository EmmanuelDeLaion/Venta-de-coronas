import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { from } from 'rxjs';

 
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';



import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { UbicacionTiendaComponent } from './components/ubicacion-tienda/ubicacion-tienda.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
