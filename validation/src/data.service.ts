import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 import { formData } from './formdata';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 private REST_API_SERVER_POST = "http://localhost:3000/postdata";
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  sendPostRequest(data:any): Observable<formData> {
      return this.http.post<formData>(this.REST_API_SERVER_POST,JSON.stringify(data),this.httpOptions).pipe(retry(1),catchError(this.handleError))
  }
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
