import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Drinks } from '@models/alcool'
import { AlcoolService } from '@services/alcool-service.service'
import { Observable, Subject, takeUntil } from 'rxjs'
import { NavBarService } from '@services/nav-bar.service'
@Component({
  selector: 'app-alcool-search',
  templateUrl: './alcool-search.component.html',
  styleUrls: ['./alcool-search.component.scss']
})
export class AlcoolSearchComponent implements OnInit, OnDestroy {

  asyncAlcools: Observable<Drinks> | undefined

  unsubsribe = new Subject<void>()

  errorMessage = ''

  alcoolTitle = ''

  loading = false
  constructor(
    private alcoolService: AlcoolService,
    private route: ActivatedRoute,
    private navbarService : NavBarService
  ) { }

  ngOnDestroy(): void {
    this.unsubsribe.next()
    this.unsubsribe.complete()
  }
  ngOnInit() {
    this.loading = true
    this.route.queryParams.subscribe(params => {
       this.alcoolTitle = params['query']
      if (this.alcoolRequest) {
        this.loading = false
        this.searchAlcools()
      } else {
        this.errorMessage = 'La requête de recherche est vide.'
        this.loading = false
      }
    })
    this.checkFilter()
  }

  searchAlcools() {
    this.asyncAlcools = this.alcoolService.search(this.alcoolRequest)
  }

  checkFilter() {
    this.navbarService.changeSelectedFilter.pipe(takeUntil(this.unsubsribe)).subscribe(selectedFilters => {
      this.searchWithFilter(selectedFilters)
    })
  }

  searchWithFilter(filter : {key: string, value: string}[]) {
    if (filter.length > 0) {
      this.asyncAlcools = this.alcoolService.alcoolWithFilter(filter)
    }else {
      this.searchAlcools()
    }
  }
  get alcoolRequest(): string {
    this.errorMessage = ''

    return this.alcoolTitle
  }
}
