// 1 => module
// declaro rutas
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';

export const ROUTES: Routes = [
    // creacion de rutas
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'cliente', component: ClienteComponent },
    {path: 'edit-cliente/:id', component: EditClienteComponent},
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];
const APP_ROUTING = RouterModule.forRoot(ROUTES);



