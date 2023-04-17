import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsPageRoutingModule } from './goals-routing.module';

import { GoalsPage } from './goals.page';
import { ComponentsModule } from 'projects/components/src/public-api';
// import { SubscriptionTestComponent } from './subscription-test/subscription-test.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    GoalsPageRoutingModule
  ],
  declarations: [GoalsPage, 
    // SubscriptionTestComponent
  ]
})
export class GoalsPageModule { }
