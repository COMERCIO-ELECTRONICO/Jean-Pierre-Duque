import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  nombre = '';
  apellido = '';
  email = '';
  contrasena1 = '';
  contrasena2 = '';

  ngOnInit(): void {
  }

  obtenerFormulario(formulario) {
    console.log(formulario);
  }

}
