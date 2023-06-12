import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginFormComponent } from '@components/login-form/login-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { StarRatingPipe } from '@pipes/star-rating.pipe'
import { AlcoolComponent } from '@components/alcool/alcool.component'
import { AlcoolSearchComponent } from '@components/alcool-search/alcool-search.component'
import { NotFoundComponent } from '@components/not-found/not-found.component'
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    StarRatingPipe,
    AlcoolComponent,
    AlcoolSearchComponent,
    NotFoundComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
