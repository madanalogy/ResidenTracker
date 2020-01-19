import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentsComponent } from './residents/residents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';

const routes: Routes = [
  { path: 'detail/:room', component: ResidentDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'residents', component: ResidentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
