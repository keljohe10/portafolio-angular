import { ProductosService } from '../../providers/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _active: ActivatedRoute, public _Serv: ProductosService) { }

  ngOnInit() {
    this._active.params.subscribe( params => {
      console.log(params['termino']);
      this._Serv.getfiltro(params['termino']);
    });
  }

}
