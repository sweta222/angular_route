import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeetListComponent } from './employeet-list/employeet-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/departments', pathMatch: 'full' },
  // { path: 'departments', component: DepartmentListComponent },
  {
    path:'departments',component:DepartmentListComponent
  },
  {
    path:'employees',component:EmployeetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeetListComponent]
