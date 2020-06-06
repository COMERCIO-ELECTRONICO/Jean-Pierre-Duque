import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClienteService} from '../../Services/Cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private readonly _clienteService: ClienteService) {
  }

  id: any;
  nombre;
  apellido;
  correo;
  ci;
  direccion;
  telefono;

  ngOnInit(): void {
    this.id = {
      id: this._ActivatedRoute.snapshot.params.id
    };
    this._clienteService
      .metodoGetID('http://localhost:1337/usuario/' + this.id.id)
      .subscribe(
        (resultadoGet: any) => {
          console.log('Respuesta de Get');
          this.id = resultadoGet.id;
          console.log(resultadoGet);
          this.nombre = resultadoGet.nombre;
          this.apellido = resultadoGet.apellido;
          this.correo = resultadoGet.correo;
          this.ci = resultadoGet.ci;
          this.direccion = resultadoGet.direccion;
          this.telefono = resultadoGet.telefono;
        }
      );
  }

  actualizar() {
    this.id = {
      id: this._ActivatedRoute.snapshot.params.id
    };
    console.log(this.id.id);
    this._clienteService.metodoPut('http://localhost:1337/usuario/' + this.id.id, {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      ci: this.ci,
      direccion: this.direccion,
      telefono: this.telefono
    }).subscribe(
      (datosEditar) => {
        console.log(datosEditar);
        alert('Registro editado con exito');
      }
    );
  }
}
