import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlcoolSearchComponent } from '@components/alcool-search/alcool-search.component'
import { LoginFormComponent } from '@components/login-form/login-form.component'
import { NotFoundComponent } from '@components/not-found/not-found.component'
import { HomeComponent } from '@components/home/home.component'
import { DetailsComponent } from '@components/details/details.component'
import { AlcoolicPageComponent } from '@components/alcoolic-page/alcoolic-page.component'
import { NoAlcoolicPageComponent } from '@components/no-alcoolic-page/no-alcoolic-page.component'
import { AuthenticationGuard } from '@guards/authentication.guard'
import { RegisterFormComponent } from '@components/register-form/register-form.component'

const routes: Routes = [
  { path: 'login', component:LoginFormComponent },
  { path: 'register', component:RegisterFormComponent },
  {
    path: '',
    loadChildren: () => import('./home.module').then(m => m.HomeModule)
  },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notFound' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
