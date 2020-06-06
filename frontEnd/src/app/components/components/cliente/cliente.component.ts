import {ClienteService} from '../../Services/Cliente.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  datos: any;
  nombre = '';
  apellido = '';
  correo = '';
  contrasenia = '';
  ci;
  direccion = '';
  telefono = '';
  rol;
  constructor(
    private readonly _clienteService: ClienteService
  ) {
  }

  ngOnInit(): void {
  }

  listar() {
    this._clienteService
      .metodoGet('http://localhost:1337/cliente', {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        contrasenia: this.contrasenia,
        ci: this.ci,
        direccion: this.direccion,
        telefono: this.telefono,
        rol: this.rol
      }).subscribe(
      (resultadoGet) => {
        console.log('Respuesta de Get');
        this.datos = resultadoGet;
        console.log(resultadoGet);
      }
    );
  }
  eliminarRegitroPorId(id){
    this._clienteService
      .metodoDelete('http://localhost:1337/cliente/' + id).subscribe(
      (respuestDelete) => {
        alert('Registro borrado');
        console.log(respuestDelete);
        this.listar();
      }
    );
  }
}
