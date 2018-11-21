import { Component } from '@angular/core';
import { InfopageService } from './providers/infopage.service';
import { ProductosService } from './providers/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _Serv: InfopageService,
              public _Productos: ProductosService) {

  }
}
