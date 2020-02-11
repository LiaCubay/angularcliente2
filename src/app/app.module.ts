//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
//Componentes
import {AppComponent} from './app.component';
import {HelloComponent} from './componentes/hello/hello.component';
import { N28Component } from './componentes/n28/n28.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    SharedModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, N28Component, 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
