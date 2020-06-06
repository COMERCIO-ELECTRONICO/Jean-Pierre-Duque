import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() // servicio
export class ClienteService {
  constructor(private readonly _httpClient: HttpClient) {
  }

  metodoGet(url: string, datos) {
    return this._httpClient.get(url);
  }
  metodoGetID(url: string) {
    return this._httpClient.get(url);
  }

  metodoPost(url: string, datos) {
    return this._httpClient.post(url, datos);
  }

  metodoPut(url: string, datosEditar) {
    return this._httpClient.put(url, datosEditar);
  }

  metodoDelete(url: string) {
    return this._httpClient.delete(url);
  }
}
