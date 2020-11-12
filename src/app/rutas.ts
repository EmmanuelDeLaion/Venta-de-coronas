import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';

const APP_ROUTES:Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'login/home', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '**',pathMatch: 'full', redirectTo:'login'}

];

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);