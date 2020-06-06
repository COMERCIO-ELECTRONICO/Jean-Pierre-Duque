import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/Services/Asistencia.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})

export class AsistenciaComponent implements OnInit {
    nombreactividad='';
    horario='';
    fechainicio= '';
    fechafin= '';
    // datos;
    // opcionSeleccionada: string='0';
    // verSeleccion= '';

  constructor(private  _asistenciaService: AsistenciaService) {
          // this.datos= [1,2,3,4];
   }

  ngOnInit(): void {
  }
  regasistencia(){
      this._asistenciaService.registroAsistencia({
          nombreactividad: this.nombreactividad,
          horario: this.horario,
          fechainicio: this.fechainicio,
          fechafin: this.fechafin
      }).subscribe(
          (asistenciaIngresada)=>{
              console.log('asistenciaIngresada');
              alert('Asistencia ingresada satisfactoriamente')

            }
        )

  }
  // capturar(){
  //     this.verSeleccion= this.opcionSeleccionada;
  // }



  eliminaregasistencia(id: string):void{
      if (confirm("Esta seguro en eliminar el registroAsistencia")) {
          this._asistenciaService.asistenciaDelete(id).subscribe();

      }

  }

}
