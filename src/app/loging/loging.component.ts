import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ingresar() {
  this.router.navigate(['/dashboard']);
  }

}
