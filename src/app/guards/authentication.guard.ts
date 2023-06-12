import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { AuthenticationService } from '@services/authentication.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      if (this.authService.loggedIn) {
        return true
      } else{
        return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }})
      }

  }

}
