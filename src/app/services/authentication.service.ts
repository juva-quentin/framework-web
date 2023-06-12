import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoginRequest } from '@models/authentication/login-request'
import { RegistrationRequest } from '@models/authentication/registration-request'
import { UserResponse } from '@models/authentication/user-response'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  token: string | null = null

  get loggedIn(): boolean {
    return this.token != null
  }

  private baseUrl = 'api/user'

  constructor(private httpClient: HttpClient) { }

  logout() {
    this.token = ''
  }

  login(loginRequest: LoginRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${this.baseUrl}/login`, loginRequest)
  }

  register(loginRequest: LoginRequest): Observable<UserResponse> {
    const registrationRequest = new RegistrationRequest(
      loginRequest.email,
      loginRequest.password,
      'John',
      'Smith'
    )

    return this.httpClient.post<UserResponse>(`${this.baseUrl}/register`, registrationRequest)
  }
}
