import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Drinks } from '@models/alcool'
import { AlcoolService } from '@services/alcool-service.service'
import { Observable, finalize } from 'rxjs'
import { Location } from '@angular/common'
@Component({
  selector: 'app-alcool-search',
  templateUrl: './alcool-search.component.html',
  styleUrls: ['./alcool-search.component.scss']
})
export class AlcoolSearchComponent implements OnInit {

  asyncAlcools: Observable<Drinks> | undefined

  errorMessage = ''

  alcoolTitle = ''

  loading = false
  constructor(
    private alcoolService: AlcoolService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.loading = true
    this.route.queryParams.subscribe(params => {
       this.alcoolTitle = params['query']
      if (this.alcoolRequest) {
        this.searchAlcools()
      } else {
        this.errorMessage = 'La requête de recherche est vide.'
        this.loading = false
      }
    })
  }

  searchAlcools() {
    this.loading = true
    this.asyncAlcools = this.alcoolService.search(this.alcoolRequest).pipe(
      finalize(()=>this.loading = false))
  }

  get alcoolRequest(): string {
    this.errorMessage = ''

    return this.alcoolTitle
  }
}
