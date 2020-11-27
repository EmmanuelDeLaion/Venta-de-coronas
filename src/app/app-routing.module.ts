import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';


const routes:Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'login/home', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'home/productos', component: ProductosComponent},
    {path: 'login/registrar', component: RegistrarComponent},
    {path: 'recuperar', component:RecuperarComponent},
    {path: 'login/recuperar', component:RecuperarComponent},
    
    {path: '**',pathMatch: 'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
