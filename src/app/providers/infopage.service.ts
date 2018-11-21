import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info.interface';


@Injectable({
  providedIn: 'root'
})
export class InfopageService {

info: InfoPage = {};
cargada = false;
equipo: any[] = [];

  constructor( private _http: HttpClient ) {
    this.informacionpagina();
    this.getEquipo();
  }

  private informacionpagina() {
    this._http.get('assets/data/data-autor.json')
            .subscribe( (resp: InfoPage) => {
              this.cargada = true;
              this.info = resp;
            });
  }

 private getEquipo() {
    this._http.get('https://pag-productos.firebaseio.com/equipo.json')
        .subscribe( (data: any[]) => {
          this.equipo = data;

        });
  }
}
