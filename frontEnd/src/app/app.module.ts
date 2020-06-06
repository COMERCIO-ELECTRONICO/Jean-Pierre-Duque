import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';


import {HomeComponent} from './components/home/home.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {ClienteComponent} from './components/cliente/cliente.component';
import {LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MenuItem} from 'primeng/api';
import {ClienteService} from './Services/Cliente.service';
import {EditClienteComponent} from './components/edit-cliente/edit-cliente.component';
import {LoginService} from './Services/Login.service';
import {RegistroService} from "./Services/Registro.service";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    ClienteComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    EditClienteComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    NgbAlertModule,
    NgbModule,
    FormsModule,
    AccordionModule,
    InputNumberModule,
    InputTextModule,
    PasswordModule,
    HttpClientModule
  ],
  providers: [
    RegistroService,
    ClienteService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
