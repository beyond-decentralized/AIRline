import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalPageRoutingModule } from './goal-routing.module';

import { GoalPage } from './goal.page';
import { ComponentsModule } from 'projects/components/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    GoalPageRoutingModule
  ],
  declarations: [GoalPage]
})
export class GoalPageModule { }
