import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BorrowerService {
  constructor(private http: HttpClient) {}

  fetchBorrowers(): Observable<any> {
    return this.http.get('http://localhost:4400/api/borrowers');
  }
}
