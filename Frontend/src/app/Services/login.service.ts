import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/login/login';

  constructor(private http: HttpClient) { }

  s_login(username: string, password: string): Observable<any> {
    const authData = { username, password };
    return this.http.post(this.apiUrl, authData)
      .pipe(
        tap((response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', response.username);
          }
        }),
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de la red
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El backend devolvió un código de respuesta no exitoso
      console.error(
        `Backend retornó el código ${error.status}, ` +
        `cuerpo fue: ${error.error}`);
    }
    // Retornar un observable con un mensaje de error amigable para el usuario
    return throwError('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.');
  }
}
