import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'projects/components/src/public-api';

import { CollectionPageRoutingModule } from './collection-routing.module';

import { CollectionPage } from './collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CollectionPage]
})
export class CollectionPageModule {}
