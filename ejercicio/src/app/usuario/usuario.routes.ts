import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { InfoUserComponent } from './info-user/info-user.component';


const rutas: Routes = [
  {
    path: ':id/:nombre/info',
    component: InfoUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  providers: [],
  exports: [RouterModule],
})

export class UsuarioRoutes{}