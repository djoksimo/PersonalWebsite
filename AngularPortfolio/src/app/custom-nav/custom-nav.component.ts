import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-nav',
  templateUrl: './custom-nav.component.html',
  styleUrls: ['./custom-nav.component.scss']
})
export class CustomNavComponent implements OnInit {


  emailClicked: boolean;
  phoneClicked: boolean;

  constructor() { }

  ngOnInit() {
    this.emailClicked = false;
    this.phoneClicked = false;
  }

  copyMessage(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


}
