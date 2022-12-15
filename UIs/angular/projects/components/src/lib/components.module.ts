import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './components.component';
import { ConversationEditComponent } from './conversation-edit/conversation-edit.component';
import { ConversationViewComponent } from './conversation-view/conversation-view.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    ConversationEditComponent,
    ConversationViewComponent,
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
  ]
})
export class ComponentsModule { }
