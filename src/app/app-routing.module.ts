import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlcoolSearchComponent } from '@components/alcool-search/alcool-search.component'
import { LoginFormComponent } from '@components/login-form/login-form.component'
import { NotFoundComponent } from '@components/not-found/not-found.component'
import { HomeComponent } from '@components/home/home.component'
import { DetailsComponent } from '@components/details/details.component'
import { AlcoolicPageComponent } from '@components/alcoolic-page/alcoolic-page.component'
import { NoAlcoolicPageComponent } from '@components/no-alcoolic-page/no-alcoolic-page.component'

const routes: Routes = [
  { path: 'login', component:LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'avec-alcool', component: AlcoolicPageComponent },
  { path: 'sans-alcool', component: NoAlcoolicPageComponent },
  { path: 'search', component: AlcoolSearchComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/notFound' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
