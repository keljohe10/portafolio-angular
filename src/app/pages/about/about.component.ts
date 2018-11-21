import { InfopageService } from '../../providers/infopage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _service: InfopageService) { }

  ngOnInit() {
  }

}
