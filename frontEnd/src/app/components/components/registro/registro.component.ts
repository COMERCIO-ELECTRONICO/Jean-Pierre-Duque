import {RegistroService} from './../../Services/Registro.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre = '';
  apellido = '';
  correo = '';
  contrasenia = '';
  ci;
  direccion = '';
  telefono = '';

  constructor(
    private readonly _registroService: RegistroService
  ) {
  }

  ngOnInit(): void {
  }

  registrar() {
    this._registroService.registroCredenciales({
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      contrasenia: this.contrasenia,
      ci: this.ci,
      direccion: this.direccion,
      telefono: this.telefono
    }).subscribe(
      (registroCreado) => {
        console.log('registroCreado');
        console.log(registroCreado);
        alert('Registro creado con exito');
      }
    );
  }

}
