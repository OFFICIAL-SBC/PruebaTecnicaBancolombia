import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from '../Utils/ErrorHandlerService';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://localhost:3000/country';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}


    s_getCoinsByCountry(countryName:string): Observable<any> {
      
      return this.http.get(`${this.apiUrl}/${countryName}`)
            .pipe(
              tap((response: any) => {
                
              }),
              catchError(this.errorHandler.handleError)
            );
    }


}
