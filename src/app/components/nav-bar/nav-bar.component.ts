import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '@services/authentication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  alcoolTitle = ''
  constructor(private router: Router, private authService: AuthenticationService) {}
  get loggedIn() {
    return this.authService.loggedIn
  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('login')
  }
  searchAlcools():void {
    this.router.navigate(['/search'], { queryParams: { query: this.alcoolTitle }})
  }
}
