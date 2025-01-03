import { Injectable } from '@angular/core';
import { Admin } from "src/app/models/admin"
import { AuthService } from '../shared/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "http://localhost:3000";

  constructor(private authService: AuthService,private http: HttpClient) { }

  isAdmin(newAdmin: Admin) {
    return this.http.post(this.url + "/admin", newAdmin);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getHeaders() {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.logout();
  }
  
}
