import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './pageNotFound/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {
    path:'',
    redirectTo:'/cliente/buscador',
    pathMatch:'full',
  },
  { 
    path: '**', 
    component: PageNotFoundComponent,
  }
];