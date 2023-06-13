import { Component } from '@angular/core'
import { finalize, Observable } from 'rxjs'
import { Drinks } from '@models/alcool'
import { AlcoolService } from '@services/alcool-service.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
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
      this.alcoolTitle = params['id']
      if (this.alcoolRequest) {
        this.getAlcoolDetails()
      } else {
        this.errorMessage = 'Un problème est survenu'
        this.loading = false
      }
    })
  }

  getAlcoolDetails() {
    this.loading = true
    this.asyncAlcools = this.alcoolService.alcoolDetails(this.alcoolRequest).pipe(
      finalize(()=>this.loading = false))
  }

  get alcoolRequest(): string {
    this.errorMessage = ''

    return this.alcoolTitle
  }
}

