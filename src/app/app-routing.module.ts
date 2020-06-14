import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ApplicationComponent } from './component/application/application.component';
import { SupportComponent } from './component/support/support.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'support', component: SupportComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
