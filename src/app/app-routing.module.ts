import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppSectionListComponent } from './Components/app-section-list/app-section-list.component';
import { AppSectionFAddComponent } from './Components/app-section-fadd/app-section-fadd.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: AppSectionListComponent
  },
  {
    path: 'courses/add',
    component: AppSectionFAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
