import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';

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
  valorSeleccionado;
  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService
  ) { }

  ngOnInit(): void {
    /*   this._loginService
        .metodoGet('http://localhost:1337/usuario')
        .subscribe((resultadoMetodoGet) => {
          console.log('Respuest de Get');
          console.log(resultadoMetodoGet);
        }); */
    }
    seteoValorSeleccionado(eventoSeleccionado) {
      console.log(eventoSeleccionado);
      this.valorSeleccionado = eventoSeleccionado;
    }

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

   /* valorSeleccionado(evento) {
      console.log(evento);
      this.seleccionadoValor = evento;
    } */

    ingresar() {
      console.log('guardar');

      localStorage
        .setItem(
          'nombre',
          JSON.stringify({nombre: 'jean'})
        );
        /*
           this._loginService
  .metodoPost(
    'http://localhost:1337/usuario',
    {
      nombre: "kevin",
      edad: this.pass,
      correo: this.email,
      esCasado: true
    }
    );
        .subscribe(
          (resultadoPost )=> {
            console.log('Respuest de Post');
            console.log(resultadoPost);
          }
        );
      if (this.pass === '1234' && this.seleccionadoValor === 'Estudiante') {
        alert('Es estudiante ' + this.correo);
        this._router.navigate(['/estudiante', 'perfil']);
      } else if (this.pass === '12345' && this.seleccionadoValor === 'Profesor') {
        alert('Es profesor ' + this.correo);
        this._router.navigate(['/profesor', 'perfil']);
      } else {
        alert('Datos no validos');
      }*/
  }
  eliminarRegitroPorId(){
    this._loginService
      .metodoDelete('http://localhost:1337/usuario/2').subscribe(
      (respuestDelete) => {
        console.log(' repuesta de delete');
        console.log(respuestDelete);
      }
    );
  }
}

