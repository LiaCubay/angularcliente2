import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import { ClienteBuscadorComponent } from './cliente/cliente-buscador/cliente-buscador.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, ClienteBuscadorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
