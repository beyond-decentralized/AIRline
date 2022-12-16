import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BigPicturePageRoutingModule } from './big-picture-routing.module';

import { BigPicturePage } from './big-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BigPicturePageRoutingModule
  ],
  declarations: [BigPicturePage]
})
export class BigPicturePageModule {}
