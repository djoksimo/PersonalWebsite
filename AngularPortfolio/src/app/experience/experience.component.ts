import { Component, OnInit, AfterContentInit } from '@angular/core';
declare var Parallax: any;
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });
  }
}
