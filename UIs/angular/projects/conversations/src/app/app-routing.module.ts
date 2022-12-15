import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'collection/:collectionId',
    loadChildren: () => import('./pages/collection/collection.module').then(m => m.CollectionPageModule)
  },
  {
    path: 'conversation/:conversationId',
    loadChildren: () => import('./pages/conversation/conversation.module').then(m => m.ConversationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
