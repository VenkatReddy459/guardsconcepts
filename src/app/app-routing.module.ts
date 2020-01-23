import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MainComponent } from './main/main.component';
import { ActiveGuard } from './active.guard';
import { DeactiveGuard } from './deactive.guard';


const routes: Routes = [{path:'',redirectTo:'/main',pathMatch:'full'},
  {path:'main',component:MainComponent,},
  {path:'department',component:DepartmentListComponent,canActivate:[ActiveGuard]},
{path:'employee',component:EmployeeListComponent,canDeactivate:[DeactiveGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
