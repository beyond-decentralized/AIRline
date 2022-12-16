import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigPicturePage } from './big-picture.page';

const routes: Routes = [
  {
    path: '',
    component: BigPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BigPicturePageRoutingModule {}
