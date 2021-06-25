import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './Routing/department-detail/department-detail.component';
import { DepartmentListComponent } from './Routing/department-list/department-list.component';
import { EmployeeListComponent } from './Routing/employee-list/employee-list.component';
import { NotFoundComponent } from './Routing/not-found/not-found.component';

const routes: Routes = [
  // not if we do not pass any root(empty) root then it will redirect to default root.
  // to handle this, at the first, add empty root.
  // {path: '', component: DepartmentListComponent},
  // nut above solution is not preffered solution. prefered solution is below one.
  // pathMatch has 2 values. 1. Prefix 2. full.
  // if we use prefix then empth string '' is prefix to every string. so it will not work.
  // full says if path is empty as full means localhost:4200 then redirects to departments root.
  // known as refirecting routes
  {path: '', redirectTo:'departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent},
  {path: 'employees', component: EmployeeListComponent}, // it's inside rounting folder. not in Service folder.
  {path: '**', component: NotFoundComponent} // this is default route(also known as wildcard route) and it will match with every route so make sure that default root must be the last one. of it is the first one then for any route, it will redirect to default root.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
