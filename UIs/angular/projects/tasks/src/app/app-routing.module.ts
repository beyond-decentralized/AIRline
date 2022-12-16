import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'goal/:goalId',
    loadChildren: () => import('./pages/goal/goal.module').then(m => m.GoalPageModule)
  },
  {
    path: 'tasks/:goalId',
    loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
