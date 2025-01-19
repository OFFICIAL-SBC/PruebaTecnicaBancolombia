import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username = '';
  password = '';
  token: string | null = null;
  
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.s_login(this.username, this.password).subscribe({
      next: (response) => {
        this.token = response.token;
        console.log("Token: ",this.token); 
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        const errorMessage = err.error?.error || 'Error logueandose.';
        console.log(errorMessage);
      },
    });
  }
  // login() {
  //   this.router.navigate(['dashboard']);
  // }
}
