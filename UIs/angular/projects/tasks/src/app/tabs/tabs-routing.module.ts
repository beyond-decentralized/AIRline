import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'board',
        loadChildren: () => import('../pages/board/board.module').then(m => m.BoardPageModule)
      },
      {
        path: 'goals',
        loadChildren: () => import('../pages/goals/goals.module').then(m => m.GoalsPageModule)
      },
      {
        path: 'big-picture',
        loadChildren: () => import('../pages/big-picture/big-picture.module').then(m => m.BigPicturePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/goals',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/goals',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
