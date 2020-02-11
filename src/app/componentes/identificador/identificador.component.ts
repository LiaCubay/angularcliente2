import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-identificador',
  templateUrl: './identificador.component.html',
  styleUrls: ['./identificador.component.css']
})
export class IdentificadorComponent implements OnInit {
  @ViewChild('dd') dropdown: Dropdown;

  label:string;
  selectedItem:string;
  items: SelectItem[];

  
  constructor() { }

  ngOnInit() {
    this.label = 'Identificador';
    this.items = [
      {label: 'Orquideas', value: 'orquidea'},
      {label: 'Ortencias', value: 'ortencia'},
      {label: 'Clavel', value: 'clavel'}
    ];
  }

}