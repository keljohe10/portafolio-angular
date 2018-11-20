import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info.interface';


@Injectable({
  providedIn: 'root'
})
export class InfopageService {

info: InfoPage = {};
cargada = false;

  constructor( private _http: HttpClient ) {
    this._http.get('assets/data/data-autor.json')
            .subscribe( (resp: InfoPage) => {
              this.cargada = true;
              this.info = resp;
              console.log(this.info);
            });
  }
}
