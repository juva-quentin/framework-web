import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '@services/authentication.service'
import { AlcoolService } from '@services/alcool-service.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Subject, takeUntil } from 'rxjs'
import { IngredientDrinks } from '@models/Ingredient'
import { GlassDrinks } from '@models/Glass'
import { CategoryDrinks } from '@models/Category'
import { NavBarService } from '@services/nav-bar.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  alcoolTitle = ''

  @Input()
  currentUrl!: string

  errorMessage = ''
  unsubsribe = new Subject<void>()

  ingredients: IngredientDrinks[] = []
  glasses: GlassDrinks[] = []
  category: CategoryDrinks[] = []
  selectedFilter: {key: string, value: string}[] =[]
  toogleCat= false
  toogleIng= false
  toogleGlass= false
  constructor(private router: Router, private authService: AuthenticationService, private alcoolService: AlcoolService, private navBarService: NavBarService) {}
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
  ngOnInit(): void {
    this.getFilters()
  }

  ngOnDestroy(): void {
    this.unsubsribe.next()
    this.unsubsribe.complete()
  }

  private errorHandler(errorResponse: HttpErrorResponse): void {
    this.errorMessage = errorResponse.error.error ?? `${errorResponse.error.status} - ${errorResponse.error.statusText}`
  }

  getFilters() {
    this.alcoolService.getIngredients().pipe(takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.ingredients = response.drinks
        },
        error: errorResponse => {
          this.errorHandler(errorResponse)
        }
      })
    this.alcoolService.getGlass().pipe(takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.glasses = response.drinks
        },
        error: errorResponse => {
          this.errorHandler(errorResponse)
        }
      })
    this.alcoolService.getCategory().pipe(takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.category = response.drinks
        },
        error: errorResponse => {
          this.errorHandler(errorResponse)
        }
      })
  }

  selectBtn(filtre: string) {
    switch (filtre) {
      case 'cat':
        this.toogleCat = !this.toogleCat
        this.toogleIng = false
        this.toogleGlass = false
        break
      case 'ing':
        this.toogleIng = !this.toogleIng
        this.toogleCat = false
        this.toogleGlass = false
        break
      case 'glass':
        this.toogleGlass = !this.toogleGlass
        this.toogleIng = false
        this.toogleCat = false
        break
    }
  }

  isFilterSelected(key: string, value: string): boolean {
    return this.selectedFilter.some(obj => obj.key === key && obj.value === value)
  }
  addFilter(key: string, strFilter: string) {
    if (key == 'i') {
      this.selectedFilter = this.selectedFilter.filter(filter => filter.key !== key)
    }
    const index = this.selectedFilter.findIndex(filter => filter.key === key && filter.value === strFilter)

    if (index !== -1) {
      this.selectedFilter.splice(index, 1)
    } else {
      this.selectedFilter.push({ key, value: strFilter })
    }
    this.navBarService.addFilter(this.selectedFilter)
  }

}
