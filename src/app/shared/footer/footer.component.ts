import { InfopageService } from '../../providers/infopage.service';
import { Component, OnInit } from '@angular/core';
import { InfoPage } from '../../interfaces/info.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public _info: InfopageService) {  }
  ngOnInit() {
  }

}
