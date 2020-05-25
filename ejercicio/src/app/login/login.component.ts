import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales

  correo = '';
  pass = '';
  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Estudiante', 'Profesor', 'XD'];
  constructor(
    private readonly _router: Router,
  ) { }

  ngOnInit(): void { }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Estudiante', 'Profesor', 'XD'];
    }

  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }

  ingresar() {
    console.log(this.valorAutocomplete);

    if (this.pass === '1234' && this.seleccionadoValor === 'Estudiante') {
        alert('Es estudiante ' + this.correo);
        this._router.navigate(['/estudiante', 'perfil']);
    } else if (this.pass === '12345' && this.seleccionadoValor === 'Profesor') {
        alert('Es profesor ' + this.correo);
        this._router.navigate(['/profesor', 'perfil']);
    } else {
      alert('Datos no validos');
    }
  }
}

