import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  s_login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/auth/login', { username, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
        })
      );
  }

}
