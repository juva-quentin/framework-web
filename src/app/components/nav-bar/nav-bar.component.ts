import { Component } from '@angular/core'
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  alcoolTitle = ''
  constructor(private router: Router) {}

  searchAlcools():void {
    this.router.navigate(['/search'], { queryParams: { query: this.alcoolTitle }})
  }
}
