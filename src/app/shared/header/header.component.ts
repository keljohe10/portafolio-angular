import { InfoPage } from '../../interfaces/info.interface';
import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../providers/infopage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

Info = {};

  constructor(private _service: InfopageService) {
    this.Info = this._service;
  }

  ngOnInit() {
  }

}
