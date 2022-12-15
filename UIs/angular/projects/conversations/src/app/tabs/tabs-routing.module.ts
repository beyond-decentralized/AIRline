import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'collections',
        loadChildren: () => import('../pages/collections/collections.module').then(m => m.CollectionsPageModule)
      },
      {
        path: 'participants',
        loadChildren: () => import('../pages/participants/participants.module').then(m => m.ParticipantsPageModule)
      },
      {
        path: 'themes',
        loadChildren: () => import('../pages/themes/themes.module').then(m => m.ThemesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/collectionss',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/collections',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
