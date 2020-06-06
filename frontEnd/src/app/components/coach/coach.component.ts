import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CoachService } from 'src/app/Services/Coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  nombre = '';
  apellido = '';
  direccion = '';
  telefono = '';
  email = '';
  password = '';
  especialidad = '';
  // ver
  vernombre = '';
  verapellido='';
  verdireccion='';
  vertelefono='';
  veremail='';
  verpassword='';
  verespecialidad='';
  adminList = [];
  editActive = false;
  editId = null;
  deleteId=null;
  // ocultarLista= false;

  constructor(private readonly _coachService: CoachService) { }

  ngOnInit(): void {
    this._coachService
      .metodoGet('http://localhost:1337/coach').subscribe((datacoupdate: any) => {
        this.adminList = datacoupdate
       console.log("ADMIN", datacoupdate);
       this.vernombre = (datacoupdate[0].nombre);
       this.verapellido = (datacoupdate[0].apellido);
       this.verdireccion = (datacoupdate[0].direccion);
       this.vertelefono = (datacoupdate[0].telefono);
       this.veremail = (datacoupdate[0].email);
       this.verpassword = (datacoupdate[0].password);
       this.verespecialidad = (datacoupdate[0].especialidad);
       console.log(this.vernombre);

       datacoupdate.forEach(element => {
           console.log(element);

       });

   });
  }
  agregar() {
    if (this.editActive) {
      this._coachService.metodoPut(`http://localhost:1337/coach/${this.editId}`, {
        nombre: this.nombre,
        apellido: this.apellido,
        direccion: this.direccion,
        telefono: this.telefono,
        email: this.email,
        password: this.password,
        especialidad: this.especialidad
      }).subscribe(
        (registroActualizado) => {
          console.log(registroActualizado);
          alert('Registro actualizado')

        }
      )

    } else {
      this._coachService.registroCoach({
        nombre: this.nombre,
        apellido: this.apellido,
        direccion: this.direccion,
        telefono: this.telefono,
        email: this.email,
        password: this.password,
        especialidad: this.especialidad
      }).subscribe(
        (registroAgregado) => {
          console.log(registroAgregado);
          console.log('registroAgregado');

          alert('Registro Agregado correctamente')

        }
      )

    }

  }
  actualizar(id) {
    this.editActive = true;
    let adminAActualizar: any = this.adminList.filter(e => e.id == id)[0]
    this.editId = adminAActualizar.id
    console.log("EDIT::", adminAActualizar);
    this.nombre = adminAActualizar.nombre;
    this.apellido = adminAActualizar.apellido;
    this.direccion = adminAActualizar.direccion;
    this.telefono = adminAActualizar.telefono;
    this.email = adminAActualizar.email;
    this.password = adminAActualizar.password;
    this.especialidad = adminAActualizar.especialidad;


}



    eliminar(id){
      const url= `http://localhost:1337/coach/${id}`;
      this._coachService.metodoDelete(url).subscribe(
          (registroEliminado) =>{
              console.log(registroEliminado);
              alert('Registro eliminado')


          }
      )
  }

}
