import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '@services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mix-ton-bar'

  constructor(private authService: AuthenticationService, private router: Router) {}

  get loggedIn() {
    return this.authService.loggedIn
  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('login')
  }
}
