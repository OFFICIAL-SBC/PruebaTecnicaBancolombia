import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  {



}
