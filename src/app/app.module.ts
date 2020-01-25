import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import { ClienteBuscadorComponent } from './cliente/cliente-buscador/cliente-buscador.component';
import {PageNotFoundComponent} from './pageNotFound/page-not-found/page-not-found.component';
import { InsideViewComponent } from './views/inside-view/inside-view.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(APP_ROUTES, {useHash:true})
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ClienteBuscadorComponent,
    PageNotFoundComponent,
    InsideViewComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
