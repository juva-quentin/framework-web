import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import { Alcool } from '@models/alcool'
import { AlcoolService } from '@services/alcool-service.service'
import { ActivatedRoute } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  alcool: Alcool | undefined

  errorMessage = ''

  unsubsribe = new Subject<void>()

  alcoolTitle = ''

  loading = false
  constructor(
    private alcoolService: AlcoolService,
    private route: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.unsubsribe.next()
    this.unsubsribe.complete()
  }
  ngOnInit() {
    this.loading = true
    this.route.queryParams.subscribe(params => {
      this.alcoolTitle = params['id']
      if (this.alcoolRequest) {
        this.getAlcoolDetails()
      } else {
        this.errorMessage = 'Un problème est survenu'
        this.loading = false
      }
    })
  }

  private errorHandler(errorResponse: HttpErrorResponse): void {
    this.errorMessage = errorResponse.error.error ?? `${errorResponse.error.status} - ${errorResponse.error.statusText}`
  }
  getAlcoolDetails() {
    this.loading = true
    this.alcoolService.alcoolDetails(this.alcoolRequest).pipe(takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.alcool = response.drinks[0]
        },
        error: errorResponse => {
          this.loading = false
          this.errorHandler(errorResponse)
        },
        complete: () => {
          this.loading = false
          this.getIngredients()
        }
      })
  }
  getIngredients(): string[] {
    const ingredients: string[] = []
    const ingredientKeys = Object.keys(this.alcool ?? {}).filter(key =>
      key.includes('strIngredient')
    )

    ingredientKeys.forEach(ingredientKey => {
      const ingredientIndex = ingredientKey.slice(ingredientKey.length == 15 ? -2 : -1)
      const measureKey = `strMeasure${ingredientIndex}`
      if (
        this.alcool![ingredientKey as keyof Alcool] &&
        this.alcool![measureKey as keyof Alcool]
      ) {
        const ingredient = this.alcool![ingredientKey as keyof Alcool]
        const measure = this.alcool![measureKey as keyof Alcool]
        ingredients.push(`${ingredient} - ${measure}`)
      }
    })

    return ingredients
  }
  get alcoolRequest(): string {
    this.errorMessage = ''

    return this.alcoolTitle
  }
}

