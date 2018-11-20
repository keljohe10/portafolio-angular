import { InfopageService } from '../../providers/infopage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  info = {};

  constructor(private _info: InfopageService) {
    this.info = this._info;
   }
  ngOnInit() {
  }

}
