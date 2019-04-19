import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'custom-particles',
  templateUrl: './custom-particles.component.html',
  styleUrls: ['./custom-particles.component.css']
})
export class CustomParticlesComponent implements OnInit, AfterViewInit {

  particleStyle: object = {};
  particleParams: object = {};
  width = 100;
  height = 100;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.particleStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.particleParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#ffffff'
        },
        opacity: {
          value: '0.2'
        },
        shape: {
          type: 'triangle',
        },
      }
    };
  }

}
