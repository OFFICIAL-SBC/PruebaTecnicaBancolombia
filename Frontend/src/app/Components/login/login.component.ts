import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  eucForm!: FormGroup;
  token: string | null = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    // Construimos el form
    this.eucForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("Entra al log");
  }

  login() {
    if (this.eucForm.valid) {
      const { username, password } = this.eucForm.value;
      console.log("Login: ", username, password);
      this.loginService.s_login(username, password).subscribe({
        next: (response) => {
          this.token = response.token;
          console.log("Token: ", this.token);
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          const errorMessage = err.error?.error || 'Error logueandose.';
          console.log(errorMessage);
        },
      });
    } else {
      console.log("Formulario inválido");
    }
  }
}
