import { Productos } from '../interfaces/productos.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

productos: Productos[] = [];
  constructor(private _http: HttpClient ) {
    this.getProductos();
   }

  private getProductos() {
    this._http.get('https://pag-productos.firebaseio.com/productos_idx.json')
              .subscribe( (data: Productos[] ) => {
                  this.productos = data;
                  console.log(this.productos);
              });
  }
}

