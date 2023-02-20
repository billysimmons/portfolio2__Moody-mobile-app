import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalWelcomePageRoutingModule } from './modal-welcome-routing.module';

import { ModalWelcomePage } from './modal-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalWelcomePageRoutingModule
  ],
  declarations: [ModalWelcomePage]
})
export class ModalWelcomePageModule {}
