import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { IdentificadorComponent } from './identificador.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ IdentificadorComponent] ,
  imports: [ SharedModule, DropdownModule, ButtonModule],
  exports: [ IdentificadorComponent ]
})
export class IdentificadorModule{}