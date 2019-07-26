import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBodyListComponent } from './Components/app-body-list/app-body-list.component';
import { AppBodyFormComponent } from './Components/app-body-form/app-body-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: AppBodyListComponent
  },
  {
    path: 'courses/add',
    component: AppBodyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

}
