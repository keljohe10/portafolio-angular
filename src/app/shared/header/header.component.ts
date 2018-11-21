import { Router } from '@angular/router';
import { InfoPage } from '../../interfaces/info.interface';
import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../providers/infopage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public _service: InfopageService, private _route: Router) {

  }

  ngOnInit() {
  }

  buscar(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this._route.navigate(['/search', termino]);
  }

}
