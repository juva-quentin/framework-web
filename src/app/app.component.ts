import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { AuthenticationService } from '@services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mix-ton-bar'

  currentUrl=''
  constructor(private authService: AuthenticationService, private router: Router) {}

  get loggedIn() {
    return this.authService.loggedIn
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url
      }
    })
  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('login')
  }
}
