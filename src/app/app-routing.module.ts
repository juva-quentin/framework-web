import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlcoolSearchComponent } from '@components/alcool-search/alcool-search.component'
import { LoginFormComponent } from '@components/login-form/login-form.component'
import { NotFoundComponent } from '@components/not-found/not-found.component'
import { HomeComponent } from '@components/home/home.component'

const routes: Routes = [
  { path: 'login', component:LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: AlcoolSearchComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/notFound' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
