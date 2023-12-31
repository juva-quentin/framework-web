import { Component, OnDestroy, OnInit } from '@angular/core'
import { AlcoolService } from '@services/alcool-service.service'
import { Subject, takeUntil } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Alcool } from '@models/alcool'
import { Router } from '@angular/router'

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

  loadingCarousel = false

  slideCount = 0

  constructor(
    private alcoolService : AlcoolService,
    private router : Router
  ) {}

  ngOnInit() {
    for (let i = 0; i<3; i++) {
      this.get5RandomAlcool()
    }
    this.getAlcoolicList()
  }

  private errorHandler(errorResponse: HttpErrorResponse): void {
    this.errorMessage = errorResponse.error.error ?? `${errorResponse.error.status} - ${errorResponse.error.statusText}`
  }

  get5RandomAlcool() {
    this.loadingCarousel = true
    this.alcoolService.randomAlcool() .pipe(takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.randomList.push(response.drinks[0])
          this.loadingCarousel = false
        },
        error: errorResponse => {
          this.loadingCarousel = false
          this.errorHandler(errorResponse)
        }
      })
  }

  getAlcoolicList() {
    this.loading = true
    this.alcoolService.alcoolicAlcool() .pipe(takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.alcoolicList = response.drinks
          this.loading = false
        },
        error: errorResponse => {
          this.loading = false
          this.errorHandler(errorResponse)
        }
      })
  }

  goToDetail(id: string) {
    this.router.navigate(['/details'], { queryParams: { id: id }})
  }

  prevSlide() {
    this.slideCount = (this.slideCount - 1 + this.randomList.length) % this.randomList.length
  }

  nextSlide() {
    this.slideCount = (this.slideCount + 1) % this.randomList.length
  }


  ngOnDestroy(): void {
    this.unsubsribe.next()
    this.unsubsribe.complete()
  }
}


