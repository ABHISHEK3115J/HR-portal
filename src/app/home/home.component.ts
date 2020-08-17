import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
})
export class HomeComponent implements OnInit {
  enable: boolean = false;
  constructor() {}

  ngOnInit() {}
  enableText() {
    this.enable = !this.enable;
  }
}
