import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.toast();
  }
  toast() {
    setTimeout(function () {
      $('#Snackbar').addClass('visible');
      setTimeout(function () {
        $('#Snackbar').addClass('dismiss');
      }, 3000);
    }, 50);
  }
}
