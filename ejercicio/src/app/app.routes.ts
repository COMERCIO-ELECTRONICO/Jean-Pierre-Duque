import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

const rutas: Routes = [
    {
      path: 'inicio',
      component: HomeComponent,
    },
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NoEncontradoComponent,
    },
  ];

@NgModule({
  imports: [
      RouterModule.forRoot(rutas)
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutes {}
