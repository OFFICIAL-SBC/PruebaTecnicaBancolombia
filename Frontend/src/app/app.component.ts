import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MyCoinsComponent } from './Components/my-coins/my-coins.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    MyCoinsComponent,
    DashboardComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Frontend';
  
  ngOnInit(): void {
    console.log("starting")
  }

  
}
