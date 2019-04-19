import {AfterViewInit, Component, OnInit} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private name = 'Danilo Joksimovic ';

  constructor() { }

  ngOnInit() {
  }

  activateTypewriter(): void {
    var typedTitle = new Typed('#typed-title', {
      stringsElement: '#title-wrapper',
      typeSpeed: 30
    });

    var typedParagraph = new Typed('#typed', {
      stringsElement: '#intro-paragraph',
      startDelay: 1500,
      typeSpeed: 3,
    });
  }

  ngAfterViewInit(): void {
    this.activateTypewriter();
  }

}
