import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DisplayRequestedService {
  getIssueData(): Observable<any> {
    return this.http.get('http://localhost:8080/librarypro//showissuedbooks');

  }


  constructor(private http: HttpClient) { }
  getRequestedData(): Observable<any> {
    return this.http.get('http://localhost:8080/librarypro/showrequestedbooks');
  }

}
