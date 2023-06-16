import {Component, Input} from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '@services/authentication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  alcoolTitle = ''

  @Input()
  currentUrl!: string

  categories = [
    { strCategory: 'Ordinary Drink' },
    { strCategory: 'Cocktail' },
    { strCategory: 'Shake' }
  ]

  ingredients = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
  glasses: string[] = ['Verre 1', 'Verre 2', 'Verre 3']
  selectedGlass=''
  selectedCategory = ''
  selectedIngredient = ''

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

  filterByCategory() {
    // Implémentez la logique de filtrage par catégorie ici
  }

  filterByIngredient() {
    // Implémentez la logique de filtrage par ingrédient ici
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  filterByGlass() {}

  applyFilters() {
    //aply
  }
}
