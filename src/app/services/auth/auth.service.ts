import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../../models/auth/LoginData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  attemptLogin(loginFormData: LoginData): Observable<any> {
    return this.http.post('http://localhost:4400/api/login', loginFormData);
  }
}
