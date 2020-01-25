import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'inside-view',
  templateUrl: './inside-view.component.html',
  styleUrls: ['./inside-view.component.css']
})
export class InsideViewComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();
  user: any;

  constructor() { }

  ngOnInit() {
  }

}