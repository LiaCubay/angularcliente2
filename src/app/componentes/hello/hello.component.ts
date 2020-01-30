import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{name}}!</h1><button (click)="hazHalgo()">Púlsame</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input('nameOut') name: string;
  @Output() decirAlgo = new EventEmitter;

  hazHalgo(): any{
    alert('Estoy haciendo algo');
    this.decirAlgo.emit('Estoy emitendo!!');
  }
}
