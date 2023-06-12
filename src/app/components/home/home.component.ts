
import { Component, OnDestroy, OnInit } from '@angular/core'
import { AlcoolService } from '@services/alcool-service.service'
import { Subject, takeUntil, tap } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Alcool } from '@models/alcool'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  randomList:Alcool[] = []

  alcoolicList: Alcool[] = []

  unsubsribe = new Subject<void>()

  errorMessage = ''

  loading = false

  activeSlideIndex = 0
  constructor(
    private alcoolService : AlcoolService
  ) {}

  ngOnInit() {
    for (let i = 0; i<3; i++) {
      this.get5RandomAlcool()
    }
    // this.getAlcoolicList()
  }

  private errorHandler(errorResponse: HttpErrorResponse): void {
    this.errorMessage = errorResponse.error.error ?? `${errorResponse.error.status} - ${errorResponse.error.statusText}`
  }

  get5RandomAlcool() {
    this.alcoolService.randomAlcool() .pipe(tap(() => this.loading = true), takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.randomList.push(response.drinks[0])
          this.loading = false
          console.log(this.loading)
        },
        error: errorResponse => {
          this.loading = false
          this.errorHandler(errorResponse)
        }
      })
  }

  getAlcoolicList() {
    this.alcoolService.alcoolicAlcool() .pipe(tap(() => this.loading = true), takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.alcoolicList.push(response.drinks[0])
          this.loading = false
          console.log(this.loading)
        },
        error: errorResponse => {
          this.loading = false
          this.errorHandler(errorResponse)
        }
      })
  }

  navigateCarousel(direction: number) {
    const newIndex = this.activeSlideIndex + direction

    if (newIndex < 0) {
      this.activeSlideIndex = this.randomList.length - 1
    } else if (newIndex >= this.randomList.length) {
      this.activeSlideIndex = 0
    } else {
      this.activeSlideIndex = newIndex
    }
  }

  ngOnDestroy(): void {
    this.unsubsribe.next()
    this.unsubsribe.complete()
  }
}


