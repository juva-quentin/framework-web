import { Component, OnDestroy, OnInit } from '@angular/core'
import { Alcool } from '@models/alcool'
import { Subject, takeUntil } from 'rxjs'
import { AlcoolService } from '@services/alcool-service.service'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-alcoolic-page',
  templateUrl: './alcoolic-page.component.html',
  styleUrls: ['./alcoolic-page.component.scss']
})
export class AlcoolicPageComponent implements OnInit, OnDestroy {
  randomList:Alcool[] = []

  alcoolicList: Alcool[] = []

  unsubsribe = new Subject<void>()

  errorMessage = ''

  loading = false

  activeSlideIndex = 0

  randomColor: string | undefined
  constructor(
    private alcoolService : AlcoolService,
    private router : Router
  ) {}

  ngOnInit() {
    this.getAlcoolicList()
  }

  private errorHandler(errorResponse: HttpErrorResponse): void {
    this.errorMessage = errorResponse.error.error ?? `${errorResponse.error.status} - ${errorResponse.error.statusText}`
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

  ngOnDestroy(): void {
    this.unsubsribe.next()
    this.unsubsribe.complete()
  }
}
