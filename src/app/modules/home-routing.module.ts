import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@components/home/home.component'
import { AlcoolicPageComponent } from '@components/alcoolic-page/alcoolic-page.component'
import { NoAlcoolicPageComponent } from '@components/no-alcoolic-page/no-alcoolic-page.component'
import { AlcoolSearchComponent } from '@components/alcool-search/alcool-search.component'
import { DetailsComponent } from '@components/details/details.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'avec-alcool', component: AlcoolicPageComponent },
  { path: 'sans-alcool', component: NoAlcoolicPageComponent },
  { path: 'recherche', component: AlcoolSearchComponent },
  { path: 'details', component: DetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
