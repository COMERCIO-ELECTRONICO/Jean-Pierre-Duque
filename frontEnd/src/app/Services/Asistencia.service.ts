//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AsistenciaService {
     constructor(private readonly _httpClient: HttpClient) { }
     asistenciaGet(url: string) {
       return this._httpClient.get(url);
     }

     asistenciaPost(url: string, datos) {
       return this._httpClient.post(url, datos);

     }
     // capturarPost(datos){
     //     return this._httpClient.post(datosopciones);
     // }

     asistenciaPut(url: string, datosEditar) {
       return this._httpClient.put(url, datosEditar);
     }

     asistenciaDelete(url: string) {
       return this._httpClient.delete(url);
     }
     registroAsistencia(datosAsistenciaAdd) {
       const url = 'http://localhost:1337/Asistencia';
       return this._httpClient.post(url, datosAsistenciaAdd);
    }
}
