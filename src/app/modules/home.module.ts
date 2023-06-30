import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from '@components/home/home.component'
import { AlcoolicPageComponent } from '@components/alcoolic-page/alcoolic-page.component'
import { NoAlcoolicPageComponent } from '@components/no-alcoolic-page/no-alcoolic-page.component'
import { AlcoolSearchComponent } from '@components/alcool-search/alcool-search.component'
import { DetailsComponent } from '@components/details/details.component'
import { HomeRoutingModule } from './home-routing.module'
import { AlcoolCardComponent } from '@components/alcool-card/alcool-card.component'
import { ListAlcoolComponent } from '@components/list-alcool/list-alcool.component'

@NgModule({
  declarations: [
    HomeComponent,
    AlcoolicPageComponent,
    NoAlcoolicPageComponent,
    AlcoolSearchComponent,
    DetailsComponent,
    AlcoolCardComponent,
    ListAlcoolComponent,
    DetailsComponent,
    AlcoolicPageComponent,
    NoAlcoolicPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
