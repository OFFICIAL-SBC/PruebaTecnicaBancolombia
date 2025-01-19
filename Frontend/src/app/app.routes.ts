import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyCoinsComponent } from './Components/my-coins/my-coins.component';
import { AvailableCoinsComponent } from './Components/available-coins/available-coins.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'mycoins', pathMatch: 'full' },
        {
          path: 'mycoins', component: MyCoinsComponent 
        },
        {
          path: 'available', component: AvailableCoinsComponent 
        },
      ],
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
  ], 
  exports: [RouterModule]
})

export class AppRoutingModule { }
