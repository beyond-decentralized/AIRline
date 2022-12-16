import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './components.component';
import { ConversationEditComponent } from './conversation-edit/conversation-edit.component';
import { ConversationViewComponent } from './conversation-view/conversation-view.component';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { EisenhowerInputsComponent } from './eisenhower-inputs/eisenhower-inputs.component';
import { EisenhowerDisplayComponent } from './eisenhower-display/eisenhower-display.component';
import { EisenhowerIconComponent } from './eisenhower-icon/eisenhower-icon.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    ConversationEditComponent,
    ConversationViewComponent,
    EisenhowerDisplayComponent,
    EisenhowerIconComponent,
    EisenhowerInputsComponent,
    GoalEditComponent,
    TaskEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ComponentsComponent,
    ConversationEditComponent,
    ConversationViewComponent,
    EisenhowerDisplayComponent,
    EisenhowerIconComponent,
    EisenhowerInputsComponent,
    GoalEditComponent,
    TaskEditComponent,
  ]
})
export class ComponentsModule { }
