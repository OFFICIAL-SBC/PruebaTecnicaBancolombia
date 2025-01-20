import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from '../Utils/ErrorHandlerService';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  s_getCoinsUser(userName:string): Observable<any> {

    return this.http.get(`${this.apiUrl}/${userName}`)
      .pipe(
        tap((response: any) => {
          console.log("Coins:", response.coins);
        }),
        catchError(this.errorHandler.handleError)
      );
  }

  s_getCountryNameByUser(userName:string): Observable<any> {

    return this.http.get(`${this.apiUrl}/${userName}/country`)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('country', response.country);
        }),
        catchError(this.errorHandler.handleError)
      );
  }

  s_getMissingCoins(userName:string): Observable<any> {

    return this.http.get(`${this.apiUrl}/${userName}/missing`)
      .pipe(
        tap((response: any) => {
          console.log("Missing coins:", response.missingCoins);
        }),
        catchError(this.errorHandler.handleError)
      );
  }

  s_addCoin(userName:string, coinName:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${userName}/coin`, {coinName})
      .pipe(
        tap((response: any) => {
        }),
        catchError(this.errorHandler.handleError)
      );
  }

}