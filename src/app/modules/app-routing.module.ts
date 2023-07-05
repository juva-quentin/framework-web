import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginFormComponent } from '@components/login-form/login-form.component'
import { NotFoundComponent } from '@components/not-found/not-found.component'
import { AuthenticationGuard } from '@guards/authentication.guard'
import { RegisterFormComponent } from '@components/register-form/register-form.component'

const routes: Routes = [
  { path: 'login', component:LoginFormComponent },
  { path: 'register', component:RegisterFormComponent },
  {
    path: '',
    loadChildren: () => import('./home.module').then(m => m.HomeModule),
    canActivate:[AuthenticationGuard]
  },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notFound' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
