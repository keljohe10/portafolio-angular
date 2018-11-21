import { Item } from '../interfaces/item.interface';
import { Productos } from '../interfaces/productos.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

productos: Productos[] = [];
productosfiltrados: Productos[] = [];

  constructor(private _http: HttpClient ) {
    this.getProductos();
   }

  private getProductos() {

  return new Promise( (resolve, reject) => {

    this._http.get('https://pag-productos.firebaseio.com/productos_idx.json')
              .subscribe( (data: Productos[] ) => {
                  this.productos = data;
                  console.log(this.productos);
                  resolve();
              });
  });


  }

  getItem(cod: string) {
     return  this._http.get(`https://pag-productos.firebaseio.com/productos/${cod}.json`);
 }

  getfiltro(termino: string) {

      if (this.productos.length === 0) {
        // cargar productos
        this.getProductos().then( () => {
          // ejecutar despues de cargar productos
          this.filtrarprod(termino);
        });
      } else {
       this.filtrarprod(termino);
      }
  }

  private filtrarprod( termino: string) {
    this.productosfiltrados = [];

     this.productos.forEach( prod => {
       if (prod.categoria.indexOf(termino) >= 0 ) {
         this.productosfiltrados.push(prod);
       }
     });
  }

}

