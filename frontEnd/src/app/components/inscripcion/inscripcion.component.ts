import { Component, OnInit } from '@angular/core';
import { InscripcionService } from 'src/app/Services/Inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
    fechainscripcion= '';
    tipopago= '';

  constructor(private _inscripcionService: InscripcionService ) { }

  ngOnInit(): void {
  }
  register(){
      this._inscripcionService.addInscripcion({
          fechainscripcion: this.fechainscripcion,
          tipopago: this.tipopago
      }).subscribe(
          (inscripcionCreada)=>{
              console.log('inscripcionCreada');
              alert(' Inscripción agregada ')

          })

  }

}
