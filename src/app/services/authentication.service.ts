import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoginRequest } from '@models/authentication/login-request'
import { UserResponse } from '@models/authentication/user-response'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private tokenKey = 'authToken'

  get loggedIn(): boolean {
    return this.token != null
  }
  get token(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  set token(value: string | null) {
    if (value) {
      localStorage.setItem(this.tokenKey, value)
    } else {
      localStorage.removeItem(this.tokenKey)
    }
  }

  private baseUrl = 'https://sf-5-4-jwt.ld-web.net/api'

  constructor(private httpClient: HttpClient) { }

  logout() {
   this.token = null
  }

  login(loginRequest: LoginRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${this.baseUrl}/login_check`, loginRequest)
  }

}
