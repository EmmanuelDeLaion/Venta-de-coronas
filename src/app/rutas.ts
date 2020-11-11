import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

const APP_ROUTES:Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '**',pathMatch: 'full', redirectTo:'login'}

];

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);