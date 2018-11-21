import { Item } from '../../interfaces/item.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../providers/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

item: Item;
id: string;
  constructor(private activate: ActivatedRoute, private _serv: ProductosService) {


  }

  ngOnInit() {
     this.activate.params.subscribe( params => {
       this.id = params['id'];
       this.getItem(this.id);
    });
  }

  getItem(cod: string ) {
    this._serv.getItem(cod)
        .subscribe( (data: Item) => {
          this.item = data;
          console.log(this.item);
        });
  }

}
