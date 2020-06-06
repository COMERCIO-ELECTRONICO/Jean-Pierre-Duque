//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InscripcionService{
    constructor( private _httpClient: HttpClient ){ }
    inscripcionGet( url: string ) {
        return this._httpClient.get( url );

    }
    inscripcionPost( url: string, data ) {
        return this._httpClient.post( url, data );

    }
    inscripcionPut( url: string, dataupdate ) {
        return this._httpClient.put(url, dataupdate);

    }
    inscripcionDelete( url: string ){
        return this._httpClient.delete( url );

    }
    addInscripcion( dataInscripcion ) {
        const url = 'http://localhost:1337/Inscripcion';
        return this._httpClient.post( url,dataInscripcion );

    }




}
