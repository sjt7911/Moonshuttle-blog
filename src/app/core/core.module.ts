import { NgModule } from '@angular/core';
import { MainHeaderComponent } from './main-header/main-header.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    MainHeaderComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    MainHeaderComponent
  ]
})

export class CoreModule {}
