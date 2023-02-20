import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalWelcomePage } from './modal-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: ModalWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalWelcomePageRoutingModule {}
